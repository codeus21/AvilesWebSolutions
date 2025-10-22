# Vercel Deployment Guide

## 🚀 Quick Setup Steps:

### 1. **Deploy to Vercel:**
- Go to [vercel.com](https://vercel.com)
- Sign up/login with GitHub
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect it's a Vite React app

### 2. **Add Environment Variables:**
After your project is created:
1. Go to your project dashboard
2. Click **Settings** tab
3. Click **Environment Variables** in the sidebar
4. Add these three variables:

```
Name: VITE_EMAILJS_SERVICE_ID
Value: service_on6sy2q

Name: VITE_EMAILJS_TEMPLATE_ID  
Value: template_avilesweb

Name: VITE_EMAILJS_PUBLIC_KEY
Value: UqnYxg8Q_no7i-ynh
```

### 3. **Redeploy:**
- After adding environment variables, click **"Redeploy"** on your latest deployment
- Or push a new commit to trigger automatic deployment

## ✅ **That's it!** 

Your contact form will now work in production with the EmailJS configuration properly set up.

## 🔧 **Build Settings (Auto-detected):**
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

## 📊 **Monitoring:**
- Check the **Functions** tab to see if your contact form is working
- View **Analytics** for traffic insights
- Use **Speed Insights** for performance monitoring

## 🔄 **Automatic Deployments:**
- Every push to your main branch will trigger a new deployment
- Preview deployments are created for pull requests
- You can set up custom domains in the **Domains** tab
