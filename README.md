<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/logos/logo-part-g.png" alt="Emaar Gulf Logo" width="100" />
  <br/><br/>
  <h1>Emaar Gulf Engineering Consultants</h1>
  <h3>Brand Assets & System Guidelines</h3>
</div>

---

> This repository strictly hosts the official brand assets, logos, and standardized icons for Emaar Gulf Engineering Consultants[cite: 7]. It serves as the single source of truth for both human developers and automated systems fetching corporate identity assets[cite: 7].

### 🚀 Live Portals
* 🌐 **[Brand Assets Portal](https://emaargulf.github.io/emaargulf-branding/)**[cite: 7]

### 🎨 Official Brand Color Palette
Systems, developers, and AI agents must adhere to these precise hex values for all UI, web, and print applications to maintain brand consistency[cite: 7]:

| Color | Hex Code | Usage |
| :--- | :--- | :--- |
| 🟡 **Brand Gold** | `#F1AA27` | Primary brand accent[cite: 7]. Used for highlights, primary call-to-action buttons, active states, and specific graphic elements[cite: 7]. |
| ⚫ **Brand Charcoal** | `#35383C` | Primary dark tone[cite: 7]. Used for main typography, high-contrast structural elements, and dark-mode brand marks[cite: 7]. |
| ⚪ **Soft White** | `#F9F9F9` | Primary background tone[cite: 7]. Used for application backgrounds to reduce eye strain compared to pure white, providing a premium canvas for architectural assets[cite: 7]. |

---

### 🤖 System Context: Logo Typology & Usage Rules
The `/assets/logos/` directory utilizes a flat structure containing multiple variations of brand assets[cite: 7]. Systems and integrations utilizing these endpoints must route the correct file based on the contextual rules below[cite: 7]:

#### 🏛️ 1. Primary Corporate Logos (`logo-full-*`)
* **Purpose:** Contains the complete, traditional corporate lockup, explicitly including the dual-language bottom text ("Consultant Engineering للإستشارات الهندسية")[cite: 7].
* **System Usage:** **Strictly reserved for legacy systems and email signatures**[cite: 7]. The corporate email signature HTML hardcodes a `160px` width constraint that relies on the specific bounding box and aspect ratio of these files[cite: 7]. Do not substitute these with minimal logos in legacy environments, as it will trigger severe layout shifts[cite: 7].

#### 📐 2. Modern Minimal Logos (`logo-minimal-*`)
* **Purpose:** Modernized, "bottomless" variants optimized for digital scalability and cleaner UI integration[cite: 7].
* **System Usage:** The primary endpoint choice for new web interfaces, mobile applications, headers, and digital dashboards where the traditional stacked text becomes illegible or creates visual clutter at smaller viewport sizes[cite: 7].

#### 🌱 3. Quality of Life Slogans (`logo-slogan-*`)
* **Purpose:** The scripted corporate slogan translating to "Quality of Life"[cite: 7].
* **System Usage:** To be deployed in marketing materials, strategic project proposals, and public-facing documents[cite: 7]. This specific asset aligns the corporate identity directly with the Saudi Vision 2030 Quality of Life Program and serves as a complementary graphic when pitching human-centric Salmani Architecture designs[cite: 7].

#### 💠 4. Symbols & Graphic Elements (`logo-part-g-*` & `logo-icon-*`)
* **Purpose:** Isolated geometric 'G' brand marks and square avatar lockups[cite: 7].
* **System Usage:** Standardized for 1:1 aspect ratio requirements[cite: 7]. Call these assets for browser favicons, social media profile pictures, mobile app icons, or as architectural render watermarks[cite: 7].

---

### 📂 Comprehensive Asset Directory
Below is the complete file map for routing and API calls[cite: 7]. Both `.png` (raster) and `.svg` (vector) formats are available for all logo assets[cite: 7].

<details open>
<summary><b>📁 Click to collapse/expand the full directory tree</b></summary>

```text
[https://github.com/emaargulf/emaargulf-branding/](https://github.com/emaargulf/emaargulf-branding/)[cite: 7]
│
├── index.html                  <-- Live Brand Portal[cite: 7]
├── README.md                   <-- Repository Documentation[cite: 7]
│
└── assets/[cite: 7]
    │
    ├── logos/[cite: 7]                 
    │   │
    │   ├── logo-full-dark.png          <-- Primary / Signature Safe[cite: 7]
    │   ├── logo-full-dark.svg[cite: 7]
    │   ├── logo-full-light.png         <-- Primary[cite: 7]
    │   ├── logo-full-light.svg[cite: 7]
    │   │
    │   ├── logo-minimal-ex-light.png   <-- Minimal Extended[cite: 7]
    │   ├── logo-minimal-ex-light.svg[cite: 7]
    │   ├── logo-minimal-light.png      <-- Minimal Standard[cite: 7]
    │   ├── logo-minimal-light.svg[cite: 7]
    │   │
    │   ├── logo-icon-dark.png          <-- Square Avatars[cite: 7]
    │   ├── logo-icon-dark.svg[cite: 7]
    │   ├── logo-icon-light.png[cite: 7]
    │   ├── logo-icon-light.svg[cite: 7]
    │   │
    │   ├── logo-part-g.png             <-- 'G' Symbols / Signature Safe[cite: 7]
    │   ├── logo-part-g.svg[cite: 7]
    │   ├── logo-part-g-dark.png[cite: 7]        
    │   ├── logo-part-g-dark.svg[cite: 7]
    │   ├── logo-part-g-gold.png[cite: 7]
    │   ├── logo-part-g-gold.svg[cite: 7]
    │   ├── logo-part-g-light.png[cite: 7]
    │   ├── logo-part-g-light.svg[cite: 7]
    │   ├── logo-part-g-line-dark.png[cite: 7]
    │   ├── logo-part-g-line-dark.svg[cite: 7]
    │   │
    │   ├── logo-slogan-dark.png        <-- Quality of Life Scripts[cite: 7]
    │   ├── logo-slogan-dark.svg[cite: 7]
    │   ├── logo-slogan-gold.png[cite: 7]
    │   ├── logo-slogan-gold.svg[cite: 7]
    │   ├── logo-slogan-light.png[cite: 7]
    │   └── logo-slogan-light.svg[cite: 7]
    │
    └── social/[cite: 7]                 
        ├── facebook.png[cite: 7]
        ├── instagram.png[cite: 7]
        ├── linkedin.png[cite: 7]
        ├── mail.png[cite: 7]
        ├── phone.png[cite: 7]
        ├── readme.txt[cite: 7]
        ├── snapchat.png[cite: 7]
        ├── whatsapp.png[cite: 7]
        └── x.png[cite: 7]

Maintained by: nawavazhi
Contact: nawavazhi@gmail.com
