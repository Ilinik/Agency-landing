# Shadient.co - Agency Landing Page

A modern, responsive landing page for a digital marketing agency. Built with clean HTML, SCSS, and vanilla JavaScript.

## Features

- **Modern Design** - Clean, professional agency aesthetic with gradient accents
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Smooth Animations** - Interactive elements and smooth scrolling effects
- **Swiper Slider** - Touch-enabled testimonial carousel
- **Mobile Navigation** - Hamburger menu with smooth toggle animation
- **SCSS Architecture** - Modular, maintainable stylesheet organization

## Sections

1. **Header** - Logo, navigation menu with dropdown, and CTA button
2. **Hero** - Eye-catching headline with email signup form
3. **Companies** - Infinite scrolling trust badges showcasing partner logos
4. **Offer** - Services grid highlighting agency capabilities
5. **Why Us** - Competitive advantages and benefits
6. **Work** - Portfolio showcase section
7. **Reviews** - Client testimonials with slider functionality
8. **Idea** - Call-to-action section
9. **Footer** - Links and company information

## Tech Stack

- **Build Tool**: [Vite](https://vitejs.dev/) - Fast, modern frontend tooling
- **Styling**: SCSS with modular architecture
- **Slider**: [Swiper](https://swiperjs.com/) - Touch slider library
- **Icons**: Custom SVG icons
- **Fonts**: Agrandir font family

## Project Structure

```
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── src/
│   ├── assets/
│   │   ├── fonts/          # Agrandir font family
│   │   ├── icons/          # SVG icons (logo, companies, offers)
│   │   └── images/         # Backgrounds and user avatars
│   ├── js/
│   │   ├── blocks/         # Feature-specific JS modules
│   │   │   ├── burger.js   # Mobile menu toggle
│   │   │   ├── idea.js     # Idea section interactions
│   │   │   └── slider.js   # Swiper initialization
│   │   └── main.js         # Main entry point
│   └── styles/
│       ├── blocks/         # Component styles
│       │   ├── header.scss
│       │   ├── hero.scss
│       │   ├── companies.scss
│       │   ├── offer.scss
│       │   ├── why-us.scss
│       │   ├── work.scss
│       │   ├── reviews.scss
│       │   ├── idea.scss
│       │   └── footer.scss
│       ├── utils/          # Utilities
│       │   ├── _fonts.scss
│       │   ├── _mixins.scss
│       │   ├── _reset.scss
│       │   └── _variables.scss
│       ├── general.scss    # Base styles
│       └── main.scss       # Style entry point
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agency-landing
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
yarn build
# or
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
# or
npm run preview
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with hot reload |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |

## Customization

### Colors

Edit CSS variables in `src/styles/utils/_variables.scss`:

```scss
$primary-color: #your-color;
$secondary-color: #your-color;
```

### Fonts

The project uses the Agrandir font family. To change fonts:

1. Add new font files to `src/assets/fonts/`
2. Update `src/styles/utils/_fonts.scss`
3. Update variables in `src/styles/utils/_variables.scss`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
