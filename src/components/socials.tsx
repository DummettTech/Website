import React from "react";

import facebook from "@assets/social/facebook.svg";
import discord from "@assets/social/discord.svg";
import twitter from "@assets/social/twitter.svg";
import youtube from "@assets/social/youtube.svg";
import instagram from "@assets/social/instagram.svg";

interface IconProps {
  src: string;
  alt: string;
  href: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, href }) => {
  return (
    <a href={href}>
      <img
        src={src}
        alt={alt}
        width="35px"
        height="35px"
        className="filter invert"
      />
    </a>
  );
};

const socialMedia = [
  { src: discord, alt: "discord", href: "https://www.discord.com" },
  { src: youtube, alt: "youtube", href: "https://www.youtube.com" },
  { src: facebook, alt: "Facebook", href: "https://www.facebook.com" },
  { src: twitter, alt: "twitter", href: "https://www.twitter.com" },
  { src: instagram, alt: "instagram", href: "https://www.instagram.com" },
];

export const Socials: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 items-center">
      {socialMedia.map((social, index) => (
        <Icon key={index} {...social} />
      ))}
    </div>
  );
};
