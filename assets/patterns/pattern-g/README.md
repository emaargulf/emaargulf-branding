<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/patterns/pattern-g/pattern-g.svg" height="80" alt="pattern-g"/>
  <br/><br/>
  <h1>pattern-g</h1>
  <p>Seamless diagonal bracket pattern — derived from the brand glyph geometry</p>
  <br/>
  <img src="https://img.shields.io/badge/SVG-Seamless_Tile-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/React-JSX-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/CSS-Background-35383C?style=flat-square"/>
</div>

---

## Files

| File | Description |
|------|-------------|
| `pattern-g.svg` | Dense 48.19 × 48.19 tile · 4 bracket corners |
| `pattern-g-tile.svg` | Seamless 68.03 × 68.03 tile · for CSS `background-image` |
| `pattern-g-seamless.svg` | Standalone preview · dark background |
| `pattern-g-sample.svg` | Reference showing the diagonal arrangement |
| `pattern-g.css` | `.pattern-g` class · dense 48 px grid |
| `pattern-g-seamless.css` | `.pattern-g-seamless` class · diagonal 68 px tile |
| `pattern-g.jsx` | React component · CSS background approach |
| `pattern-g-seamless.jsx` | React component · inline SVG pattern · no external files |

---

## Geometry

| Property | Value |
|----------|-------|
| Motif size | 48.19 × 48.19 px |
| Tile repeat (dense) | 48.19 px |
| Tile repeat (seamless) | 68.03 px |
| Diagonal step | 34.015 px |

---

## Usage

### CSS — local

```css
/* dense grid */
background-image: url("pattern-g.svg");
background-repeat: repeat;
background-size: 48.19px 48.19px;

/* diagonal checkerboard (recommended) */
background-image: url("pattern-g-tile.svg");
background-repeat: repeat;
background-size: 68.03px 68.03px;
background-color: #35383C;
```

### CSS — CDN

```css
background-image: url("https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/patterns/pattern-g/pattern-g-tile.svg");
background-repeat: repeat;
background-size: 68.03px 68.03px;
background-color: #35383C;
```

### React — inline SVG (recommended — no external files)

```jsx
import PatternGSeamless from './pattern-g-seamless.jsx';

<PatternGSeamless width="100%" height="400px" color="#F1AA27" background="#35383C" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string\|number` | `"100%"` | SVG width |
| `height` | `string\|number` | `"100%"` | SVG height |
| `color` | `string` | `"#F1AA27"` | Bracket fill color |
| `background` | `string` | `"transparent"` | Background fill |
| `className` | `string` | `""` | Extra CSS classes |

### HTML — standalone embed

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/patterns/pattern-g/pattern-g-seamless.svg"
  width="400" alt="" aria-hidden="true"
/>
```

---

## Brand Colors

| Name | Hex |
|------|-----|
| Gold | `#F1AA27` |
| Charcoal | `#35383C` |
| Soft White | `#F9F9F9` |
