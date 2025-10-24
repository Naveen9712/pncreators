# 🚀 PN Creators - Creative Web Development Company

A modern, fully responsive React.js website built with Vite, React, Tailwind CSS, and Lucide React icons. The project follows a well-organized, modular component structure.

## ✨ Features

- **Modern Design**: Beautiful gradient UI with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Modular Architecture**: Each section is a separate, reusable component
- **Interactive Components**: Dynamic menu, forms, and interactive elements
- **Icon Library**: Integrated Lucide React icons for clean, modern iconography
- **Optimized Performance**: Built with Vite for lightning-fast development and builds
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom Fonts**: Poppins for headings, Open Sans for body text

## 🎨 Website Sections

- **Header**: Sticky navigation with mobile-responsive menu
- **Hero**: Eye-catching hero section with call-to-action
- **About**: Company introduction with imagery
- **Services**: 4 core services (Logo & Branding, Web Development, Mobile Apps, Digital Marketing)
- **Statistics**: Company achievements and metrics
- **Portfolio**: Latest creative works showcase
- **Clients**: Featured client logos
- **Domains**: 12 business domains served
- **Testimonials**: Client reviews and feedback
- **Contact**: Interactive contact form
- **Newsletter**: Email subscription section
- **Footer**: Comprehensive footer with contact info and social links

## 🛠️ Technologies Used

- **React 19.2.0** - Modern UI library
- **Vite 7.1.7** - Next-generation frontend tooling
- **Tailwind CSS 3.4+** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon library
- **PostCSS & Autoprefixer** - CSS processing
- **Google Fonts** - Poppins & Open Sans

## 📦 Installation

All dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🏃 Running the Application

### Development Mode

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
pncreators/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── about/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── services/
│   │   │   ├── Services.jsx
│   │   │   └── Services.css
│   │   ├── stats/
│   │   │   ├── Stats.jsx
│   │   │   └── Stats.css
│   │   ├── portfolio/
│   │   │   ├── Portfolio.jsx
│   │   │   └── Portfolio.css
│   │   ├── clients/
│   │   │   ├── Clients.jsx
│   │   │   └── Clients.css
│   │   ├── domains/
│   │   │   ├── Domains.jsx
│   │   │   └── Domains.css
│   │   ├── testimonial/
│   │   │   ├── Testimonial.jsx
│   │   │   └── Testimonial.css
│   │   ├── contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── newsletter/
│   │   │   ├── Newsletter.jsx
│   │   │   └── Newsletter.css
│   │   └── footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles & Tailwind directives
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md                # This file
```

## 🎯 Component Architecture

Each section of the website is organized into its own folder with:
- **Component file (.jsx)**: Contains the React component logic and JSX
- **Style file (.css)**: Contains component-specific Tailwind classes

This modular structure makes it easy to:
- ✅ Find and edit specific sections
- ✅ Reuse components across different pages
- ✅ Maintain and scale the project
- ✅ Collaborate with team members
- ✅ Test components individually

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Fonts
Fonts are configured in:
- `index.html` - Google Fonts import
- `tailwind.config.js` - Font family definitions
- `src/index.css` - Global font application

### Content
Each component can be edited independently:
- `Header.jsx` - Navigation menu items
- `Hero.jsx` - Hero section content and CTA
- `Services.jsx` - Service offerings
- `Portfolio.jsx` - Portfolio items
- `Contact.jsx` - Contact form fields
- `Footer.jsx` - Footer links and contact info

### Styling
Tailwind utility classes are used throughout. Modify classes directly in the JSX for instant updates.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

Build the project and deploy the `dist` folder to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

## 🔧 Development Tips

1. **Hot Reload**: Changes are reflected instantly in development mode
2. **Component Structure**: Each section is isolated for easy maintenance
3. **Icons**: Import additional icons from `lucide-react` as needed
4. **Styling**: Use Tailwind utility classes for quick styling
5. **CSS Files**: Component-specific styles use `@apply` directive with Tailwind

## 📝 Adding New Components

To add a new section:

1. Create a new folder in `src/components/`
2. Add `ComponentName.jsx` and `ComponentName.css`
3. Import and add to `App.jsx`

Example:
```jsx
// src/components/blog/Blog.jsx
import React from 'react';
import './Blog.css';

export default function Blog() {
  return (
    <section className="blog-section">
      {/* Your content */}
    </section>
  );
}
```

## 🌟 Key Features Implemented

### Interactive Elements
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Hover effects on cards and buttons
- Interactive forms with styled inputs
- Animated gradient buttons

### Design System
- Consistent color palette (Purple, Pink, Blue gradients)
- Typography hierarchy (Poppins + Open Sans)
- Spacing and layout system
- Shadow and border radius utilities
- Responsive grid layouts

## 📧 Contact

For questions or support, reach out through the contact form on the website!

---

**Built with ❤️ by PN Creators Team**

Happy coding! 🎉
