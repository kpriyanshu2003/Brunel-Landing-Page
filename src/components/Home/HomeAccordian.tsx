import { useState } from "react";
import { homeaskQuestion } from "../../constants/HomeAskQuestions";
import { MinusIcon, PlusIcon } from "../../constants/Icons";

function HomeAccordian({ className }: { className?: string }) {
  return (
    <>
      {homeaskQuestion.map((items, index) => (
        <HomeAccordianItem
          key={index}
          data={items}
          className={className}
          isLast={index === homeaskQuestion.length - 1}
        />
      ))}
    </>
  );
}

function HomeAccordianItem({
  className,
  data,
  isLast,
}: {
  className?: string;
  data: { question: string; answer: string };
  isLast: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`mr-16 ${className} cursor-pointer`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between mt-5">
        <span className="font-semibold">{data.question}</span>
        {open ? <MinusIcon /> : <PlusIcon />}
      </div>

      <div
        className={`text-[#617275] text-sm border my-2 transition-all duration-1000 ${
          open ? "max-h-[1000px] h-auto" : "h-0 max-h-0 overflow-hidden"
        }`}
      >
        {data.answer}
      </div>

      {!isLast && <hr className="h-0.5 bg-[#D7D7D7] my-5" />}
    </div>
  );
}

export default HomeAccordian;
