<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/animations/glyph-g/glyph-g-animated-gold.svg" height="72" alt="Emaar Gulf Glyph"/>
  <br/><br/>
  <h1>glyph-g</h1>
  <p>Emaar Gulf brand mark — angular G glyph with draw-on stroke animation</p>
  <br/>
  <img src="https://img.shields.io/badge/SVG-Animated-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/React-JSX-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/CSS-Animation-35383C?style=flat-square"/>
</div>

---

## Files

| File | Format | Description |
|------|--------|-------------|
| `glyph-g.svg` | SVG | Static glyph · inherits `currentColor` |
| `glyph-g-animated.svg` | SVG | Draw-on animation · `currentColor` · standalone |
| `glyph-g-animated-gold.svg` | SVG | Draw-on animation · `#F1AA27` · standalone |
| `glyph-g.jsx` | React | Static component · configurable color + size |
| `glyph-g-animated.jsx` | React | Animated component · configurable · `useId`-safe |
| `glyph-g-animation.css` | CSS | `.glyph-draw` class for plain HTML SVGs |

---

## Geometry

```
viewBox      0 0 17.01 22.68
stroke-width 0.75
pathLength   100
```

Path: `M0 5.67 L11.34 5.67 L11.34 22.68 L17.01 18.43 L17.01 0 L0 0 L0 5.67`

---

## Usage

### HTML — static embed

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/glyph-g/glyph-g.svg"
  height="48" alt="Emaar Gulf"
/>
```

### HTML — animated gold (self-contained)

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/glyph-g/glyph-g-animated-gold.svg"
  height="48" alt="Emaar Gulf"
/>
```

### React — static

```jsx
import GlyphG from './glyph-g.jsx';

<GlyphG size={80} color="#F1AA27" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `100` | Width in px — height scales to aspect ratio |
| `color` | `string` | `"currentColor"` | Stroke color |
| `className` | `string` | `""` | Extra CSS classes |

### React — animated

```jsx
import GlyphGAnimated from './glyph-g-animated.jsx';

<GlyphGAnimated size={80} color="#F1AA27" duration="1.5s" delay="0.3s" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `100` | Width in px |
| `color` | `string` | `"currentColor"` | Stroke color |
| `duration` | `string` | `"2s"` | Animation duration |
| `easing` | `string` | `"ease"` | CSS easing function |
| `delay` | `string` | `"0s"` | Start delay |

### CSS class — plain HTML

```html
<link rel="stylesheet" href="glyph-g-animation.css"/>

<svg viewBox="0 0 17.01 22.68" width="80">
  <path class="glyph-draw"
    d="M0 5.67 L11.34 5.67 L11.34 22.68 L17.01 18.43 L17.01 0 L0 0 L0 5.67"
    fill="none" stroke="#F1AA27" stroke-width="0.75" pathLength="100"/>
</svg>
```

---

## Brand Colors

| Name | Hex |
|------|-----|
| Gold | `#F1AA27` |
| Charcoal | `#35383C` |
| Soft White | `#F9F9F9` |
