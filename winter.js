// Decorative falling snow, intentionally separate from the profile application.
(function(){
 const start=()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const layer=document.createElement('div');layer.className='winter-snow';layer.setAttribute('aria-hidden','true');
  const count=innerWidth<700?34:65;
  for(let i=0;i<count;i++){
   const s=document.createElement('span');s.textContent=i%4===0?'❄':'•';
   s.style.setProperty('--x',(Math.random()*100)+'%');
   s.style.setProperty('--s',(4+Math.random()*12)+'px');
   s.style.setProperty('--o',(0.25+Math.random()*.65));
   s.style.setProperty('--d',(10+Math.random()*19)+'s');
   s.style.setProperty('--delay',(-Math.random()*29)+'s');
   s.style.setProperty('--drift',(-70+Math.random()*140)+'px');
   layer.appendChild(s);
  }
  document.body.appendChild(layer);
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
