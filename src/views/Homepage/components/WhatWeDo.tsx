import { OurContent } from "./OurContent";

import tempImage from "@assets/hero.png";

const sampleText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const WhatWeDo: React.FC = () => {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-4">
      <OurContent
        heading="Program"
        imageInfo={{ src: tempImage, alt: "temp" }}
        body={sampleText}
      ></OurContent>
      <OurContent
        heading="Guest"
        imageInfo={{ src: tempImage, alt: "temp" }}
        body={sampleText}
      ></OurContent>
      <OurContent
        heading="Stand"
        imageInfo={{ src: tempImage, alt: "temp" }}
        body={sampleText}
      ></OurContent>
      <OurContent
        heading="Articles"
        imageInfo={{ src: tempImage, alt: "temp" }}
        body={sampleText}
      ></OurContent>
    </div>
  );
};
