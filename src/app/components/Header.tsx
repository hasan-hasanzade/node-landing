'use client'

import React, { useState } from "react";
import LogoIcon from "@public/logo.svg";
import UsaIcon from "@public/header/usa-flag.svg";
import RuIcon from "@public/header/ru-flag.svg";
import ChevronIcon from "@public/header/chevron.svg";

const languageMap: Record<string, string> = {
  en: "En",
  ru: "Ru",
};



const Header: React.FC = () => {
  const [language, setLanguage] = useState("en");
  const [isLanguagePopupVisible, setLanguagePopupVisible] = useState(false);

  const toggleLanguagePopup = () => {
    setLanguagePopupVisible(!isLanguagePopupVisible);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setLanguagePopupVisible(false);
  };

  return (
    <header>
      <div className="container max-w-[1430px] mt-4 h-12">
        <div className="flex justify-between items-center h-full">
          <LogoIcon />
          <div className="flex gap-10 items-center h-full">
            <div
              className="relative h-full flex items-center w-[80px] hidden md:flex"
              onMouseEnter={() => setLanguagePopupVisible(true)}
              onMouseLeave={() => setLanguagePopupVisible(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer w-full">
                {language === "en" ? (
                  <UsaIcon width={16} height={13} />
                ) : (
                  <RuIcon width={16} height={16} />
                )}
                <span className="font-inter-medium text-sm">
                  {languageMap[language]}
                </span>
                <ChevronIcon width={16} height={16} />
              </div>
              <div
                className={`absolute left-[-8px] top-8 mt-2 w-[100px] bg-foreground shadow-lg rounded-[15px] z-10 transition-all duration-300 ${
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
            <a href="#" 
              target="_blanc" 
              className="border fonr-inter border-primary text-primary bg-background shadow-sm hover:bg-primary hover:text-white transform transition duration-200 active:scale-95 will-change-transform rounded-[5px] px-6 py-2">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
