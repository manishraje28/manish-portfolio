# Contact Form Setup Instructions

## Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. **Go to:** https://web3forms.com/
2. **Enter your email:** manishbraje@gmail.com
3. **Click "Create Access Key"**
4. **Check your email** for the access key (it will look like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

### Step 2: Add Access Key to Your Project

1. **Open the file:** `.env.local` (in the root of your project)
2. **Replace** `your_access_key_here` with your actual access key:
   ```
   REACT_APP_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
   ```
3. **Save the file**

### Step 3: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart it:
npm start
```

### Step 4: Test the Form

1. Go to your portfolio contact section
2. Fill out and submit the form
3. Check **manishbraje@gmail.com** for the email

## ✅ That's it! Your contact form will now send real emails.

---

## Important Notes

- ✅ The `.env.local` file is already in `.gitignore` (won't be committed to GitHub)
- ✅ Free tier: 250 submissions per month
- ✅ No backend or server required
- ✅ Instant email delivery
- ✅ Works on deployed sites too (add the env variable to your hosting platform)

## For Deployment (Netlify/Vercel)

When deploying, add the environment variable in your hosting platform:
- **Variable name:** `REACT_APP_WEB3FORMS_ACCESS_KEY`
- **Value:** Your access key from Web3Forms

### Netlify:
Site Settings → Build & Deploy → Environment → Add Variable

### Vercel:
Project Settings → Environment Variables → Add Variable

---

## Troubleshooting

**Getting 400 error?**
- Make sure you've added the access key to `.env.local`
- Make sure you've restarted the dev server
- Make sure the access key is valid (check your email from Web3Forms)
