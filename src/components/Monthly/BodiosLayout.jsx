import * as React from "react";

function ImageCard({ imageSrc, src, title, alt, width, aspectRatio, overlayText }) {
  const isSmartphone = Boolean(src);

  return isSmartphone ? (
    <div className="flex relative gap-0.5 min-h-[239px]">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={`object-contain shrink-0 max-w-full w-[${width}]`}
        style={{ aspectRatio }}
      />
      {overlayText && (
        <div
          className="absolute z-0 self-start bottom-[19px] h-[23px] left-[17px] w-[123px]"
          role="text"
          aria-label={overlayText}
        >
          {overlayText}
        </div>
      )}
    </div>
  ) : (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full cursor">
      <div className="flex relative flex-col grow pb-20 text-8xl text-white uppercase whitespace-nowrap min-h-[1224px] pt-[1039px] max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
        <img
          loading="lazy"
          src={imageSrc}
          alt={title}
          className="object-cover absolute inset-0 size-full"
        />
        <p className="text-white z-[1] ml-[90px]">{title}</p>
      </div>
    </div>
  );
}

const desktopCards = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/eca9e17e66b088a18b38f16c0b6e10e7f684f72de8432d8f359d2b2d1b06dc38?apiKey=9804d3a088fa478e8672485264720a14&",
    title: "BODIOS",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/b110ec9b2c930715327306f18db0a648bcb52d19491bdc9f52fd0bf177dad4b6?apiKey=9804d3a088fa478e8672485264720a14&",
    title: "Boutique",
  },
];

const smartphoneImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/376750f5ebc26b7c170b9185331b385b6882243dcfee4f3f9c2dc5be5063de21?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
    alt: "Boutique collection showcase",
    width: "100%",
    aspectRatio: "0.79",
    overlayText: "Bodios",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ebdb00c5850f22eff22b67fd3b24478c7e16daa7872f89140d1886f0265183b8?placeholderIfAbsent=true&apiKey=b9b4bb420cb64e36b6b71e99a06536e1",
    alt: "Boutique storefront display",
    width: "100%",
    aspectRatio: "0.78",
    overlayText: "Boutique",
  },
];

function useMediaQuery(query) {
  const [matches, setMatches] = React.useState(window.matchMedia(query).matches);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);

    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

function BodiosLayout() {
  const isSmartphone = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {isSmartphone ? (
        <div className="flex text-2xl text-white uppercase whitespace-nowrap">
          {smartphoneImages.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              aspectRatio={image.aspectRatio}
              overlayText={image.overlayText}
            />
          ))}
        </div>
      ) : (
        <div className="flex max-md:flex-col">
          {desktopCards.map((card, index) => (
            <ImageCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default BodiosLayout;
