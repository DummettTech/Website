import React, { useState } from "react";
import "@/App.css";
import "@/index.css";
import { useTranslation } from "react-i18next";

const ContactUs: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <main data-testid="main-body" className="bg-gray-200 relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-white lg:px-8 h-screen shadow-lg pt-10 divide-y-10">
          Contact Us
        </div>
      </main>
    </div>
  );
};

export default ContactUs;
