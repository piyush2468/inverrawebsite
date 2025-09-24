# Contact Form Setup Instructions

## Required Setup Steps

### 1. Google reCAPTCHA Setup (Required)

1. Visit https://www.google.com/recaptcha/admin/create
2. Sign in with your Google account
3. Create a new site with these settings:
   - **Label**: Inverraholding Contact Form
   - **reCAPTCHA type**: reCAPTCHA v2 → "I'm not a robot" Checkbox
   - **Domains**: Add your website domain (e.g., inverraholding.com)
   - For local testing, also add: localhost, 127.0.0.1
4. Click "Submit"
5. Copy your **Site Key**
6. In `index.html`, replace `YOUR_SITE_KEY_HERE` with your actual site key:
   ```html
   <div class="g-recaptcha" data-sitekey="YOUR_ACTUAL_SITE_KEY"></div>
   ```

### 2. Formspree Setup (Required)

1. Visit https://formspree.io
2. Sign up for a free account
3. Create a new form with email: info@inverraholding.com
4. Copy your form endpoint (e.g., https://formspree.io/f/xxxxxxxx)
5. Replace the form action in index.html:
   ```html
   <form class="contact-form" id="contact-form" action="YOUR_FORMSPREE_ENDPOINT" method="POST">
   ```

## Current Features

### Security Features
- ✅ Google reCAPTCHA v2 protection
- ✅ Client-side form validation
- ✅ Email format validation
- ✅ Required field validation
- ✅ Enhanced notification system

### Form Fields
- Name (required)
- Email (required)
- Company (optional)
- Service selection (required)
- Message (required)
- reCAPTCHA verification (required)

## Alternative Form Services

### Netlify Forms (if hosting on Netlify)
- Add `netlify` attribute to form
- Add `data-netlify-recaptcha` for reCAPTCHA
- No additional setup needed

### EmailJS
- More complex setup but more customization options
- Requires API keys and service configuration

## Testing

### Local Testing
1. Ensure localhost is added to your reCAPTCHA domains
2. Use a local server (not file:// protocol)
3. Test form submission with valid data
4. Verify reCAPTCHA validation works

### Production Testing
1. Deploy to your domain
2. Update reCAPTCHA domains if needed
3. Test end-to-end form submission
4. Check email delivery

## Troubleshooting

### reCAPTCHA Issues
- **"Invalid site key"**: Check your site key is correct
- **"This domain is not registered"**: Add domain to reCAPTCHA admin
- **Mobile display issues**: CSS scaling is applied automatically

### Form Submission Issues
- Check Formspree endpoint URL
- Verify reCAPTCHA is completed before submission
- Check browser console for errors

## Email Template

When someone submits the form, you'll receive an email with:
- **Subject**: "New Contact Form Submission - Inverraholding"
- **From**: The form service
- **Reply-To**: The sender's email
- **Content**: All form fields (name, email, company, service, message)
- **Security**: reCAPTCHA verification included
