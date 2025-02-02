import * as React from "react";

const SocialIcon = ({ icon, alt }) => {
  return (
    <div className="flex gap-2.5 justify-center items-center self-stretch my-auto w-8 h-8 rounded-full border border-solid border-neutral-900 border-opacity-20 min-h-[32px]">
      <img
        loading="lazy"
        src={icon}
        alt={alt}
        className="object-contain self-stretch my-auto w-3.5 aspect-square fill-black"
      />
    </div>
  );
};

export default SocialIcon;