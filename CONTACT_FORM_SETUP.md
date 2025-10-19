# Contact Form Setup Instructions

## Step 1: Get Your Web3Forms Access Key

1. Go to https://web3forms.com/
2. Click "Get Started for Free"
3. Enter your email: **manishbraje@gmail.com**
4. You'll receive an access key in your email
5. Copy the access key

## Step 2: Update the ContactSection.jsx

1. Open `src/pages/homepage/components/ContactSection.jsx`
2. Find line with: `access_key: 'YOUR_WEB3FORMS_ACCESS_KEY'`
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms

Example:
```javascript
access_key: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890'
```

## Step 3: Test the Form

1. Fill out the contact form on your portfolio
2. Submit it
3. Check your email at manishbraje@gmail.com
4. You should receive the message within seconds

## Alternative: Using EmailJS (Optional)

If you prefer EmailJS instead:
1. Sign up at https://www.emailjs.com/
2. Create an email service
3. Create an email template
4. Install: `npm install @emailjs/browser`
5. Follow their integration guide

## Alternative: Using Formspree (Optional)

If you prefer Formspree:
1. Sign up at https://formspree.io/
2. Create a new form
3. Get your form endpoint
4. Update the fetch URL to your Formspree endpoint

## Current Setup

The contact form is configured to:
- ✉️ Send emails to: **manishbraje@gmail.com**
- 🔒 Use Web3Forms API (free, no backend needed)
- ✅ Show success/error messages
- 📧 Include sender's name, email, and message

## Notes

- Web3Forms is free for up to 250 submissions per month
- No credit card required
- No backend server needed
- Works perfectly with static sites
- GDPR compliant
