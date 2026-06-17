<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/animations/glyph-g-animated-gold.svg" height="72" alt="Emaar Gulf Glyph"/>
  <br/><br/>
  <h1>animations</h1>
  <p>Brand mark animations — draw-on glyph and bracket pattern</p>
  <br/>
  <img src="https://img.shields.io/badge/SVG-Animated-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/React-JSX-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/CSS-Animation-35383C?style=flat-square"/>
</div>

---

## glyph-g

Angular G brand mark with a draw-on stroke animation. `pathLength="100"` normalises the path for reliable `dasharray` timing across all sizes.

| File | Description |
|------|-------------|
| `glyph-g.svg` | Static · inherits `currentColor` |
| `glyph-g-animated.svg` | Draw-on · `currentColor` · standalone |
| `glyph-g-animated-gold.svg` | Draw-on · `#F1AA27` · standalone |
| `glyph-g.jsx` | React · static · `size` + `color` props |
| `glyph-g-animated.jsx` | React · animated · `duration` / `easing` / `delay` props · `useId`-safe |
| `glyph-g-animation.css` | `.glyph-draw` class for plain HTML |

**Geometry:** `viewBox 0 0 17.01 22.68` · `stroke-width 0.75` · `pathLength 100`

### HTML

```html
<!-- static -->
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/glyph-g.svg"
  height="48" alt="Emaar Gulf"
/>

<!-- animated gold -->
<img
  src="https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/glyph-g-animated-gold.svg"
  height="48" alt="Emaar Gulf"
/>
```

### React

```jsx
import GlyphG         from './glyph-g.jsx';
import GlyphGAnimated from './glyph-g-animated.jsx';

<GlyphG size={80} color="#F1AA27" />

<GlyphGAnimated size={80} color="#F1AA27" duration="1.5s" delay="0.3s" />
```

| Prop | Default | Description |
|------|---------|-------------|
| `size` | `100` | Width in px — height scales to ratio |
| `color` | `"currentColor"` | Stroke color |
| `duration` | `"2s"` | Animation duration *(animated only)* |
| `easing` | `"ease"` | CSS easing *(animated only)* |
| `delay` | `"0s"` | Start delay *(animated only)* |

### CSS class

```html
<link rel="stylesheet" href="./glyph-g-animation.css"/>
<path class="glyph-draw" ... pathLength="100"/>
```

---

## glyph-pattern-g — *in development*

Animated draw-on version of the `pattern-g` bracket motif.  
Planned files: `glyph-pattern-g.svg` · `-animated.svg` · `-animated-gold.svg` · `.jsx` · `-animated.jsx` · `.css`

---

## CDN base

```
https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/animations/
```
