'use client'

import { useState } from "react";

const Accordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const toggleAccordion = (index: number) => {
    if (isTransitioning) return;

    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setIsTransitioning(true);
      setOpenIndex(null);
      setTimeout(() => {
        setOpenIndex(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="max-w-full lg:max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className="overflow-hidden"
        >
          <button
            className="w-full text-left py-4 text-2xl font-inter-medium text-white flex justify-between items-start s:items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <span
              className={`text-xl transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="text-gray font-inter-medium text-[15px] s:text-base pb-4">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
