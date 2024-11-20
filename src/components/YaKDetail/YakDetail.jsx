import YakContent from "./YakContent";

function YakDetail() {
  return (
    <div className="flex flex-col items-center text-black bg-customBg">
      <h1 className="text-8xl text-center uppercase max-md:text-4xl mt-[140px]">
        Yak
      </h1>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/f3b946d0892ec73732cfb57f390e5d283ffc62079f33cc856c7610a7b6c05c31?apiKey=9804d3a088fa478e8672485264720a14&" 
        alt="Bodios brand showcase"
        className="object-contain self-stretch mt-16 w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full" 
      />
      <YakContent />
    </div>
  );
}

export default YakDetail;