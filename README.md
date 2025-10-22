# Aviles Web Solutions - Company Website

A modern, responsive website for Aviles Web Solutions, a web development company specializing in professional websites for small businesses.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Contact Form** - Integrated with EmailJS for reliable email delivery
- **Service Pages** - Detailed information about web development services
- **Portfolio Showcase** - Examples of completed projects
- **SEO Optimized** - Built for search engine visibility

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions
- **EmailJS** - Contact form email delivery
- **CSS3** - Custom styling with modern features

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── LogoSlider.jsx  # Client logo carousel
├── pages/              # Main page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services overview
│   ├── WebDevelopment.jsx
│   ├── UIDesign.jsx
│   ├── SEOOptimization.jsx
│   ├── LeadGeneration.jsx
│   ├── OurWork.jsx     # Portfolio showcase
│   └── Contact.jsx     # Contact form
├── assets/             # Images and media
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Company-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file with your EmailJS credentials
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📧 Contact Form Setup

The contact form uses EmailJS for reliable email delivery. To set it up:

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month)

2. **Configure Email Service**
   - Add your email provider (Gmail, Outlook, etc.)
   - Copy the Service ID

3. **Create Email Template**
   - Use the provided HTML template in `EMAILJS_SETUP.md`
   - Copy the Template ID

4. **Get Public Key**
   - Found in Account > General
   - Copy the Public Key

5. **Update Environment Variables**
   - Add all three IDs to your `.env` file

## 🎨 Customization

### Colors
The website uses a professional blue color scheme:
- Primary: `#00193f` (Dark Blue)
- Secondary: `#00245a` (Medium Blue)
- Accent: `#3b82f6` (Light Blue)

### Fonts
- Primary: System fonts (Arial, Helvetica, sans-serif)
- Headings: Bold, modern typography

### Animations
- Framer Motion for smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in hosting platform

## 📞 Contact Information

- **Email**: davidfrontweb@gmail.com
- **Phone**: (470) 526-3353
- **Website**: [Aviles Web Solutions](https://avileswebsolutions.com)

## 📄 License

This project is proprietary software for Aviles Web Solutions.

## 🤝 Contributing

This is a private project. For any changes or improvements, please contact the development team.

---

Built with ❤️ by Aviles Web Solutions
