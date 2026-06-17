<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/markers/marker-base-gold.svg" height="56" alt="Emaar Gulf Markers"/>
  <br/><br/>
  <h1>markers</h1>
  <p>Brand marker elements — map pins, bullets, boxes, and pattern accents</p>
  <br/>
  <img src="https://img.shields.io/badge/Variants-12_files-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/Format-SVG_%2B_PNG-35383C?style=flat-square"/>
</div>

---

## Files

| Type | Gold | Dark | Light | Description |
|------|:----:|:----:|:-----:|-------------|
| **base** | `marker-base-gold` | `marker-base-dark` | `marker-base-light` | Core highlight segment · map markers |
| **bullet** | `marker-bullet-gold` | `marker-bullet-dark` | `marker-bullet-light` | Rotated 315° · list bullets · chevrons |
| **box** | — | `marker-box-dark` | `marker-box-light` | UI checkboxes · standard block markers |
| **pattern** | `marker-pattern-gold` | `marker-pattern-dark` | `marker-pattern-light` | Decorative bracket pattern accent |

Each file is available in both `.svg` and `.png`.

---

## Usage

### HTML — `<img>` embed

```html
<!-- Gold base marker -->
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-base-gold.svg"
  height="24" alt=""
/>

<!-- Dark bullet marker -->
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-bullet-dark.svg"
  height="24" alt=""
/>
```

### CSS — inline SVG background

```css
.list-item::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url("https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/marker-bullet-gold.svg");
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 8px;
}
```

### CDN base

```
https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/markers/
```

---

## Brand Colors

| Name | Hex |
|------|-----|
| Gold | `#F1AA27` |
| Charcoal | `#35383C` |
| Soft White | `#F9F9F9` |
