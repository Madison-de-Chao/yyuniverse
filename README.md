<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ZDMbwaf75YpjyqIh_l1rqQDsds1jiRb-

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy

For a static deployment with minimal ops overhead, deploy to a Vite-friendly static host such as **Vercel**:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Environment variables:** configure `GEMINI_API_KEY` in the platform dashboard as a build-time environment variable used only by backend/serverless code (for example, API routes). Do **not** read this value in client-side code or anywhere that ends up in the static bundle, as that will expose the API key to end users; never hardcode secrets or send them to the browser.
- **Edge delivery:** enable CDN caching for `/assets` and route all Gemini API requests through a backend or serverless function that uses `GEMINI_API_KEY` server-side; the frontend should only call this trusted endpoint and must never send the raw API key from the client.

Other compatible options include Netlify and Cloudflare Pages if your organization already uses them; use the same build and output settings above, and apply the same pattern of server-side Gemini requests.
