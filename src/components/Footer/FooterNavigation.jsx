import * as React from "react";

const navigationSections = [
  {
    title: "Мэдээ, Мэдээлэл",
    links: ["Бидний түүх", "Блог", "Мэдээ", "Ажлын байр"]
  },
  {
    title: "Үйлчилгээ",
    links: [
      "Үйлчилгээний нөхцөл",
      "Хүргэлт, буцаалтын нөхцөл",
      "Борлуулалтын дараах үйлчилгээ",
      "Бэлгийн карт"
    ]
  },
  {
    title: "Хэрэглэгчийн туслах",
    links: [
      "Түгээмэл асуулт, хариулт",
      "Бүтээгдэхүүний арчилгаа",
      "Онлайн захиалгын заавар",
      "Салбар дэлгүүрийн байршил"
    ]
  },
  {
    title: "Холбоо барих",
    links: [
      "9511-3348",
      "info@bodios.mn",
      "Монгол улс, Улаанбаатар хот, Сонгинохайрхан дүүрэг, 1/23 товчооны зам, 20-р хороо"
    ]
  }
];

function FooterNavigation() {
  return (
    <nav className="flex gap-10 items-start mt-8 w-full text-sm text-black max-w-[1312px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-start w-full h-[152px] max-md:max-w-full">
          {navigationSections.map((section, index) => (
            <section key={index} className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <h2 className="w-full font-semibold leading-6 uppercase max-md:pr-5">
                {section.title}
              </h2>
              <ul className="flex flex-col items-start mt-4 w-full leading-none">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="gap-2.5 self-stretch mt-2 first:mt-0">
                    <a href="#" tabIndex="0">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default FooterNavigation;