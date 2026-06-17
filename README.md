<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/logos/logo-main-dark.svg" height="64" alt="Emaar Gulf Engineering Consultants"/>
  <br/><br/>
  <p><strong>Official Brand Assets & Design System</strong><br/>
  إعمار الخليج للاستشارات الهندسية — Single Source of Truth</p>
  <br/>
  <a href="https://emaargulf.github.io/emaargulf-branding/"><img src="https://img.shields.io/badge/Brand_Portal-Live-F1AA27?style=flat-square&labelColor=35383C"/></a>
  <img src="https://img.shields.io/badge/Logos-20_files-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/Markers-12_files-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/Animations-7_files-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/Patterns-9_files-35383C?style=flat-square"/>
</div>

---

## ◈ Brand Colors

| Swatch | Name | Hex | Usage |
|:------:|------|-----|-------|
| ![#F1AA27](https://placehold.co/20x20/F1AA27/F1AA27.png) | **Brand Gold** | `#F1AA27` | Primary accent · CTA · highlights |
| ![#35383C](https://placehold.co/20x20/35383C/35383C.png) | **Brand Charcoal** | `#35383C` | Primary typography · dark elements |
| ![#F9F9F9](https://placehold.co/20x20/F9F9F9/F9F9F9.png) | **Soft White** | `#F9F9F9` | Backgrounds · canvas |

---

## ◈ Asset Directory

### Logos `assets/logos/` — 20 variants · SVG + PNG

| Variant | Dark | Light | Usage |
|---------|------|-------|-------|
| **Main** | `logo-main-dark` | `logo-main-light` | Standard UI · general web |
| **Full** | `logo-full-dark` | `logo-full-light` | Legacy systems · email signature |
| **Extended** | `logo-extended-dark` | `logo-extended-light` | Legal documents · wide headers |
| **Minimal** | `logo-minimal-dark` | `logo-minimal-light` | Navbars · mobile · dashboards |
| **Minimal Extended** | `logo-minimal-ex-dark` | `logo-minimal-ex-light` | Horizontal compact layouts |
| **Slogan** | `logo-slogan-dark` · `logo-slogan-gold` | `logo-slogan-light` | Marketing · proposals |
| **Icon Avatar** | `logo-icon-dark` | `logo-icon-light` | Favicons · social profiles |
| **G Symbol** | `logo-part-g` · `logo-part-g-dark` · `logo-part-g-line-dark` | `logo-part-g-light` · `logo-part-g-gold` | Watermarks · brand elements |

```
CDN: https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/logos/logo-main-dark.svg
```

---

### Markers `assets/markers/` — 12 variants · SVG + PNG

| Type | Gold | Dark | Light | Usage |
|------|:----:|:----:|:-----:|-------|
| **Base** | ✓ | ✓ | ✓ | Map pins · highlight segments |
| **Bullet** | ✓ | ✓ | ✓ | Lists · chevrons · directions |
| **Box** | — | ✓ | ✓ | UI checkboxes · standard markers |
| **Pattern** | ✓ | ✓ | ✓ | Decorative brand-pattern element |

→ See [`assets/markers/README.md`](assets/markers/README.md) for full usage docs.

```
CDN: https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-base-gold.svg
```

---

### Animations `assets/animations/` — React + CSS + SVG

| Asset | Files | Description |
|-------|-------|-------------|
| **glyph-g** | `.svg` · `-animated.svg` · `-gold.svg` · `.jsx` · `-animated.jsx` · `.css` | Angular G brand mark with draw-on stroke animation |
| **glyph-pattern-g** | *(in development)* | Animated bracket pattern glyph |

→ See [`assets/animations/glyph-g/README.md`](assets/animations/glyph-g/README.md) for usage docs.

```
CDN: https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/glyph-g/glyph-g-animated-gold.svg
```

---

### Patterns `assets/patterns/` — CSS + JSX + SVG

| Asset | Files | Description |
|-------|-------|-------------|
| **pattern-g** | `.svg` · `-tile.svg` · `-seamless.svg` · `.css` · `-seamless.css` · `.jsx` · `-seamless.jsx` · `-sample.svg` | Diagonal bracket checkerboard — CSS and React |

→ See [`assets/patterns/pattern-g/README.md`](assets/patterns/pattern-g/README.md) for usage docs.

```
CDN: https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/patterns/pattern-g/pattern-g-tile.svg
```

---

### Social `assets/social/` — 8 icons · PNG

Facebook · Instagram · LinkedIn · X · WhatsApp · Snapchat · Mail · Phone

---

## ◈ System Fetching Rules

Automated systems and AI agents consuming this repository must follow these rules when selecting a logo variant.

### 1 · Extended Legal — `logo-extended-*`
Wide headers · official legal documents · corporate letterheads · formal contracts. Features the full dual-language legal entity name.

### 2 · Primary Full — `logo-full-*`
**[LEGACY — SIGNATURE SAFE]** 3-line stacked lockup with dual-language baseline. Hardcoded to `160px` width in the official email signature. Do not use elsewhere.

### 3 · Main — `logo-main-*`
Primary representation for general UI. 2-line text stack; baseline text removed for legibility at smaller sizes.

### 4 · Minimal — `logo-minimal-*`
Modern web development · mobile navbars · tight dashboards. The `-ex-` variants carry an extended horizontal footprint.

### 5 · Slogans — `logo-slogan-*`
Scripted "Quality of Life" / جودة الحياة. Core marketing asset aligned with Vision 2030.

### 6 · Symbols — `logo-icon-*`, `logo-part-g-*`
1:1 square avatars for favicons and social profiles. Isolated G marks for map markers, renders, and watermarks.

---

## ◈ Quick CDN Reference

All assets are served via [jsDelivr](https://www.jsdelivr.com/). Base URL:

```
https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/
```

| Asset | Path |
|-------|------|
| Main logo (dark) | `assets/logos/logo-main-dark.svg` |
| Icon avatar | `assets/logos/logo-icon-dark.svg` |
| Gold marker | `assets/markers/marker-base-gold.svg` |
| Glyph animated | `assets/animations/glyph-g/glyph-g-animated-gold.svg` |
| Pattern tile | `assets/patterns/pattern-g/pattern-g-tile.svg` |

---

<div align="center">
  <sub>
    Maintained by <a href="mailto:nawavazhi@gmail.com">nawavazhi@gmail.com</a> ·
    Engineered by <a href="mailto:archengsafdar@gmail.com">archengsafdar@gmail.com</a>
  </sub>
</div>
