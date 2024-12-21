import React from "react";
import LogoIcon from "@public/logo.svg";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-footer py-[40px] s:py-[50px]">
      <div className="container max-w-[1430px] flex justify-center s:justify-between items-center flex-wrap s:flex-nowrap gap-[25px]">
        <LogoIcon className='w-[116px] h-[32px]'/>
        <div className="font-inter-medium text-gray text-base text-center flex flex-wrap justify-center items-center s:flex-nowrap">
          <span>NodeRunner © 2024.</span><span>{t("rights")}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
