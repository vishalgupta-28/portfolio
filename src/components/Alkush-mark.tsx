export function AlkushMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 557 381"
      fill="none"
      {...props}
    >
      {/* --- Letter V --- */}
      {/* Left Column */}
      <rect x="50" y="113" width="57" height="150" fill="currentColor" />
      {/* Right Column */}
      <rect x="180" y="113" width="57" height="150" fill="currentColor" />
      {/* Bottom Connector */}
      <rect x="107" y="263" width="73" height="57" fill="currentColor" />

      {/* --- Letter G --- */}
      {/* Left Column */}
      <rect x="290" y="113" width="57" height="207" fill="currentColor" />
      {/* Top Bar */}
      <rect x="347" y="113" width="120" height="57" fill="currentColor" />
      {/* Bottom Bar */}
      <rect x="347" y="263" width="120" height="57" fill="currentColor" />
      {/* Right Mid Column */}
      <rect x="410" y="200" width="57" height="120" fill="currentColor" />
      {/* Mid Connector */}
      <rect x="370" y="200" width="40" height="57" fill="currentColor" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  // Path logic: 
  // V: (0,0 to 96,128)
  // G: (128,0 to 256,128)
  const pathData = `
    M0 0h32v96h32V0h32v96h-32v32H32V96H0V0Z 
    M128 0h96v32h-64v64h64V64h-32v32h-32V32h32V0Z
  `.replace(/\s+/g, ' ');

  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="${pathData}"/></svg>`;
}
