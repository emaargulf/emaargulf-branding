export default function GlyphG({
  className = "",
  color = "currentColor",
  size = 100
}) {
  return (
    <svg
      width={size}
      height={(size * 22.68) / 17.01}
      viewBox="0 0 17.01 22.68"
      className={className}
    >
      <path
        d="M0 5.67 L11.34 5.67 L11.34 22.68 L17.01 18.43 L17.01 0 L0 0 L0 5.67"
        fill="none"
        stroke={color}
        strokeWidth="0.75"
        strokeLinejoin="miter"
        strokeLinecap="square"
        strokeMiterlimit="200"
        pathLength="100"
      />
    </svg>
  );
}