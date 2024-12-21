import React from "react";
import SetupIcon from "@public/features/comp.svg";
import ManageIcon from "@public/features/docs.svg";
import SecureIcon from "@public/features/pass.svg";
import FastIcon from "@public/features/fast.svg";
import RealIcon from "@public/features/real.svg";
import { useTranslations } from "next-intl";

const Features: React.FC = () => {
  const t = useTranslations("Features");
  return (
    <section className="mt-[70px] md:mt-[-150px]">
      <div className="container max-w-[1430px]">
        <div className="flex items-start md:items-center justify-start md:justify-center flex-col">
          <h2 className="font-inter bg-gradient-to-r from-white  to-white/25 inline-block text-transparent bg-clip-text text-3xl s:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 font-inter text-white text-lg max-w-[450px] text-left md:text-center">
            {t("subtitle")}
          </p>
        </div>
        <div className="mt-[60px] flex gap-[35px] md:gap-24 flex-wrap justify-center">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]">
              <div className="">
                <SetupIcon className="" />
              </div>
            </div>
            <h3 className="font-inter-medium text-2xl mt-[45px]">
              {t("firstItemTitle")}
            </h3>
            <p className="mt-3 font-inter-medium text-base text-gray">
              {t("firstItemText")}
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]">
              <ManageIcon />
            </div>
            <h3 className="font-inter-medium text-2xl mt-[45px]">
              {t("secondItemTitle")}
            </h3>
            <p className="mt-3 font-inter-medium text-base text-gray">
              {t("secondItemText")}
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]">
              <SecureIcon />
            </div>
            <h3 className="font-inter-medium text-2xl mt-[45px]">
              {t("thirdItemTitle")}
            </h3>
            <p className="mt-3 font-inter-medium text-base text-gray">
              {t("thirdItemText")}
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]">
              <FastIcon />
            </div>
            <h3 className="font-inter-medium text-2xl mt-[45px]">
              {t("fourthItemTitle")}
            </h3>
            <p className="mt-3 font-inter-medium text-base text-gray">
              {t("fourthItemText")}
            </p>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="w-[90px] h-[90px] bg-foreground rounded-[15px] flex justify-center items-center shadow-[inset_1.1778208017349243px_1.1778208017349243px_2px_0px_rgba(237,250,255,0.06)] shadow-[inset_-1px_-1px_2px_0px_rgba(255,255,255,0.50)]">
              <RealIcon />
            </div>
            <h3 className="font-inter-medium text-2xl mt-[45px]">
              {t("fifthItemTitle")}
            </h3>
            <p className="mt-3 font-inter-medium text-base text-gray">
              {t("fifthItemText")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
