"use client";

import React, { useState } from "react";
import logo from "@assets/logo.svg";
import LanguageToggle from "@components/languageToggle";
import { useTranslation } from "react-i18next";
import en from "@translations/nav/en.json";
import no from "@translations/nav/no.json";
import { getTranslationMap } from "@/lib/lang";
import Image from "@components/image";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const messages = getTranslationMap(i18n, { en, no });

  const navigation = [
    { name: t("about"), href: "about", current: false },
    { name: t("contact"), href: "contact", current: false },
    { name: t("event"), href: "/darkages", current: false },
    { name: t("blog"), href: "#", current: false },
  ];

  return (
    <header className="bg-gray-100 fixed top-0 w-full z-10 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={logo}
              width="40px"
              height="40px"
              className="rounded"
            ></Image>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-orange-t text-white"
                      : "text-black hover:text-orange-t text-lg",
                    "px-3 py-2 font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <button className="bg-orange-t text-white rounded-xl px-6 py-3 text-lg font-semibold">
            {t("buyTickets")}
          </button>
        </div>
        <div className="px-2">
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
