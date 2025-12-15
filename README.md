# DCL Coming Soon - Diagnostic Centre Limited

A modern, responsive "Coming Soon" landing page for Diagnostic Centre Limited.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher) - Download from [nodejs.org](https://nodejs.org)

### Installation

1. **Extract the zip file** to your desired location

2. **Open terminal/command prompt** and navigate to the project folder:
   ```bash
   cd dcl-coming-soon
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and go to `http://localhost:5173`

## 📁 Project Structure

```
dcl-coming-soon/
├── public/
│   └── favicon.svg        # Site favicon
├── src/
│   ├── App.jsx            # Main React component
│   ├── index.css          # Global styles + Tailwind
│   └── main.jsx           # React entry point
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

## ✏️ Customization

### Update Launch Date
In `src/App.jsx`, find line 15 and change the date:
```javascript
const launchDate = new Date('2025-02-01T00:00:00').getTime();
```

### Update Location Details
In `src/App.jsx`, find the `locations` array (around line 42) and update:
- Branch names
- Addresses
- Phone numbers

### Update Contact Info
Search for `info@dcl.com.gh` and `support@dcl.com.gh` in `src/App.jsx` to update email addresses.

### Update Social Media Links
Find the social media icons in the footer section and replace `href="#"` with actual URLs.

## 🏗️ Build for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

## 🌐 Deployment Options

- **Vercel**: Connect your GitHub repo at [vercel.com](https://vercel.com)
- **Netlify**: Drag & drop the `dist` folder at [netlify.com](https://netlify.com)
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **Any web host**: Upload the `dist` folder contents

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Animated countdown timer
- ✅ Email signup form
- ✅ 4 location cards (East Legon, Amrahia, Korle Bu, South Legon)
- ✅ Contact information display
- ✅ Social media links
- ✅ Modern glassmorphism design
- ✅ Smooth animations

## 🛠️ Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Google Fonts (Fraunces + DM Sans)

---

© 2025 Diagnostic Centre Limited
