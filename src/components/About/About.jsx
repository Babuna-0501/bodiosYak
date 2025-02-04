import React from "react";
import Image52 from "../../assets/image_52.png";
import CommunityPage from "../Community/CommunityPage";

function About() {
  return (
    <div className="w-full bg-customBg">
      {/* Title */}
      <div className="text-center text-black text-[28px] sm:text-[100px] font-normal uppercase pt-[100px] pb-[30px]">
        about us
      </div>

      {/* Background Image */}
     <img
        className="w-full h-auto"
        src={Image52}
        alt="About Background"
      />

      {/* Content */} 
      <CommunityPage/>
    </div>
  );
}

export default About;
