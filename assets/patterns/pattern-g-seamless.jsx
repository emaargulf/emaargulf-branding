import { useId } from "react";

/**
 * PatternGSeamless
 * Emaar Gulf diagonal bracket pattern — fully inline SVG, no external files.
 *
 * Props
 *  width       string|number   SVG width  (default: "100%")
 *  height      string|number   SVG height (default: "100%")
 *  color       string          bracket fill color (default: "#F1AA27" gold)
 *  background  string          background fill (default: "transparent")
 *  className   string          extra class names
 *
 * Usage
 *  <PatternGSeamless width="100%" height="400px" background="#1C1C2E" />
 *  <PatternGSeamless color="#ffffff" background="#0a0a0a" />
 */

const D1 = "M22.18 26.01v16.3l-4.67 4.67v-16.3H1.21l4.67-4.67h16.3M22.68 25.51H5.67L0 31.18h17.01v17.01l5.67-5.67v-17.01Z";
const D2 = "M42.31 26.01l4.67 4.67h-16.3v16.3l-4.67-4.67v-16.3h16.3M42.52 25.51h-17.01v17.01l5.67 5.67v-17.01h17.01l-5.67-5.67Z";
const D3 = "M17.51 1.21l4.67 4.67v16.3H5.88l-4.67-4.67h16.3V1.21M17.01 0v17.01H0l5.67 5.67h17.01V5.67L17.01 0Z";
const D4 = "M30.68 1.21v16.3h16.3l-4.67 4.67h-16.3V5.88l4.67-4.67M31.18 0l-5.67 5.67v17.01h17.01l5.67-5.67h-17.01V0Z";

export default function PatternGSeamless({
  width = "100%",
  height = "100%",
  color = "#F1AA27",
  background = "transparent",
  className = ""
}) {
  const uid = useId().replace(/:/g, "");
  const pid = `pgS${uid}`;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      <defs>
        <pattern
          id={pid}
          x="0" y="0"
          width="68.03" height="68.03"
          patternUnits="userSpaceOnUse"
        >
          {/* Motif A — (0, 0) */}
          <path fill={color} d={D1} />
          <path fill={color} d={D2} />
          <path fill={color} d={D3} />
          <path fill={color} d={D4} />

          {/* Motif B — (34.015, 34.015) */}
          <g transform="translate(34.015,34.015)">
            <path fill={color} d={D1} />
            <path fill={color} d={D2} />
            <path fill={color} d={D3} />
            <path fill={color} d={D4} />
          </g>

          {/* Edge wraps — left tile's Motif B */}
          <path fill={color} transform="translate(-34.015,34.015)" d={D4} />
          <path fill={color} transform="translate(-34.015,34.015)" d={D2} />

          {/* Edge wraps — top tile's Motif B */}
          <path fill={color} transform="translate(34.015,-34.015)" d={D1} />
          <path fill={color} transform="translate(34.015,-34.015)" d={D2} />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={background} />
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}
