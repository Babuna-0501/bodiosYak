import * as React from "react";
import SocialLinks from "./SocialLinks";
import FooterNavigation from "./FooterNavigation";
import NewsletterForm from "./NewsletterForm";

function Footer() {
  return (
    <footer className="flex flex-col mt-[100px]">
      <div className="flex flex-col items-center px-14 pt-12 pb-16 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center max-w-full w-[1312px]">
          <NewsletterForm />
          <SocialLinks />
        </div>
        <hr className="mt-8 max-w-full min-h-0 border border-solid bg-neutral-900 bg-opacity-10 border-neutral-900 border-opacity-10 w-[1312px]" />
        <FooterNavigation />
      </div>
    </footer>
  );
}

export default Footer;