import React from "react";
import { Socials } from "@components/socials";

const Footer: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="text-center py-4 bg-gray-400 shadow-md pt-20 w-full grid grid-cols-2">
        <div>
          <div className="font-bold text-2xl py-6">Contact Us</div>
        </div>
        <div>
          <div className="font-bold text-2xl py-6">Follow Us</div>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
