# EmailJS Setup Guide

This guide will help you set up EmailJS for your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for personal use)
   - **Outlook** 
   - **Yahoo**
   - Or any other provider
4. Follow the setup instructions for your chosen provider
5. **Copy the Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business: {{business}}

Message:
{{message}}

Best regards,
Your Website
```

4. **Copy the Template ID** (you'll need this)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key**
3. **Copy the Public Key** (you'll need this)

## Step 5: Update Your Code

In `src/pages/Contact.jsx`, replace these placeholder values:

```javascript
const serviceId = 'YOUR_SERVICE_ID';        // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';      // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';        // Replace with your Public Key
```

## Step 6: Test Your Form

1. Start your React development server
2. Go to your contact page
3. Fill out and submit the form
4. Check your email for the message

## Free Tier Limits

- **200 emails per month** (free tier)
- **2 email services** (free tier)
- **2 email templates** (free tier)

## Troubleshooting

1. **"Invalid service ID"** - Double-check your Service ID
2. **"Invalid template ID"** - Double-check your Template ID  
3. **"Invalid public key"** - Double-check your Public Key
4. **Emails not sending** - Check browser console for errors
5. **Template variables not working** - Make sure variable names match exactly

## Security Note

The Public Key is safe to use in frontend code - it's designed to be public. However, for production, consider using environment variables.
