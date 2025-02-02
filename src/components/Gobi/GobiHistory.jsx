import * as React from "react";
import { timelineData } from "./TimelineData";
import { TimelineItem } from "./TimelineItem";

export function GobiHistory() {
  return (
    <div className="z-10 font-libreFranklin pt-0 text-xl font-light leading-8 text-justify text-black rounded-none max-md:max-w-full xl:max-w-[1000px] pt-20 pb-20">
      <p>
        With a legacy spanning 30 years, BODIOS has been deeply connected with the
        people of the Gobi. Through their trust and collaboration, we have been
        privileged to source high-quality raw materials that form the foundation
        of our luxury products.
      </p>
      <br />
      <br />
      <p>Here are some of the contributions we have made to support the herders of
      the Gobi:</p>
      <ul>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            period={item.period}
            description={item.description}
          />
        ))}
        <li>
          <span className="text-black">
            Our commitment to the Gobi extends beyond business; we are dedicated
            to preserving its natural beauty and supporting the people whose
            traditions and lands sustain our work.
          </span>
        </li>
      </ul>
    </div>
  );
}