import React from "react";

import { joinClasses, useWindowSize } from "@/lib/components";
import { OurContent } from "./OurContent";

import stands from "@assets/homepage/stands.png";
import article from "@assets/homepage/article.png";
import guests from "@assets/homepage/guests.png";
import program from "@assets/homepage/program.png";

const sampleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const WhatWeDo: React.FC = () => {
  const { width } = useWindowSize();

  return (
    <div
      className={joinClasses(
        width <= 800 ? "grid-cols-1" : "grid-cols-2",
        "grid gap-4"
      )}
    >
      <OurContent
        heading="Program"
        imageInfo={{ src: program, alt: "temp" }}
        body="While this years program is yet to be released... We can promise you that it will be filled with exciting events! Panels, workshops, Q&A sessions and more! Stay tuned for more information! 
        Want to be apart of Torucon this year? Contact Us to find out how!"
        to="/"
      ></OurContent>
      <OurContent
        heading="Guests"
        imageInfo={{ src: guests, alt: "temp" }}
        body="We have a variety of guests from all over the world. We have experts in their craft, teaching at panels and workshops. We also have special guests participating in Q&A sessions and autograph signings!"
        to="/"
      ></OurContent>
      <OurContent
        heading="Vendors"
        imageInfo={{ src: stands, alt: "temp" }}
        body="We have a variety of stands for you to enjoy. From food to merchandise, we have it all! Art, plushes, trinkets and treats await you!"
        to="/"
      ></OurContent>
      <OurContent
        heading="Articles"
        imageInfo={{ src: article, alt: "temp" }}
        body={sampleText}
        to="/"
      ></OurContent>
    </div>
  );
};
