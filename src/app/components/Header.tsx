'use client';

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import LogoIcon from "@public/logo.svg";
import UsaIcon from "@public/header/usa-flag.svg";
import RuIcon from "@public/header/ru-flag.svg";
import ChevronIcon from "@public/header/chevron.svg";
import { useTranslations } from "next-intl";

const languageMap: Record<string, string> = {
  en: "En",
  ru: "Ru",
};

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLanguagePopupVisible, setLanguagePopupVisible] = useState(false);

  const currentLocale = pathname.startsWith("/ru") ? "ru" : "en";

  const handleLanguageChange = (newLanguage: string) => {
    setLanguagePopupVisible(false);

    const newPath = pathname.replace(`/${currentLocale}`, `/${newLanguage}`);
    router.push(newPath);
  };

  const t = useTranslations('Header');

  return (
    <header>
      <div className="container max-w-[1430px] mt-4 h-12">
        <div className="flex justify-between items-center h-full">
          <LogoIcon className="w-[99px] md:w-[116px] h-[28px] md:h-[32px]" />
          <div className="flex gap-2 md:gap-10 items-center h-full">
            <div
              className="relative h-full flex items-center w-[60px] md:w-[80px] flex"
              onMouseEnter={() => setLanguagePopupVisible(true)}
              onMouseLeave={() => setLanguagePopupVisible(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer w-full">
                {currentLocale === "en" ? (
                  <UsaIcon width={16} height={13} />
                ) : (
                  <RuIcon width={16} height={16} />
                )}
                <span className="font-inter-medium text-sm">
                  {languageMap[currentLocale]}
                </span>
                <ChevronIcon width={16} height={16} />
              </div>
              <div
                className={`absolute left-[-8px] top-10 md:top-8 mt-2 w-[100px] bg-foreground shadow-lg rounded-[15px] z-10 transition-all duration-300 ${
                  isLanguagePopupVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-primary rounded-t-[15px]"
                  onClick={() => handleLanguageChange("en")}
                >
                  <UsaIcon width={16} height={13} />
                  <span className="text-sm font-inter">English</span>
                </div>
                <div
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-primary rounded-b-[15px]"
                  onClick={() => handleLanguageChange("ru")}
                >
                  <RuIcon width={16} height={16} />
                  <span className="text-sm font-inter">Russian</span>
                </div>
              </div>
            </div>
            <a
              href="#"
              target="_blanc"
              className="border font-inter border-primary text-primary bg-background shadow-sm hover:bg-primary hover:text-white transform transition duration-200 active:scale-95 will-change-transform rounded-[5px] px-[16px] md:px-3 md:px-6  py-[5px] py-[7.5px] md:py-1.5 text-sm md:text-base"
            >
              {t("button")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
