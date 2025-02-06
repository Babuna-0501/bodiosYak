import * as React from "react";
import QuoteSection from "./QuoteSection";

const quotes = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/78fd8679919ae1fc18b54a7410ba2cfe3ff16c7b9b4e7cf86d0419915f3b4ad5?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      hoverImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/0be869f7bd94f949307ccb83146de6c86c8eeb69b6d18cd14ee5ef8f30a1a339?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      imageAlt: "Traditional Morin Khuur instrument",
      quote: "Морин хуур бол хялгасыг хялгасаар хөрөөддөг, байгалийг байгалиар нь эгшиглүүлдэг, дэлхийд цорын ганц хөгжим",
      author: "Морин хуурч Шинэцог-Гени",
      imageLeft: true
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5e53fa5989677eacdaa173ca7df9e602c63900e521a908ebcf0f54e15b9c4ce?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      hoverImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/837773d4597fe636444f256230d21817a860c6633e43b9c0c99bfd43a9e19ac2?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      imageAlt: "Yak in its natural habitat",
      quote: "Бидний өвгө дээдэс гэршүүлж гаршуулаагүй сэн бол, сарлаг өдийд дархан цаазтай амьтан байх байсан гэж боддог.\n\nТийм гайхамшигтай амьтнаас ургадаг бүтээгдэхүүнийг хэрэглэнэ гэдэг цаанаа л онцгой мэдрэмж төрүүлдэг шүү!",
      author: "Зохиолч, яруу найрагч Г.Аюурзана",
      imageLeft: false
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3034dbd4bdc754a8d2e0df83aa018c00acb402e31868a739ef1eacf3ea9758d7?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      hoverImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/799833b847fee60755b5028061a1086d4572e0a3fb94c6e13f96a6233327afb2?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
      imageAlt: "Natural landscape view",
      quote: "Хүний эх захгүй хэрэглээний хохирогч бол байгаль. Бид өөрсдөө бусдын хэрэглээний хохирогчид болцгоовол яах байснаа та нэг төсөөл дөө!\n\nЭнэ зохисгүй хандлагыг бид өөрсдөө л хязгаарлаж чадна. Учир нь та бид бүгдээрээ байгалийн эд эс!",
      author: "Урчуудын эвлэлийн нэрэмжит шагналт зураач Н.Сүхбүрэн",
      imageLeft: true
    }
  ];
  
  function JournalLayout() {
    return (
      <main className="flex flex-col items-center mt-20 sm:mb-[100px]">
        <h1 className="gap-2.5 self-stretch px-2.5 pt-16 pb-16 text-8xl text-center text-black uppercase whitespace-nowrap max-md:max-w-full max-md:text-4xl">
          journal
        </h1>
        <section className="flex relative flex-col self-stretch px-16 pt-96 pb-80 w-full text-4xl text-center text-white min-h-[867px] max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full" role="banner">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0b010bd1d333a0b342fea94d859fe23b13758b5b50e646e7c098bb20a2a795?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1"
            alt="Nature inspired creation banner"
            className="object-cover absolute inset-0 size-full"
          />
          <h2>GIFTED BY NATURE, CREATED BY BODIOS</h2>
        </section>
        {quotes.map((quote, index) => (
          <QuoteSection
            key={index}
            {...quote}
          />
        ))}
      </main>
    );
  }
  
  export default JournalLayout;
  