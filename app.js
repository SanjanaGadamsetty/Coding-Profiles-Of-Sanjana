
(() => {
  'use strict';

  const profiles = Array.isArray(window.CODING_PROFILES)
    ? window.CODING_PROFILES
    : [];

  const $ = id => document.getElementById(id);

  const cards = $('cards');
  const filters = $('filters');
  const search = $('search');

  let active = 'All';
  let view = localStorage.getItem('sg-view') === 'list'
    ? 'list'
    : 'tile';

  let toastTimer;

  const categories = [
    'All',
    ...new Set(profiles.map(p => p.category))
  ];

  // Toast notifications
  function notify(message) {
    const t = $('toast');
    t.textContent = message;
    t.classList.add('show');

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
      t.classList.remove('show');
    }, 2200);
  }

  // Create HTML elements
  function el(tag, cls, text) {
    const n = document.createElement(tag);

    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;

    return n;
  }

  // Render category filters
  function renderFilters() {
    filters.replaceChildren();

    categories.forEach(cat => {
      const b = el(
        'button',
        'chip' + (cat === active ? ' active' : ''),
        cat
      );

      b.type = 'button';
      b.setAttribute('aria-pressed', String(cat === active));

      b.addEventListener('click', () => {
        active = cat;
        renderFilters();
        render();
      });

      filters.append(b);
    });
  }

  // Render coding profile cards
  function render() {
    const term = search.value.trim().toLowerCase();

    const filtered = profiles.filter(p =>
      (active === 'All' || p.category === active) &&
      [p.name, p.category].some(s =>
        s.toLowerCase().includes(term)
      )
    );

    $('total').textContent = profiles.length;
    $('visible').textContent = filtered.length;

    cards.classList.toggle('list', view === 'list');

    $('view').textContent = view === 'list'
      ? '☷ LIST VIEW'
      : '▦ TILE VIEW';

    $('view').setAttribute(
      'aria-pressed',
      String(view === 'list')
    );

    cards.replaceChildren();

    filtered.forEach(p => {
      const card = el('article', 'card');

      card.style.setProperty(
        '--card-accent',
        p.color || '#22e6f2'
      );

      const top = el('div', 'card-top');

      top.append(
        el('div', 'symbol', p.icon || p.name.slice(0, 2))
      );

      top.append(
        el('span', 'category', p.category)
      );

      const info = el('div', 'card-info');

      info.append(
        el('h3', '', p.name),
        el('p', '', p.category + ' • Coding profile')
      );

      const actions = el('div', 'card-actions');

      if (p.url) {
        const a = el('a', 'open', 'OPEN PROFILE ↗');

        a.href = p.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';

        actions.append(a);

        const copy = el('button', 'copy', '⧉ Copy');

        copy.type = 'button';

        copy.setAttribute(
          'aria-label',
          'Copy ' + p.name + ' profile link'
        );

        copy.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(p.url);
            notify('Profile link copied');
          } catch {
            notify('Copy unavailable in this browser');
          }
        });

        actions.append(copy);
      } else {
        const a = el(
          'span',
          'category',
          'PROFILE LINK COMING SOON'
        );

        actions.append(a);
      }

      card.append(top, info, actions);
      cards.append(card);
    });

    $('empty').hidden = filtered.length !== 0;
  }

  // Live search
  search.addEventListener('input', render);

  // Tile / List view toggle
  $('view').addEventListener('click', () => {
    view = view === 'tile' ? 'list' : 'tile';

    localStorage.setItem('sg-view', view);

    render();
  });

  // Reset filters and search
  $('reset').addEventListener('click', () => {
    active = 'All';
    search.value = '';

    renderFilters();
    render();
  });

  // Theme management
  const theme = $('theme');
  const saved = localStorage.getItem('sg-theme');

  if (saved === 'light') {
    document.body.classList.add('light');
  }

  function updateTheme() {
    theme.textContent = document.body.classList.contains('light')
      ? '☀ LIGHT MODE'
      : '☾ DARK MODE';
  }

  theme.addEventListener('click', () => {
    document.body.classList.toggle('light');

    localStorage.setItem(
      'sg-theme',
      document.body.classList.contains('light')
        ? 'light'
        : 'dark'
    );

    updateTheme();
  });

  updateTheme();

  // Dynamic footer year
  $('year').textContent = new Date().getFullYear();

  // Back-to-top button
  window.addEventListener('scroll', () => {
    $('top').classList.toggle(
      'show',
      window.scrollY > 450
    );
  }, { passive: true });

  $('top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initialize application
  renderFilters();
  render();
})();
