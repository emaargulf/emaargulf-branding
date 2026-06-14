# glyph-g

The Emaar Gulf brand mark — a minimal angular glyph derived from the letter G.

---

## Files

| File | Description |
|------|-------------|
| `glyph-g.svg` | Static glyph, `currentColor` stroke |
| `glyph-g-animated.svg` | Draw-on animation, `currentColor` (standalone SVG) |
| `glyph-g-animated-gold.svg` | Draw-on animation, gold `#F1AA27` (standalone SVG) |
| `glyph-g.jsx` | React component — static, configurable |
| `glyph-g-animated.jsx` | React component — draw-on animation, configurable |
| `glyph-g-animation.css` | CSS class for the draw-on animation (class-based) |

---

## Geometry

```
viewBox       0 0 17.01 22.68
stroke-width  0.75
pathLength    100   (normalised — enables dasharray animation)
```

The path traces a stylised G: bottom-left horizontal → up the left edge →
across the top → down the right → a diagonal step inward → and back.

---

## Usage

### `<img>` tag / HTML (static)

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animation/glyph-g/glyph-g.svg"
  width="48"
  alt="Emaar Gulf"
/>
```

### Animated SVG embed

```html
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animation/glyph-g/glyph-g-animated-gold.svg"
  width="48"
  alt="Emaar Gulf"
/>
```

### React — static

```jsx
import GlyphG from "./glyph-g.jsx";

<GlyphG size={80} color="#F1AA27" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | `100` | Width in px (height scales to aspect ratio) |
| `color` | string | `"currentColor"` | Stroke color |
| `className` | string | `""` | Extra CSS classes |

### React — animated

```jsx
import GlyphGAnimated from "./glyph-g-animated.jsx";

<GlyphGAnimated
  size={80}
  color="#F1AA27"
  duration="1.5s"
  delay="0.3s"
  easing="ease-in-out"
/>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | number | `100` | Width in px |
| `color` | string | `"currentColor"` | Stroke color |
| `duration` | string | `"2s"` | Animation duration |
| `easing` | string | `"ease"` | CSS easing function |
| `delay` | string | `"0s"` | Animation delay |
| `className` | string | `""` | Extra CSS classes |

### CSS class (plain HTML)

Apply to any SVG path that already has `pathLength="100"`:

```html
<link rel="stylesheet" href="glyph-g-animation.css" />

<svg viewBox="0 0 17.01 22.68" width="80">
  <path
    class="glyph-draw"
    d="M0 5.67 L11.34 5.67 L11.34 22.68 L17.01 18.43 L17.01 0 L0 0 L0 5.67"
    fill="none"
    stroke="#F1AA27"
    stroke-width="0.75"
    pathLength="100"
  />
</svg>
```

---

## Brand colors

| Name | Hex |
|------|-----|
| Gold | `#F1AA27` |
| Dark navy | `#1C1C2E` |
