# Aim2Grow — VIP Referral Rewards Landing Page

A responsive standalone landing page for the **VIP Referral Rewards** programme, built in the official Aim2Grow brand system (Navy `#2c2e83`, Gold `#f9b840`, Coral `#e16273`, Off-white `#fdfafd`) with Poppins and Inter typography, curated imagery featuring racially diverse women solopreneurs, an interactive referral tracker, and one-tap copy message templates.

---

## Your GitHub Repository

This landing page is version-controlled and pushed to GitHub:

`https://github.com/cydniethompson0402-prog/aim2grow-vip-referral-rewards`

---

## 4 ways to publish it as a permanent website right now

### 1. GitHub Pages (free & permanent, 3 clicks)
1. Open your repository at `github.com/cydniethompson0402-prog/aim2grow-vip-referral-rewards`
2. Go to **Settings** → scroll to **Danger Zone** → **Change visibility** → set to **Public** (required for free GitHub Pages)
3. Go to **Settings → Pages** → under *Build and deployment*, set **Source: GitHub Actions**
4. Done! Within 60 seconds, your site is permanently live at:
   `https://cydniethompson0402-prog.github.io/aim2grow-vip-referral-rewards/`
   Every future change you push will redeploy automatically.

### 2. Netlify Drop (30 seconds, no account needed, repo stays private)
1. Download and unzip the `vip-referral-landing-page.zip` package
2. Open **app.netlify.com/drop**
3. Drag the folder into the page — instant permanent HTTPS URL to share!

### 3. Vercel (1 click from GitHub)
1. Go to **vercel.com/new** and sign in with GitHub
2. Import `aim2grow-vip-referral-rewards` and click **Deploy**
3. You get a permanent `aim2grow-vip-referral-rewards.vercel.app` URL with automatic updates on every git push.

### 4. Upload to your own domain (aim2grow.biz)
1. Connect via FTP or your hosting file manager (cPanel / WordPress)
2. Upload this folder to `public_html/vip-rewards/`
3. Your page is now live at `https://aim2grow.biz/vip-rewards/`

---

## Files in this package

| File | Purpose |
|------|---------|
| `index.html` | The landing page markup with complete copy |
| `styles.css` | Brand stylesheet (colors, typography, responsive layout) |
| `app.js` | Interactive tracker + copy-to-clipboard buttons |
| `favicon.svg` | Aim2Grow brand icon |
| `images/` | Curated photos (diverse women solopreneurs) |
| `.github/workflows/deploy.yml` | Automated GitHub Pages deployment workflow |
| `manus-routes.json` | Route manifest |
| `README.md` | This guide |

---

## Customisation checklist

- **Email addresses:** the page links to `sally.sultan@aim2grow.biz` — if this changes, search and replace in `index.html`.
- **Website link:** the share messages reference `https://aim2grow.biz` — update if you want referrals sent to a different landing page or sign-up link.
- **Milestones:** to change the 5-paying / 15-free thresholds, edit the numbers in `index.html` and the corresponding values in `app.js` (`updateTracker` function).
- **Images:** replace any image inside `images/` keeping the same filenames.

---

*Created for Aim2Grow AIPositive — "No woman left behind in the AI-driven economy."*
