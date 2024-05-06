import React from "react";
import { homeaskQuestion } from "../../constants/HomeAskQuestions";
import { MinusIcon, PlusIcon } from "../../constants/Icons";

function HomeAccordian({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(2);
  const handleItemClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      {homeaskQuestion.map((items, index) => (
        <HomeAccordianItem
          key={index}
          data={items}
          className={className}
          isOpen={openIndex === index}
          onClick={() => handleItemClick(index)}
          isLast={index === homeaskQuestion.length - 1}
        />
      ))}
    </>
  );
}

function HomeAccordianItem({
  className,
  data,
  isOpen,
  isLast,
  onClick,
}: {
  className?: string;
  data: { question: string; answer: string };
  isOpen: boolean;
  isLast: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`mr-16 ${className}`}>
      <div
        className="flex items-center justify-between cursor-pointer mt-5"
        onClick={onClick}
      >
        <span className="font-semibold">{data.question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </div>

      <div
        className={`text-[#617275] transition-all ease-in-out duration-300 text-sm border my-2 ${
          isOpen ? "h-full opacity-100" : "h-0 opacity-0"
        }`}
      >
        {data.answer}
      </div>
      {!isLast && <hr className="h-0.5 bg-[#D7D7D7] my-5" />}
    </div>
  );
}

export default HomeAccordian;
