# ⚡ Sanjana's Coding Profiles
### Cyberpunk Neon Edition

A futuristic, responsive website that brings all my coding profiles together in one place.

Built with a **Cyberpunk Neon** aesthetic, featuring glowing platform cards, vibrant neon accents, interactive filters, and a sleek developer-inspired interface.

**One Developer. Multiple Platforms. Infinite Possibilities.**

---

## 🌐 Live Website

**[Explore My Coding Profiles](https://sanjanagadamsetty.github.io/Coding-Profiles-Of-Sanjana/)**

## ✨ Features

- **Cyberpunk Neon Design** — Midnight backgrounds, electric cyan, purple, and magenta accents.
- **Dynamic Platform Cards** — Individual neon colors and icons for coding platforms.
- **Live Search** — Instantly search for coding platforms.
- **Category Filtering** — Browse platforms by category.
- **Tile & List Views** — Switch between different layouts.
- **Dark & Light Modes** — Toggle themes with preferences saved locally.
- **Responsive Design** — Optimized for desktop, tablet, and mobile.
- **Copy Profile Links** — Copy configured profile URLs with one click.
- **Scroll-to-Top Button** — Smooth navigation.
- **Dynamic Platform Management** — Add new profiles and categories without modifying the interface.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Cyberpunk styling, animations, responsive layout |
| JavaScript | Search, filtering, theme switching, and interactions |
| Google Fonts | Orbitron and Rajdhani typography |
| GitHub Pages | Static website hosting |

No frameworks or backend required.

## 📁 Project Structure

```text
Coding-Profiles-Of-Sanjana/
│
├── index.html       # Website structure and CSS
├── profiles.js      # Coding platforms and categories
├── app.js           # Interactive functionality
└── README.md        # Project documentation
```

## 🚀 Getting Started

**1. Clone the repository**

```bash
git clone https://github.com/SanjanaGadamsetty/Coding-Profiles-Of-Sanjana.git
```

**2. Navigate to the project**

```bash
cd Coding-Profiles-Of-Sanjana
```

**3. Run the website**

Open `index.html` in your browser.

Alternatively, use the Live Server extension in Visual Studio Code.

## 🎨 Theme Colors

| Color | Hex Code |
|---|---|
| Midnight Background | `#080B16` |
| Dark Surface | `#101628` |
| Electric Cyan | `#00E5FF` |
| Neon Magenta | `#FF39C8` |
| Neon Purple | `#9D4DFF` |
| Primary Text | `#F2F7FF` |

## ➕ Adding Coding Platforms

All coding profiles are stored in `profiles.js`.

To add a new platform, insert an object inside the `window.CODING_PROFILES` array:

```javascript
{
  name: "LeetCode",
  category: "DSA & Problem Solving",
  icon: "LC",
  color: "#FFA116",
  url: "https://leetcode.com/u/YOUR_USERNAME/"
}
```

Replace `YOUR_USERNAME` with your actual username.

### Creating New Categories

Categories are automatically generated from the platform data.

For example:

```javascript
{
  name: "Hugging Face",
  category: "AI & Machine Learning",
  icon: "HF",
  color: "#FFD21E",
  url: "https://huggingface.co/YOUR_USERNAME"
}
```

The website automatically adds **AI & Machine Learning** to the category filters.

No changes to `app.js` or `index.html` are required.

## ⚙️ How It Works

The website loads files in the following order:

1. `index.html` creates the layout and visual design.
2. `profiles.js` provides the coding platform information.
3. `app.js` dynamically generates platform cards, filters, and interactions.

The application uses browser `localStorage` to remember the selected theme and layout.

## 🌍 Deploying with GitHub Pages

1. Push the project files to GitHub.
2. Open the repository's **Settings**.
3. Navigate to **Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder.
6. Save the settings.

Once deployed, the website should be available at:

https://sanjanagadamsetty.github.io/Coding-Profiles-Of-Sanjana/

If GitHub Pages is already configured, pushing the updated files to the publishing branch should trigger a new deployment.

## 🔮 Future Enhancements

- Animated platform logos and custom SVG icons.
- Enhanced neon hover effects.
- Keyboard shortcuts for platform search.
- Additional coding platform categories.
- Accessibility improvements.
- More advanced filtering and sorting.

## 👩‍💻 About the Developer

**Sanjana Gadamsetty**

Passionate about programming, data structures, algorithms, problem-solving, and exploring new technologies.

This website serves as a centralized space to explore my coding journey across different platforms.

**GitHub:** [SanjanaGadamsetty](https://github.com/SanjanaGadamsetty)

## 📄 License

No license has been specified for this project. All rights are reserved by default unless a license is added.

---

**Designed & Developed by Sanjana Gadamsetty**

*Code. Create. Explore. Repeat.* ⚡