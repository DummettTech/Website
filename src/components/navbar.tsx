"use client";

import React, { useState } from "react";
import logo from "../assets/logo.svg";

const navigation = [
  { name: "Contact Us", href: "#", current: false },
  { name: "Dark Ages", href: "#", current: false },
  { name: "Article", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 w-full z-10 shadow-md">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Logo" src={logo} className="h-12 w-auto" />
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
                      ? "bg-gray-900 text-white"
                      : "text-black-300 hover:bg-gray-700 hover:text-white text-lg",
                    "rounded-md px-3 py-2 font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
