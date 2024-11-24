import * as React from "react";

const socialLinks = [
  { src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/8a37014e1bf120f080d1b29e136f0a3a86be84cb7e12ba378fcbf05053bc48a8?apiKey=9804d3a088fa478e8672485264720a14&", alt: "Facebook", width: "w-1.5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/ee055449a072ad295acdfe4ca7d07280cca601c73c235d7ca8fd851c67410291?apiKey=9804d3a088fa478e8672485264720a14&", alt: "Twitter", width: "w-3.5" },
  { src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/2247244c5c99fd4d4ccc3c625f702f7bfe43001e90dc026c82cc1fa4631e3881?apiKey=9804d3a088fa478e8672485264720a14&", alt: "Instagram", width: "w-[18px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/70d174f04cd148bfe17932a42fd8127565eca5067d25f97548886e7c2ee37e7f?apiKey=9804d3a088fa478e8672485264720a14&", alt: "YouTube", width: "w-3.5" }
];

function SocialLinks() {
  return (
    <nav className="flex gap-6 justify-center items-center self-stretch my-auto rounded-full">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href="#"
          className="flex gap-2.5 justify-center items-center self-stretch my-auto w-8 h-8 rounded-full border border-solid border-neutral-900 border-opacity-20 min-h-[32px]"
          tabIndex="0"
        >
          <img
            loading="lazy"
            src={link.src}
            className={`object-contain self-stretch my-auto ${link.width} aspect-square fill-black`}
            alt={link.alt}
          />
        </a>
      ))}
    </nav>
  );
}

export default SocialLinks;