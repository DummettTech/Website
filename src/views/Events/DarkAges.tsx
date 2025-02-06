import React from "react";
import "@/App.css";
import "@/index.css";
import { useTranslation } from "react-i18next";

const DarkAges: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <main data-testid="main-body" className="bg-gray-200 relative">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 bg-white lg:px-8 h-screen shadow-lg pt-10 divide-y-10">
          <div className="pt-10 text-2xl text-center">
            <a className="font-semibold">Apply now: </a>
            <a>We are looking for new organizers! </a>{" "}
            <a
              className="text-blue-800 underline"
              href="https://en.torucon.no/frivillig"
            >
              Read more about the positions and how to apply here!
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DarkAges;
