# pattern-g

Seamless decorative background pattern built from the brand glyph's angular bracket
motifs, arranged on a diagonal checkerboard grid.

---

## Files

| File | Description |
|------|-------------|
| `pattern-g.svg` | Dense 48.19 × 48.19 tile (4 bracket corners, for CSS dense grid) |
| `pattern-g-tile.svg` | Seamless 68.03 × 68.03 tile for CSS `background-image` |
| `pattern-g-seamless.svg` | Standalone preview SVG (dark navy background) |
| `pattern-g-sample.svg` | Reference layout showing the diagonal arrangement |
| `pattern-g.css` | CSS class — dense grid variant (48.19 px tile) |
| `pattern-g-seamless.css` | CSS class — diagonal checkerboard variant (68.03 px tile) |
| `pattern-g.jsx` | React component — dense grid (CSS `background-image`) |
| `pattern-g-seamless.jsx` | React component — diagonal checkerboard (inline SVG pattern) |

---

## Pattern geometry

| Property | Value |
|----------|-------|
| Motif bounding box | 48.19 × 48.19 px |
| CSS dense tile size | 48.19 px |
| CSS seamless tile size | 68.03 px |
| Diagonal motif step | 34.015 px (half tile) |
| Gold color | `#F1AA27` |
| Dark navy | `#1C1C2E` |

The seamless tile contains two motif instances offset diagonally by `(34.015, 34.015)`,
plus four edge-wrap path fragments that close the seams at tile boundaries.

---

## Usage

### CSS — diagonal checkerboard (recommended)

```css
@import url("pattern-g-seamless.css");

.hero {
    @apply pattern-g-seamless pattern-g-dark;
    height: 400px;
}
```

Or directly:

```css
.hero {
    background-image: url("pattern-g-tile.svg");
    background-repeat: repeat;
    background-size: 68.03px 68.03px;
    background-color: #1C1C2E;
}
```

### CSS — CDN

```css
.hero {
    background-image: url("https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animation/pattern-g/pattern-g-tile.svg");
    background-repeat: repeat;
    background-size: 68.03px 68.03px;
    background-color: #1C1C2E;
}
```

### React — inline SVG (no external files, recommended)

```jsx
import PatternGSeamless from "./pattern-g-seamless.jsx";

// Full-width hero section
<PatternGSeamless
  width="100%"
  height="400px"
  color="#F1AA27"
  background="#1C1C2E"
/>

// Custom color
<PatternGSeamless color="#ffffff" background="#0a0a0a" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string \| number | `"100%"` | SVG element width |
| `height` | string \| number | `"100%"` | SVG element height |
| `color` | string | `"#F1AA27"` | Bracket fill color |
| `background` | string | `"transparent"` | Background fill |
| `className` | string | `""` | Extra CSS classes |

### React — CSS background approach

```jsx
import PatternG from "./pattern-g.jsx";

<PatternG width="100%" height="400px" />
```

### Standalone SVG embed

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animation/pattern-g/pattern-g-seamless.svg"
  width="400"
  alt=""
  aria-hidden="true"
/>
```

---

## Brand colors

| Name | Hex |
|------|-----|
| Gold | `#F1AA27` |
| Dark navy | `#1C1C2E` |
