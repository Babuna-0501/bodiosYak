import * as React from "react";

export function CallToAction() {
  return (
    <div 
      className="flex gap-3 justify-center items-center self-center mt-14 max-w-full leading-relaxed w-[322px] max-md:mt-10"
      role="button"
      tabIndex={0}
      onClick={() => window.location.href = '/about'}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          window.location.href = '/about';
        }
      }}
    >
      <div className="self-stretch my-auto">About us</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/43bca62bdeeaf43a211eceb7879812882bd489282edd6396617981eb714cb0d4?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
        alt=""
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
      />
    </div>
  );
}