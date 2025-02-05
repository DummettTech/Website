import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="text-center py-4 bg-gray-400 shadow-md pt-20 w-full mt-auto">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
