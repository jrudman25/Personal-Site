# Jordan Rudman — Personal Portfolio

### 🌐 [Live Site](https://rudman-portfolio.web.app/)

A personal portfolio site showcasing my work, skills, and background as a software engineer.

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React, React Router |
| **Build Tool** | Vite |
| **Styling** | MUI (Material UI), Emotion |
| **Animation** | Framer Motion |
| **Hosting** | Firebase Hosting |
| **Testing** | Jest, jsdom |
| **Design** | Figma, Canva |

## Features

- **Animated greeting** that cycles through multiple languages
- **Compact work-first hero** with a short headline, supporting line, primary actions, the portrait with the animated signature, and location, education, and technology pills so selected work follows immediately
- **Curated project grid** with outcomes, key features, project highlights, standout details, links, and tech stack tags
- **Approach and skills sections** designed for quick scanning, with skills organized into six icon-led groups
- **Shared typography** through a local-font MUI theme (Aptos with system fallbacks, no font downloads)
- **Keyboard-operable navigation** with native buttons and reduced-motion-aware scrolling
- **Responsive design** optimized desktop-first with mobile scaling
- **Contact CTA** with direct email, LinkedIn, and secondary resume access

## Project Structure

```
src/
├── App.jsx            # Router and layout
├── Home.jsx           # Single-page portfolio layout
├── Error.jsx          # 404 page
├── theme.js           # Shared MUI typography theme
├── NavBar.jsx         # Navigation bar
├── NavBarElement.jsx   # NavBar styled component
├── Projects.jsx       # Curated project grid
├── Skills.jsx         # Grouped skills section
├── Contact.jsx        # CTA section
├── Socials.jsx        # Social media icons
├── Footer.jsx         # Site footer
├── Loading.jsx        # Loading animation
├── AnimatedBox.jsx    # Framer Motion wrapper
└── img/               # Image assets
```
