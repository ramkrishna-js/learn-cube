# Learn Cube 🧩

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built with Astro](https://img.shields.io/badge/Made_with-Astro-orange?style=flat&logo=astro)](https://astro.build)
[![Deployment Status](https://github.com/ramkrishna-js/learn-cube/actions/workflows/deploy.yml/badge.svg)](https://github.com/ramkrishna-js/learn-cube/actions/workflows/deploy.yml)

> **"Stop peeling the stickers."** 
> The ultimate open-source platform to master the Rubik's Cube. From your first solve to speedcubing world records.

---

## 🌟 Why this project?

Most cubing tutorials are static PDFs or confusing videos. **Learn Cube** changes that by providing:
- **Interactive Visuals:** Don't just read "R U R' U'". *See* the arrows move.
- **Tools Built-in:** A professional-grade Speedcube Timer and Quiz right in the browser.
- **Culture & Context:** We don't just teach the moves; we teach the history, the slang, and the hardware.
- **Humor:** Because memorizing 57 OLL algorithms is painful, and you need a laugh.

## ✨ Features

### 📚 Comprehensive Guides
- **Beginner Method:** The "Daisy" and Layer-by-Layer method detailed with animations.
- **CFOP Module:** Deep dives into Advanced Cross, F2L, OLL (2-Look & Full), PLL, COLL, and Winter Variation.
- **Advanced Methods:** Introductions to **Roux**, **ZZ**, **FMC**, and Subset Theory (ZBLL).
- **Exotic Puzzles:** Guides for 15+ puzzles including the **Ghost Cube**, Square-1, and Clock.
- **Culture:** Histories of banned events (Feet Solving), legends, and addiction stages.

### 🛠️ Interactive Tools
| Tool | Description |
| :--- | :--- |
| **Move Visualizer** | React component that renders arrow diagrams for any algorithm string. |
| **Speed Timer** | Fully functional timer with WCA-style scrambles and history tracking. |
| **Quiz Engine** | Test your knowledge on notation, history, and trivia. |

### 🤓 Nerd Territory
- **Solve Reconstructions:** Analysis of sub-5 second solves.
- **Math Theory:** Commutators, Parity, and God's Number.
- **Blindfolded:** Complete guides for OP and M2 methods.
- **Cubing Health:** How to avoid RSI and "Cuber's Thumb".

## 🚀 Getting Started

### Prerequisites
- Node.js v18.14.1 or higher.

### Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/ramkrishna-js/learn-cube.git
    cd learn-cube
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run locally**
    ```bash
    npm run dev
    ```
    Open `http://localhost:4321/learn-cube` to see the site!

## 📦 Project Structure

```text
/
├── src/
│   ├── components/      # React components (Timer, Visualizer, Quiz)
│   ├── content/
│   │   └── docs/        # The heart of the project (MDX files)
│   │       ├── beginner/# Beginner method tutorials
│   │       ├── advanced/# CFOP, Roux, BLD, Theory
│   │       ├── guides/  # Hardware, History, Culture, Health
│   │       ├── puzzles/ # Other puzzles (Minx, Skewb, etc.)
│   │       └── tools/   # Pages for the Timer and Quiz
│   └── assets/          # Images and SVGs
├── public/              # Static assets
└── astro.config.mjs     # Starlight configuration
```

## 🤝 Contributing

We welcome contributions! Whether you spot a typo in an algorithm or want to add a guide for the **Gigaminx**, here is how:

1.  Fork the Project.
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the Branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

**Note:** Please keep the tone lighthearted and fun.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgements

- **SpeedCubeDB** for being the bible of algorithms.
- **J Perm** for teaching the world how to solve.
- **Astro Starlight** for the amazing documentation template.

---
Built with ❤️ (and a lot of DNF solves) by [ramkrishna-js](https://github.com/ramkrishna-js).
