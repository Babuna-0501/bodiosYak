import * as React from "react";

export function TimelineItem({ period, description }) {
  return (
    <li>
        <span className="text-black text-2xl">•&nbsp;&nbsp;&nbsp;</span> 
      <span className="text-black">
        {period}: {description}
      </span>
    </li>
  );
}