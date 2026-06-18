import React from "react";

/* Subtle embossed hairline placed between blocks for a soft 3D separation. */
export function Divider() {
  return (
    <div className="mx-auto max-w-6xl px-6" aria-hidden="true">
      <div className="bevel-divider" />
    </div>
  );
}
