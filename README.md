<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/logos/logo-part-g.png" alt="Emaar Gulf Logo" width="100" />
  <br/><br/>
  <h1>Emaar Gulf Engineering Consultants</h1>
  <h3>Brand Assets & System Guidelines</h3>
</div>

---

> This repository strictly hosts the official brand assets, logos, and standardized icons for Emaar Gulf Engineering Consultants. It serves as the single source of truth for both human developers and automated systems fetching corporate identity assets.

### 🚀 Live Portals
* 🌐 **[Brand Assets Portal](https://emaargulf.github.io/emaargulf-branding/)**

### 🎨 Official Brand Color Palette
Systems, developers, and AI agents must adhere to these precise hex values for all UI, web, and print applications to maintain brand consistency:

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| 🟡 **Brand Gold** | `#F1AA27` | Primary brand accent. Used for highlights, primary call-to-action buttons, active states, and specific graphic elements. |
| ⚫ **Brand Charcoal** | `#35383C` | Primary dark tone. Used for main typography, high-contrast structural elements, and dark-mode brand marks. |
| ⚪ **Soft White** | `#F9F9F9` | Primary background tone. Used for application backgrounds to reduce eye strain compared to pure white, providing a premium canvas for architectural assets. |

---

### 🤖 System Context: Logo Typology & Usage Rules
The `/assets/logos/` directory utilizes a flat structure containing multiple variations of brand assets. Systems and integrations utilizing these endpoints must route the correct file based on the contextual rules below:

#### 🏛️ 1. Primary Corporate Logos (`logo-full-*`)
* **Purpose:** Contains the complete, traditional corporate lockup, explicitly including the dual-language bottom text ("Consultant Engineering للإستشارات الهندسية").
* **System Usage:** **Strictly reserved for legacy systems and email signatures**. The corporate email signature HTML hardcodes a `160px` width constraint that relies on the specific bounding box and aspect ratio of these files. Do not substitute these with minimal logos in legacy environments, as it will trigger severe layout shifts.

#### 📐 2. Modern Minimal Logos (`logo-minimal-*`)
* **Purpose:** Modernized, "bottomless" variants optimized for digital scalability and cleaner UI integration.
* **System Usage:** The primary endpoint choice for new web interfaces, mobile applications, headers, and digital dashboards where the traditional stacked text becomes illegible or creates visual clutter at smaller viewport sizes.

#### 🌱 3. Quality of Life Slogans (`logo-slogan-*`)
* **Purpose:** The scripted corporate slogan translating to "Quality of Life".
* **System Usage:** To be deployed in marketing materials, strategic project proposals, and public-facing documents. This specific asset aligns the corporate identity directly with the Saudi Vision 2030 Quality of Life Program and serves as a complementary graphic when pitching human-centric Salmani Architecture designs.

#### 💠 4. Symbols & Graphic Elements (`logo-part-g-*` & `logo-icon-*`)
* **Purpose:** Isolated geometric 'G' brand marks and square avatar lockups.
* **System Usage:** Standardized for 1:1 aspect ratio requirements. Call these assets for browser favicons, social media profile pictures, mobile app icons, or as architectural render watermarks.

---

### 📂 Comprehensive Asset Directory
Below is the complete file map for routing and API calls. Both `.png` (raster) and `.svg` (vector) formats are available for all logo assets.

<details open>
<summary><b>📁 Click to collapse/expand the full directory tree</b></summary>

```text
[https://github.com/emaargulf/emaargulf-branding/](https://github.com/emaargulf/emaargulf-branding/)
│
├── index.html                  <-- Live Brand Portal
├── README.md                   <-- Repository Documentation
│
└── assets/
    │
    ├── logos/                  
    │   │
    │   ├── logo-full-dark.png          <-- Primary / Signature Safe
    │   ├── logo-full-dark.svg
    │   ├── logo-full-light.png         <-- Primary
    │   ├── logo-full-light.svg
    │   │
    │   ├── logo-minimal-ex-light.png   <-- Minimal Extended
    │   ├── logo-minimal-ex-light.svg
    │   ├── logo-minimal-light.png      <-- Minimal Standard
    │   ├── logo-minimal-light.svg
    │   │
    │   ├── logo-icon-dark.png          <-- Square Avatars
    │   ├── logo-icon-dark.svg
    │   ├── logo-icon-light.png
    │   ├── logo-icon-light.svg
    │   │
    │   ├── logo-part-g.png             <-- 'G' Symbols / Signature Safe
    │   ├── logo-part-g.svg
    │   ├── logo-part-g-dark.png        
    │   ├── logo-part-g-dark.svg
    │   ├── logo-part-g-gold.png
    │   ├── logo-part-g-gold.svg
    │   ├── logo-part-g-light.png
    │   ├── logo-part-g-light.svg
    │   ├── logo-part-g-line-dark.png
    │   ├── logo-part-g-line-dark.svg
    │   │
    │   ├── logo-slogan-dark.png        <-- Quality of Life Scripts
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
