# OMV Construction Services - Modern Single Page Application

A professional, modern single-page application for OMV Construction Services built with Next.js 15, TypeScript, and Tailwind CSS.

## 🏗️ Features

### **Modern Design & UX**
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations and transitions
- **Color Scheme**: White primary with pale yellow and green accents as requested
- **Smooth Scrolling**: Seamless navigation between sections

### **Core Sections**
1. **Hero Section**: Compelling landing area with call-to-action buttons
2. **Services**: Comprehensive construction services showcase
3. **About Us**: Company story, values, and team information
4. **Projects**: Portfolio with filtering capabilities
5. **Testimonials**: Client feedback carousel with auto-rotation
6. **Contact**: Interactive contact form and company information
7. **Footer**: Comprehensive footer with links and newsletter signup

### **Technical Features**
- **Component-Based Architecture**: Modular, reusable components
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework with custom animations
- **Responsive Navigation**: Mobile-friendly navigation with hamburger menu
- **Form Handling**: Interactive contact form with validation
- **Smooth Animations**: Custom CSS animations and hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd omv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
omv/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and animations
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   └── components/
│       ├── layout/              # Layout components
│       │   ├── Header.tsx       # Navigation header
│       │   └── Footer.tsx       # Footer component
│       └── sections/            # Page sections
│           ├── Hero.tsx         # Hero/landing section
│           ├── Services.tsx     # Services showcase
│           ├── About.tsx        # About company section
│           ├── Projects.tsx     # Portfolio section
│           ├── Testimonials.tsx # Client testimonials
│           └── Contact.tsx      # Contact form section
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## 🎨 Design System

### **Color Palette**
- **Primary**: White (#ffffff)
- **Secondary**: Pale Yellow (#fef3c7, #fde68a)
- **Accent**: Green (#10b981, #059669)
- **Text**: Dark Gray (#1f2937)
- **Muted**: Light Gray (#f9fafb)

### **Typography**
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: Geist Mono
- **Responsive Sizing**: Clamp-based responsive typography

### **Components**
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Clean input fields with focus states
- **Navigation**: Sticky header with smooth scrolling

## 🔧 Customization

### **Adding New Sections**
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Ensure proper section IDs for navigation

### **Modifying Colors**
Update CSS variables in `src/app/globals.css`:
```css
:root {
  --primary: #your-color;
  --accent: #your-accent-color;
}
```

### **Adding Animations**
Custom animations are defined in `src/app/globals.css`:
```css
@keyframes your-animation {
  /* Define your animation */
}

.your-animation-class {
  animation: your-animation 2s ease-in-out;
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile-First Approach**
- Touch-friendly navigation
- Optimized layouts for small screens
- Responsive typography and spacing

## 🚀 Performance Features

- **Next.js 15**: Latest version with optimizations
- **Turbopack**: Fast development builds
- **Image Optimization**: Built-in image optimization
- **Code Splitting**: Automatic code splitting
- **Static Generation**: Pre-rendered static content

## 🔒 Security Features

- **TypeScript**: Type safety and error prevention
- **ESLint**: Code quality and security checks
- **Input Validation**: Form input sanitization
- **XSS Prevention**: Safe HTML rendering

## 🌐 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **Progressive Enhancement**: Graceful degradation for older browsers

## 📝 Content Management

### **Updating Company Information**
- Company details in `src/components/sections/About.tsx`
- Services in `src/components/sections/Services.tsx`
- Projects in `src/components/sections/Projects.tsx`
- Contact information in `src/components/sections/Contact.tsx`

### **Adding New Services**
Update the services array in `src/components/sections/Services.tsx`:
```typescript
const services = [
  {
    id: 7,
    title: 'Your New Service',
    description: 'Service description...',
    icon: <YourIcon />,
    features: ['Feature 1', 'Feature 2']
  }
];
```

## 🧪 Testing

The application includes:
- **TypeScript Compilation**: Ensures type safety
- **ESLint**: Code quality checks
- **Build Validation**: Production build testing

## 📦 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with zero configuration

### **Other Platforms**
- **Netlify**: Compatible with Next.js
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Updates & Maintenance

### **Regular Updates**
- Keep dependencies updated
- Monitor for security vulnerabilities
- Update content regularly
- Test across different devices

### **Performance Monitoring**
- Monitor Core Web Vitals
- Check loading times
- Optimize images and assets
- Monitor user experience metrics

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Last updated: August 2024*
