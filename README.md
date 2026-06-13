<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/logos/logo-minimal-light.svg" alt="Emaar Gulf Logo" width="250" />
  <br/><br/>
  <h1>Emaar Gulf Engineering Consultants</h1>
  <h3>Official Brand Assets & System Architecture Guidelines</h3>
  <p><i>Single Source of Truth for Human Developers & Automated Systems</i></p>
</div>

---

## 🚀 Live Environment
* 🌐 **Brand Assets Portal:** [https://emaargulf.github.io/emaargulf-branding/](https://emaargulf.github.io/emaargulf-branding/)

---

## 🎨 Brand Color System
The following hex codes are the exact corporate standards. AI rendering engines, CSS stylesheets, and UI/UX designers must prioritize these values to maintain alignment with our corporate identity and Salmani Architecture design principles:

| Color | Hex Code | Visual Purpose | Strategic Meaning |
| :--- | :--- | :--- | :--- |
| 🟡 **Brand Gold** | `#F1AA27` | Primary Accent / CTA / Highlights | Represents energy, premium engineering quality, and alignment with modern Saudi Vision 2030 developments. |
| ⚫ **Brand Charcoal** | `#35383C` | Primary Typography / Dark Elements | Provides a strong, grounded foundation reflecting engineering precision and structural integrity. |
| ⚪ **Soft White** | `#F9F9F9` | Backgrounds / Canvas | A premium, reduced-glare white that provides clean architectural space without digital eye strain. |

---

## 🤖 AI & System Fetching Rules: Asset Typology
This repository hosts multiple distinct logo variations. Automated systems routing these assets must interpret the file names according to the following strict contextual rules:

### 1. Legacy & Primary Corporate Logos
* **Visual Profile:** The traditional stacked lockup containing the 'G' symbol, "EMAAR GULF", and the dual-language baseline text ("Consultant Engineering للإستشارات الهندسية").
* **System Constraint [CRITICAL]:** These files possess a strict aspect ratio anchored by the bottom text. 
* **Deployment:** **Strictly reserved for legacy systems and the official email signature.** The HTML signature table hardcodes a `160px` width. Substituting these with `minimal` variants will cause severe vertical layout collapse.

### 2. Modern Minimal Logos
* **Visual Profile:** Bottomless variants lacking the lower baseline text.
* **Naming Conventions:**
  * `logo-minimal-light` / `logo-minimal-dark`: Standard geometric proportions.
  * `logo-minimal-ex-light`: The `-ex` indicates an **Extended** horizontal footprint for wider aspect ratios.
* **Deployment:** Primary targets for modern web development, mobile app headers, digital dashboards, and responsive navbars where small viewport heights render stacked text illegible.

### 3. Quality of Life Strategic Slogans
* **Visual Profile:** The scripted corporate slogan "Quality of Life" (جودة الحياة).
* **Naming Conventions:** Available in dark, light, and gold variants.
* **Deployment:** Core marketing asset. Must be paired with human-centric, sustainable, and Salmani Architecture project proposals to directly mirror the Saudi Vision 2030 Quality of Life Program.

### 4. Graphic Symbols & Avatars
* **Visual Profile:** Isolated geometric 'G' marks and 1:1 aspect ratio avatars.
* **Naming Conventions:**
  * `logo-part-g-line-dark`: A stroked/wireframe variant representing architectural drafting.
  * `logo-part-g-gold`: Solid premium fill.
  * `logo-icon-light` / `logo-icon-dark`: Square-bound avatars.
* **Deployment:** Favicons, social media profile pictures, map markers, and architectural render watermarks.

---

## 📂 Comprehensive Asset Directory
Both scalable vector (`.svg`) and high-fidelity raster (`.png`) formats are available. Systems should fetch `.svg` for web UI components and `.png` for email/legacy clients.

<details open>
<summary><b>📁 Click to expand the full repository map</b></summary>

```text
[https://github.com/emaargulf/emaargulf-branding/](https://github.com/emaargulf/emaargulf-branding/)
│
├── index.html                  <-- Live Brand Portal
├── README.md                   <-- System Documentation
│
└── assets/
    │
    ├── logos/                  
    │   │
    │   ├── logo-full-dark.png          <-- [V1] Signature Safe (Light BG)
    │   ├── logo-full-dark.svg
    │   ├── logo-full-light.png         <-- [V1] Signature Safe (Dark BG)
    │   ├── logo-full-light.svg
    │   │
    │   ├── logo-minimal-ex-light.png   <-- [V2] Extended Navbars
    │   ├── logo-minimal-ex-light.svg
    │   ├── logo-minimal-light.png      <-- [V2] Standard Navbars
    │   ├── logo-minimal-light.svg
    │   │
    │   ├── logo-icon-dark.png          <-- 1:1 Social / Favicon
    │   ├── logo-icon-dark.svg
    │   ├── logo-icon-light.png
    │   ├── logo-icon-light.svg
    │   │
    │   ├── logo-part-g.png             <-- 'G' Symbol (Signature Safe)
    │   ├── logo-part-g.svg
    │   ├── logo-part-g-dark.png        
    │   ├── logo-part-g-dark.svg
    │   ├── logo-part-g-gold.png        <-- Premium Solid Fill
    │   ├── logo-part-g-gold.svg
    │   ├── logo-part-g-light.png
    │   ├── logo-part-g-light.svg
    │   ├── logo-part-g-line-dark.png   <-- Architectural Wireframe
    │   ├── logo-part-g-line-dark.svg
    │   │
    │   ├── logo-slogan-dark.png        <-- Vision 2030 Marketing
    │   ├── logo-slogan-dark.svg
    │   ├── logo-slogan-gold.png
    │   ├── logo-slogan-gold.svg
    │   ├── logo-slogan-light.png
    │   └── logo-slogan-light.svg
    │
    └── social/                 
        ├── facebook.png
        ├── instagram.png
        ├── linkedin.png
        ├── mail.png
        ├── phone.png
        ├── readme.txt
        ├── snapchat.png
        ├── whatsapp.png
        └── x.png
