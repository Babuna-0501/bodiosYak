import * as React from "react";

export function FooterLinkSection({ title, links }) {
  return (
    <div className="flex flex-col min-w-[240px] w-[260px]">
      <div className="flex flex-col w-full text-lg tracking-normal leading-none text-center whitespace-nowrap">
        <div className="self-start">{title}</div>
        <div className="flex w-full min-h-0" />
      </div>
      <div className="flex flex-col mt-5 w-full text-sm font-light tracking-normal leading-none">
        {links.map((link, index) => (
          <div key={index} className={index > 0 ? "mt-1.5" : ""}>
            {link}
          </div>
        ))}
      </div>
    </div>
  );
}