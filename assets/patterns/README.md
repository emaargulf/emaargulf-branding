<div align="center">
  <img src="https://emaargulf.github.io/emaargulf-branding/assets/patterns/pattern-g.svg" height="80" alt="pattern-g"/>
  <br/><br/>
  <h1>patterns</h1>
  <p>Seamless diagonal bracket pattern — CSS, React, and standalone SVG</p>
  <br/>
  <img src="https://img.shields.io/badge/Tile-68×68_px-F1AA27?style=flat-square&labelColor=35383C"/>
  <img src="https://img.shields.io/badge/React-Inline_SVG-35383C?style=flat-square"/>
  <img src="https://img.shields.io/badge/CSS-Background-35383C?style=flat-square"/>
</div>

---

## pattern-g

Diagonal checkerboard of the brand's angular bracket motif. Two tile sizes — a dense 48 px grid and a 68 px seamless tile designed for the diagonal arrangement.

| File | Description |
|------|-------------|
| `pattern-g.svg` | Dense 48.19 × 48.19 tile · 4 bracket corners |
| `pattern-g-tile.svg` | Seamless 68.03 × 68.03 tile · for CSS `background-image` |
| `pattern-g-seamless.svg` | Standalone preview · dark background |
| `pattern-g-sample.svg` | Reference showing the diagonal arrangement |
| `pattern-g.css` | `.pattern-g` · dense 48 px repeat |
| `pattern-g-seamless.css` | `.pattern-g-seamless` · diagonal 68 px repeat |
| `pattern-g.jsx` | React · CSS background approach |
| `pattern-g-seamless.jsx` | React · inline SVG `<pattern>` · no external files needed |

**Tile geometry:** motif 48.19 × 48.19 px · seamless repeat 68.03 px · diagonal step 34.015 px

---

## Usage

### CSS

```css
/* diagonal checkerboard — recommended */
background-image: url("https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/patterns/pattern-g-tile.svg");
background-repeat: repeat;
background-size: 68.03px 68.03px;
background-color: #35383C;
```

### React — inline (no external file)

```jsx
import PatternGSeamless from './pattern-g-seamless.jsx';

<PatternGSeamless width="100%" height="400px" color="#F1AA27" background="#35383C" />
```

| Prop | Default | Description |
|------|---------|-------------|
| `color` | `"#F1AA27"` | Bracket fill |
| `background` | `"transparent"` | Background fill |
| `width` | `"100%"` | SVG width |
| `height` | `"100%"` | SVG height |

---

## CDN base

```
https://cdn.jsdelivr.net/gh/emaargulf/emaargulf-branding@main/assets/patterns/
```
