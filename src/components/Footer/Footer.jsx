import * as React from "react";
import { FooterLinkSection } from "./FooterLinkSection";
import { SocialIcon } from "./SocialIcon";
import { socialIcons, footerLinks } from "./FooterData";

export function Footer() {
  return (
    <div className="flex flex-col">
      <div className="flex overflow-hidden flex-col justify-center py-px w-full bg-white shadow-sm max-md:max-w-full">
        <div className="flex relative flex-col items-center px-20 pt-16 pb-10 min-h-[518px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/838ba21261cc74cefe06d100c55239c1598a1c3b81a9e1b510820e9b9da72d30?apiKey=9804d3a088fa478e8672485264720a14&"
            alt="Footer background"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col w-full max-w-[1444px] max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
              <div className="flex flex-col text-lg">
                <div className="flex flex-col tracking-normal leading-none text-center text-black">
                  <div className="self-start">Join the Bodios Yak Down circle</div>
                  <div className="flex w-full min-h-0" />
                </div>
                <form className="flex gap-5 items-end mt-4 font-light leading-none text-neutral-600">
                  <div className="flex gap-5 items-center border-b border-solid border-b-black min-h-[31px] min-w-[240px] w-[372px]">
                    <label htmlFor="emailInput" className="sr-only">Enter your email</label>
                    <input
                      type="email"
                      id="emailInput"
                      placeholder="enter your email"
                      className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
                      aria-label="Enter your email"
                    />
                    <button type="submit" aria-label="Submit email">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/87da361f8fbe0b85864632554322d1046f3c513169d1ae8f48361ed445993127?apiKey=9804d3a088fa478e8672485264720a14&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    </button>
                  </div>
                </form>
              </div>
              <div className="flex gap-3.5 justify-center items-center my-auto rounded-full">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2.5 items-start self-start mt-16 text-black max-md:mt-10">
              {footerLinks.map((section, index) => (
                <FooterLinkSection key={index} {...section} />
              ))}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/6e4e1283aca84e74d37a55f83dd3552e1e956bee70df4735c6f67d8cbdfef62f?apiKey=9804d3a088fa478e8672485264720a14&"
              alt=""
              className="object-contain mt-12 w-full aspect-[1000] stroke-[1px] stroke-zinc-900 max-md:mt-10 max-md:max-w-full"
            />
            <div className="self-center mt-9 text-sm font-light tracking-normal leading-none text-right text-neutral-600">
              © Bodios Yak Down 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;