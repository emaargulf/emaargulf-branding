<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/markers/marker-base-gold.svg" height="56" alt="Emaar Gulf Markers"/>
  <br/><br/>
  <h1>markers</h1>
  <p>Brand UI markers — map pins, list bullets, boxes, and pattern accents</p>
  <br/>
  <img src="https://img.shields.io/badge/Types-4-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/Colors-Gold_%7C_Dark_%7C_Light-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/Format-SVG_%2B_PNG-35383C?style=flat-square"/>
</div>

---

## Variants

| Type | Gold | Dark | Light | Usage |
|------|:----:|:----:|:-----:|-------|
| **base** | ✓ | ✓ | ✓ | Map pins · highlight segments · section dividers |
| **bullet** | ✓ | ✓ | ✓ | List bullets · chevrons · directional indicators |
| **box** | — | ✓ | ✓ | Checkboxes · standard UI block markers |
| **pattern** | ✓ | ✓ | ✓ | Decorative bracket pattern accent |

Each variant is available as `.svg` and `.png`.  
`marker-box` has no gold variant. All others have gold, dark, and light.

---

## File List

```
marker-base-gold.svg/png
marker-base-dark.svg/png
marker-base-light.svg/png
marker-bullet-gold.svg/png
marker-bullet-dark.svg/png
marker-bullet-light.svg/png
marker-box-dark.svg/png
marker-box-light.svg/png
marker-pattern-gold.svg/png
marker-pattern-dark.svg/png
marker-pattern-light.svg/png
```

---

## Usage

```html
<!-- Gold base marker -->
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-base-gold.svg"
  height="24" alt=""
/>
```

```css
/* Bullet list via CSS */
.list-item::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url("https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-bullet-gold.svg") center/contain no-repeat;
  margin-right: 8px;
  vertical-align: middle;
}
```

---

## CDN base

```
https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/
```
