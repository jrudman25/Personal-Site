# Jordan Rudman — Personal Portfolio

### 🌐 [Live Site](https://rudman-portfolio.web.app/)

A personal portfolio site showcasing my work, skills, and background as a Software Engineer.

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
- **Skills section** with interactive chip/badge layout
- **Project carousel** (Swiper) showcasing past work with tech stack tags
- **Responsive design** optimized for desktop and mobile
- **Resume viewer** with embedded PDF rendering (react-pdf)
- **Contact CTA** with direct email and LinkedIn links

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Deploy to Firebase
firebase deploy
```

## Project Structure

```
src/
├── App.jsx            # Router and layout
├── Home.jsx           # Landing page (greeting, skills, projects)
├── About.jsx          # Bio and photo
├── Resume.jsx         # PDF resume viewer
├── Error.jsx          # 404 page
├── NavBar.jsx         # Navigation bar
├── NavBarElement.jsx   # NavBar styled component
├── Projects.jsx       # Project carousel (Swiper)
├── Contact.jsx        # CTA section
├── Socials.jsx        # Social media icons
├── Footer.jsx         # Site footer
├── Loading.jsx        # Loading animation
├── AnimatedBox.jsx    # Framer Motion wrapper
└── img/               # Image assets
```
