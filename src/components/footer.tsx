import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-4 bg-gray-400 shadow-md pt-20">
      <p>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
