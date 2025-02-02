import * as React from "react";
import FooterLinks from "./FooterLinks";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  const customerLinks = [
    { text: "freguently asked questions", href: "#" },
    { text: "shipping & returns", href: "#" },
    { text: "cashmere care", href: "#" },
    { text: "sustainability", href: "#" },
    { text: "gift cards", href: "#" }
  ];

  return (
    <footer className="flex flex-col font-libreFranklin">
      <div className="flex overflow-hidden flex-col w-full bg-white shadow-sm max-md:max-w-full">
        <div className="flex relative flex-col items-center px-20 pt-24 pb-10 min-h-[445px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc31e98e95d4573011f945b0fd2c7d98d385b85797c209b1f47333fe30fcff01?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative flex-col w-full max-w-[1444px] max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
                  <nav className="flex flex-col grow text-black max-md:mt-10">
                    <div className="flex flex-col w-full text-lg tracking-normal leading-none text-center">
                      <h2 className="self-start font-githera xl:text-[18px]">Contact us</h2>
                      <div className="flex w-full min-h-0" />
                    </div>
                    <FooterLinks links={customerLinks} className="text-xl font-libreFranklin" />
                  </nav>
                </div>
                <div className="flex flex-col ml-5 w-[79%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between text-lg tracking-normal leading-none text-center text-black max-md:max-w-full">
                      <div className="flex flex-col">
                        <h2 className="self-start font-githera">Follow us</h2>
                        <div className="flex w-full min-h-0" />
                      </div>
                      <div className="flex flex-col max-md:max-w-full">
                        <h2 className="self-start font-githera xl:text-[18px]">Join the Bodios Yak Down circle</h2>
                        <div className="flex w-full min-h-0 max-md:max-w-full" />
                        <form className="flex gap-5 items-end self-end text-lg font-light leading-none text-neutral-600 relative top-5">
                          <div className="flex flex-1 shrink gap-5 items-center w-full border-b border-solid basis-0 border-b-black min-h-[31px] min-w-[240px] max-md:max-w-full">
                            <label htmlFor="emailInput" className="sr-only">Enter your email</label>
                            <input
                              type="email"
                              id="emailInput"
                              placeholder="enter your email"
                              className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
                              aria-label="Enter your email"
                            />
                            <button
                              type="submit"
                              aria-label="Submit email"
                              className="flex shrink-0 self-stretch my-auto w-6 h-6"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="flex gap-3.5 justify-center items-center self-start rounded-full">
                      <SocialIcon icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8366995aa38a2834770af5d3d6d1b4be2524ed09f51a24d7ec74b4e69381862e?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1" alt="Social media icon" />
                    </div>
           
                  </div>
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5782d9c22aab72fe88a99ffc1ca0f55fc632c0844dc551be3d83dc18f1c89e22?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
              alt=""
              className="object-contain mt-16 w-full aspect-[100] stroke-[1px] stroke-zinc-500 max-md:mt-10 max-md:max-w-full"
            />
            <div className="self-center mt-9 text-sm font-light tracking-normal leading-none text-right text-neutral-600">
              © Bodios Yak Down 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
