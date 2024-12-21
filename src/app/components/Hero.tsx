import React from "react";
import Image from "next/image";
import ArrowIcon from "@public/hero/arrow.svg";
import { useTranslations } from "next-intl";

const Hero: React.FC = () => {
  const t = useTranslations("Hero");

  return (
    <section className="mt-24">
      <div className="container max-w-[1430px]">
        <div className="flex justify-center items-center flex-col">
          <h1 className="font-inter-semibold text-[39px] md:text-6xl flex flex-col items-center">
            <span className="text-primary text-center">
              {t("title1")}{" "}
              <span className="text-white hidden md:inline">{t("title2")}</span>
            </span>
            <span className="text-center">
              <span className="inline md:hidden">{t("title2")}</span>{" "}
              {t("title3")}
            </span>
          </h1>
          <div className="p-8 md:p-3 bg-foreground rounded-[10px] flex items-center h-20 gap-3 md:gap-10 h-full mt-10 max-w-full w-full md:max-w-[655px] w-full justify-center md:justify-between flex-wrap md:flex-nowrap">
            <p className="text-gray font-inter-medium text-lg pl-0 md:pl-[28px] text-center">
              {t("banner")}
            </p>
            <a
              href="#"
              className="bg-primary font-inter-medium text-lg max-w-[230px] w-full rounded-[5px] h-[60px] flex justify-center items-center transform transition duration-200 active:scale-95 will-change-transform hover:bg-hoverprimary group"
            >
              {t("button")}{" "}
              <ArrowIcon className="ml-2 transform transition duration-200 group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-10">
            <Image
              src="/hero/example.png"
              width={1420}
              height={929}
              quality={100}
              priority
              alt="Picture of the author"
              className="hidden md:block"
            />
            <Image
              src="/hero/iphone.png"
              width={420}
              height={229}
              quality={100}
              priority
              alt="Picture of the author"
              className="md:hidden block mt-[-60px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
