"use client";

import { useState } from "react";

export default function Image({
  src,
  alt = "image",
  className = "",
  dataTestId = "image",
  width = "100%",
  height = "400px",
}: {
  src: string;
  alt?: string;
  className?: string;
  dataTestId?: string;
  width?: string;
  height?: string;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} style={{ width, height, overflow: "hidden" }}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-300"
          style={{ width: "100%", height: "100%" }}
        ></div>
      )}
      <img
        data-testid={dataTestId}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"}`}
        style={{
          transition: "opacity 0.5s ease-in-out",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
