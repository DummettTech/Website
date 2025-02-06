"use client";

import React, { useEffect, useState } from "react";
import logo from "@assets/logo.svg";
import LanguageToggle from "@components/languageToggle";
import { useTranslation } from "react-i18next";
import en from "@translations/nav/en.json";
import no from "@translations/nav/no.json";
import { getTranslationMap } from "@/lib/lang";
import Image from "@components/image";
import { Link, useLocation } from "react-router-dom";
import { joinClasses } from "@/lib/components";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  getTranslationMap(i18n, { en, no });

  const [navigation, setNavigation] = useState([
    {
      name: t("about"),
      href: "/about",
      current: location.pathname === "/about",
    },
    {
      name: t("contact"),
      href: "/contact",
      current: location.pathname === "/contact",
    },
    {
      name: t("event"),
      href: "/darkages",
      current: location.pathname === "/darkages",
    },
    { name: t("blog"), href: "#", current: false },
  ]);

  useEffect(() => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) => ({
        ...item,
        current: item.href === location.pathname,
      }))
    );
  }, [location.pathname]);

  useEffect(() => {
    setNavigation([
      {
        name: t("about"),
        href: "/about",
        current: location.pathname === "/about",
      },
      {
        name: t("contact"),
        href: "/contact",
        current: location.pathname === "/contact",
      },
      {
        name: t("event"),
        href: "/darkages",
        current: location.pathname === "/darkages",
      },
      { name: t("blog"), href: "#", current: false },
    ]);
  }, [i18n.language, t]);

  return (
    <header className="bg-gray-100 fixed top-0 w-full z-10 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only" />
            <Image
              src={logo}
              width="40px"
              height="40px"
              className="rounded"
              alt={t("homeButton")}
            ></Image>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={joinClasses(
                    item.current
                      ? "text-orange-t"
                      : "text-black hover:text-orange-t",
                    "px-3 py-2 font-medium text-lg font-semibold"
                  )}
                >
                  {item.name}
                </Link>
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
      <Link to="https://en.torucon.no/frivillig">
        <div className="bg-yellow-400 fixed w-full z-10 shadow-md py-2">
          <div className="items-center text-center">
            <p className="font-semibold">{t("volunteerBanner")}</p>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
