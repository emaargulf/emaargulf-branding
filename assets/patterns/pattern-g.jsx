export default function PatternG({
  width = "100%",
  height = "100%"
}) {
  return (
    <div
      style={{
        width,
        height,
        backgroundImage: "url('/pattern-g.svg')",
        backgroundRepeat: "repeat",
        backgroundSize: "48.19px 48.19px"
      }}
    />
  );
}