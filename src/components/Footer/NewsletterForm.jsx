import * as React from "react";

function NewsletterForm() {
  return (
    <form className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] w-[853px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/a6b716ca6e813f58e2f64aac293ba920114fd55ab5af21b2e1e88e1833ef45a5?apiKey=9804d3a088fa478e8672485264720a14&"
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.82] w-[62px]"
        alt="Company logo"
      />
      <div className="flex items-center self-stretch my-auto min-w-[240px]">
        <label htmlFor="emailInput" className="sr-only">
          Enter your email
        </label>
        <input
          type="email"
          id="emailInput"
          className="gap-10 self-stretch my-auto text-xs leading-none border-b border-solid border-b-neutral-900 border-b-opacity-10 min-h-[31px] min-w-[240px] text-neutral-400 w-[322px]"
          placeholder="Та мэдээлэл авах и-мэйл хаягаа үлдээнэ үү..."
        />
        <button
          type="submit"
          className="flex gap-2.5 items-start self-stretch px-3.5 py-1 my-auto bg-black rounded-sm w-[50px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/9804d3a088fa478e8672485264720a14/9aac16fdf5eadc58d1c727601d5f24ae60a34832253594bc99c0f28dea77901b?apiKey=9804d3a088fa478e8672485264720a14&"
            className="object-contain w-6 aspect-square"
            alt=""
          />
        </button>
      </div>
    </form>
  );
}

export default NewsletterForm;