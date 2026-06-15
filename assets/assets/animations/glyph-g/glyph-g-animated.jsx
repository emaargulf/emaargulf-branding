import { useId } from "react";

/**
 * GlyphGAnimated
 * Emaar Gulf brand mark with a stroke draw-on animation.
 * Self-contained — no external CSS required.
 *
 * Props
 *  size      number   height in px (width scales proportionally)
 *  color     string   stroke color  (default: currentColor)
 *  duration  string   animation duration (default: "2s")
 *  easing    string   CSS easing (default: "ease")
 *  delay     string   animation delay (default: "0s")
 *  className string   extra class names
 */
export default function GlyphGAnimated({
  size = 100,
  color = "currentColor",
  duration = "2s",
  easing = "ease",
  delay = "0s",
  className = ""
}) {
  const uid = useId().replace(/:/g, "");
  const kf  = `glyphDraw_${uid}`;

  return (
    <svg
      width={size}
      height={(size * 22.68) / 17.01}
      viewBox="0 0 17.01 22.68"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>{`@keyframes ${kf}{to{stroke-dashoffset:0}}`}</style>
      <path
        d="M0 5.67 L11.34 5.67 L11.34 22.68 L17.01 18.43 L17.01 0 L0 0 L0 5.67"
        fill="none"
        stroke={color}
        strokeWidth="0.75"
        strokeLinejoin="miter"
        strokeLinecap="square"
        strokeMiterlimit="200"
        pathLength="100"
        style={{
          strokeDasharray: 100,
          strokeDashoffset: 100,
          animation: `${kf} ${duration} ${easing} ${delay} forwards`
        }}
      />
    </svg>
  );
}
