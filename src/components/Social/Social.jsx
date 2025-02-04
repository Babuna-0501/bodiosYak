// import SocialContent from "./SocialContent";
import ContributionsTimeline from "../Yearly/ContributionsTimeline";

function Social() {
  return (
    <div className="flex flex-col items-center text-black bg-customBg">
      <h1 className="text-8xl text-center uppercase max-md:text-4xl mt-[140px]">
        Social Responsibility
      </h1>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/cdf05a2d09060e6a3f68458879bf8972191e20dbec68dd9cb47caaf05f965873?apiKey=9804d3a088fa478e8672485264720a14&" 
        alt="Social responsibilty"
        className="object-contain self-stretch mt-16 w-full aspect-[1.78] max-md:mt-10 max-md:max-w-full" 
      />
      <ContributionsTimeline/>
    </div>
  );
}

export default Social;