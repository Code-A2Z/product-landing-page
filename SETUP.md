# Setup Guide 🛠️

This guide will help you set up the Product Landing Page project locally on your machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software
- **Node.js** (v16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v8.0 or higher) or **yarn** (v1.22 or higher)
- **Git** - [Download here](https://git-scm.com/)

### Verify Installation
```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

## 🚀 Installation Steps

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/Code-A2Z/product-landing-page.git

# Or using SSH (if you have SSH keys set up)
git clone git@github.com:Code-A2Z/product-landing-page.git

# Navigate to the project directory
cd product-landing-page
```

### Step 2: Install Dependencies

```bash
# Using npm (recommended)
npm install

# Or using yarn
yarn install
```

### Step 3: Start Development Server

```bash
# Using npm
npm run dev

# Or using yarn
yarn dev
```

The application will start on `http://localhost:5173` by default.

## 🔧 Available Scripts

### Development
```bash
# Start development server with hot reload
npm run dev
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

### Code Quality
```bash
# Run linting (if configured)
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## 📁 Project Structure Explained

```
product-landing-page/
├── public/                    # Static assets
│   ├── vite.svg              # Vite icon
│   ├── illustr.png           # Hero illustration
│   ├── illustr-two.png       # Secondary illustration
│   └── landing-logo.jpg      # Company logo
├── src/                      # Source code
│   ├── components/           # React components
│   │   ├── Header.jsx        # Navigation header
│   │   ├── HeroSection.jsx   # Main hero section
│   │   ├── FeaturesSection.jsx # Features showcase
│   │   ├── TransformSection.jsx # Business messaging
│   │   └── TrustedBySection.jsx # Client testimonials
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles
│   ├── index.css            # Tailwind imports
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js           # Vite configuration
├── README.md                # Project documentation
└── SETUP.md                 # This setup guide
```

## ⚙️ Configuration

### Tailwind CSS Setup

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Vite Configuration

Vite configuration is in `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

## 🎨 Customization Guide

### Changing Colors

1. **Update Tailwind Config** (`tailwind.config.js`):
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

2. **Use in Components**:
```jsx
<button className="bg-primary-500 hover:bg-primary-600">
  Click me
</button>
```

### Adding New Components

1. **Create Component File** (`src/components/NewSection.jsx`):
```jsx
import React from 'react';

const NewSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          New Section
        </h2>
        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Import in App.jsx**:
```jsx
import NewSection from './components/NewSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Other components */}
      <NewSection />
    </div>
  );
}
```

### Updating Content

- **Hero Section**: Edit `src/components/HeroSection.jsx`
- **Features**: Edit `src/components/FeaturesSection.jsx`
- **Company Info**: Edit `src/components/TransformSection.jsx`
- **Testimonials**: Edit `src/components/TrustedBySection.jsx`

### Adding Images

1. Place images in `public/` folder
2. Reference them in components:
```jsx
<img src="/your-image.png" alt="Description" />
```

## 🌐 Deployment Options

### Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
npm run build
vercel --prod
```

### Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run build
npm run deploy
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process using port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

#### Node Modules Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Tailwind Styles Not Working
```bash
# Ensure Tailwind is properly imported in src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Build Issues
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### Getting Help

If you encounter issues:

1. **Check Console**: Look for error messages in browser console
2. **Check Terminal**: Review terminal output for build errors
3. **GitHub Issues**: Search existing issues or create a new one
4. **Documentation**: Review Vite and React documentation

## 📞 Support

- **GitHub Issues**: [Create an issue](https://github.com/Code-A2Z/product-landing-page/issues)
- **Email**: johnsendi727@gmail.com
- **Code-A2Z Community**: Join our Discord server

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Development server starts without errors
- [ ] All components render properly
- [ ] Images load correctly
- [ ] Responsive design works across devices
- [ ] Build process completes successfully
- [ ] Production preview works

## 🎉 You're Ready!

Congratulations! Your Product Landing Page is now set up and ready for development. Start customizing the components to match your brand and requirements.

---

**Need help?** Don't hesitate to reach out to the Code-A2Z community or create an issue on GitHub!