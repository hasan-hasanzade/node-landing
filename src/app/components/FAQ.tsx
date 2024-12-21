import React from "react";
import Accordion from "./Accordion";
import { useTranslations } from "next-intl";

const FAQ: React.FC = () => {
  const t = useTranslations("Faq");

  const faqItems = [
    {
      question: t("firtstQues"),
      answer: t("firtstAnsw"),
    },
    {
      question: t("secondQues"),
      answer: t("secondAnsw"),
    },
    {
      question: t("thirdQues"),
      answer: t("thirdAnsw"),
    },
    {
      question: t("fourthQues"),
      answer: t("fourthAnsw"),
    },
    {
      question: t("fifthQues"),
      answer: t("fifthAnsw"),
    },
    {
      question: t("sixthQues"),
      answer: t("sixthAnsw"),
    },
    {
      question: t("seventhQues"),
      answer: t("seventhAnsw"),
    },
  ];
  return (
    <section className="bg-faq bg-cover bg-no-repeat w-full min-h-[1120px] xs:min-h-[900px] md:min-h-[750px] lg:min-h-[600px]">
      <div className="container max-w-[1430px] mb-20">
        <div className="flex justify-between gap-10 flex-wrap lg:flex-nowrap">
          <div>
            <h2 className="flex flex-col">
              <span className="font-inter bg-gradient-to-r from-white  to-white/5 inline-block text-transparent bg-clip-text text-3xl s:text-5xl">
                {t("title")}
              </span>
              <span className="font-inter bg-gradient-to-r from-white  to-white/5 inline-block text-transparent bg-clip-text text-3xl s:text-5xl">
                {t("title2")}
              </span>
            </h2>
          </div>
          <div>
            <Accordion items={faqItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
