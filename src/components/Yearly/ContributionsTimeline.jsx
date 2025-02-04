import * as React from "react";

const contributions = [
  { year: "2001-2003", detail: "Donated 1,600 goats to 40 households to replenish livestock lost in the devastating Zud." },
  { year: "2001-2015", detail: "Enhanced rural living conditions by providing essential supplies to hospitals and schools." },
  { year: "2009-2012", detail: "Built a deep well in Bayangobi village, delivering clean water to a community of 3,000—a legacy expected to last over a century." },
  { year: "2003-2019", detail: "Launched initiatives to increase the camel population in Bayankhongor, leading to a 300% growth in the region’s camels, reversing a sharp decline." },
  { year: "2003-2019", detail: "Launched initiatives to increase the camel population in Bayankhongor, leading to a 300% growth in the region’s camels, reversing a sharp decline." },
];

function ContributionsTimeline() {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <p className="text-gray-700 text-lg leading-relaxed">
          With a legacy spanning 30 years, BODIOS has been deeply connected with the people of the Gobi. Through their trust and collaboration, we have been privileged to source high-quality raw materials that form the foundation of our luxury products.
        </p>
        <p className="mt-6 text-gray-700 text-lg">Here are some of the contributions we have made to support the herders of the Gobi:</p>
        
        <div className="mt-10 flex flex-col space-y-6 relative">
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-1/4 w-0.5 bg-gray-300"></div>
          {contributions.map((item, index) => (
            <div key={index} className="flex items-center relative z-10">
              {/* Year */}
              <div className="w-1/4 text-right pr-4 text-2xl font-semibold text-gray-900">{item.year}</div>

              {/* Timeline dot */}
              <div className="w-3 h-3 rounded-full bg-gray-500 absolute left-1/4 transform -translate-x-1/2"></div>

              {/* Detail */}
              <div className="flex-1 pl-4 text-lg text-gray-700">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

export default ContributionsTimeline;
