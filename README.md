# Aim2Grow — VIP Referral Rewards Landing Page

A responsive standalone landing page for the **VIP Referral Rewards** programme, built in the official Aim2Grow brand system (Navy `#2c2e83`, Gold `#f9b840`, Coral `#e16273`, Off-white `#fdfafd`) with Poppins and Inter typography, curated imagery featuring racially diverse women solopreneurs, an interactive referral tracker, and one-tap copy message templates.

---

## Files in this package

| File | Purpose |
|------|---------|
| `index.html` | The landing page markup with complete copy |
| `styles.css` | Brand stylesheet (colors, typography, responsive layout) |
| `app.js` | Interactive tracker + copy-to-clipboard buttons |
| `favicon.svg` | Aim2Grow brand icon |
| `images/` | Curated photos (diverse women solopreneurs) |
| `manus-routes.json` | Route manifest |
| `README.md` | This guide |

---

## How to use / publish

### Option 1 — Netlify Drop (free, fastest, 60 seconds)
1. Go to **app.netlify.com/drop**
2. Drag and drop the `vip-referral-landing-page` folder
3. Your page is live instantly on a secure HTTPS URL!

### Option 2 — Upload to your existing website (WordPress / cPanel / FTP)
1. Connect via your hosting file manager or FTP
2. Upload the entire folder (e.g. to `public_html/vip-rewards/` or `yourdomain.com/vip-rewards/`)
3. The page is now live at `https://yourdomain.com/vip-rewards/`

### Option 3 — Cloudflare Pages or GitHub Pages (free)
1. Push this folder to a GitHub repository
2. Connect the repo to Cloudflare Pages or enable GitHub Pages in repo settings
3. Build command: leave blank (static) — output: `/`

---

## Customisation checklist

- **Email addresses:** the page links to `sally.sultan@aim2grow.biz` — if this changes, search and replace in `index.html`.
- **Website link:** the share messages reference `https://aim2grow.biz` — update if you want referrals sent to a different landing page or sign-up link.
- **Milestones:** to change the 5-paying / 15-free thresholds, edit the numbers in `index.html` and the corresponding values in `app.js` (`updateTracker` function).
- **Images:** replace any image inside `images/` keeping the same filenames.

---

## Live preview in this session

The page is being served locally on port **8000** and can be viewed at:

`https://8000-i2mhlpixghm1kjqsp6gpf-b8a88925.us5.manus.computer`

---

*Created for Aim2Grow AIPositive — "No woman left behind in the AI-driven economy."*
