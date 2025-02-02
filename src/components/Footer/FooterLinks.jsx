import * as React from "react";

const FooterLinks = ({ links }) => {
  return (
    <div className="flex flex-col w-full text-sm font-light tracking-normal leading-none mt-10">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`${index > 0 ? "mt-2.5" : ""}`}
          tabIndex="0"
        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;