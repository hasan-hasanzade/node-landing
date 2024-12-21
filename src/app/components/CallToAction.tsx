import React from "react";
import ArrowIcon from "@public/action/arrow.svg";
import { useTranslations } from "next-intl";

const CallToAction: React.FC = () => {
  const t = useTranslations("Action");
  return (
    <section className="mt-24 mb-[120px]">
      <div className="container max-w-[1430px]">
        <div className="bg-action rounded-[25px] bg-cover">
          <div className="py-[60px] s:py-[120px] px-4 flex flex-col items-center justify-center gap-16">
            <h2 className="font-inter bg-gradient-to-r from-white  to-white/25 inline-block text-transparent bg-clip-text text-3xl s:text-5xl h-[110%] lg:h-[100px] text-center max-w-[1016px]">
              {t("title")}
            </h2>
            <a
              href="#"
              className="bg-primary font-inter-medium text-lg max-w-[230px] w-full rounded-[5px] h-[60px] flex justify-center items-center transform transition duration-200 active:scale-95 will-change-transform hover:bg-hoverprimary group"
            >
              {t("button")}
              <ArrowIcon className="ml-2 transform transition duration-200 group-hover:translate-x-1" />
            </a>
            <div className="flex gap-4 flex-wrap justify-center ">
              <a
                className="py-[14px] px-[30px] bg-foreground text-gray rounded-[8px] border border-white/10 flex items-center justify-center text-xl font-inter-semibold transition duration-200  hover:border-primary"
                href="#"
              >
                Telegram
              </a>
              <a
                className="py-[14px] px-[30px] bg-foreground text-gray rounded-[8px] border border-white/10 flex items-center justify-center text-xl font-inter-semibold  transition duration-200  hover:border-primary"
                href="#"
              >
                Twitter
              </a>
              <a
                className="py-[14px] px-[30px] bg-foreground text-gray rounded-[8px] border border-white/10 flex items-center justify-center text-xl font-inter-semibold  transition duration-200  hover:border-primary"
                href="#"
              >
                Linkedin
              </a>
              <a
                className="py-[14px] px-[30px] bg-foreground text-gray rounded-[8px] border border-white/10 flex items-center justify-center text-xl font-inter-semibold  transition duration-200  hover:border-primary"
                href="#"
              >
                Facebook
              </a>
              <a
                className="py-[14px] px-[30px] bg-foreground text-gray rounded-[8px] border border-white/10 flex items-center justify-center text-xl font-inter-semibold  transition duration-200  hover:border-primary"
                href="#"
              >
                Reddit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
