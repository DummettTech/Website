import Image from "@/components/image";
import { Link } from "react-router-dom";

export interface OurContentProps {
  heading: string;
  imageInfo: { src: string; alt: string };
  body: string;
  to: string;
}

export const OurContent: React.FC<OurContentProps> = ({
  heading,
  imageInfo,
  body,
  to,
}) => {
  return (
    <Link to={to}>
      <div className="p-4 shadow-lg transform transition-transform duration-500 hover:scale-105 bg-gray-200">
        <div className="p-4 bg-orange-t">
          <h1 className="font-bold text-xl">{heading}</h1>
        </div>
        <div className="py-4 flex gap-4">
          <div>
            <Image
              src={imageInfo.src}
              height="200px"
              width="200px"
              alt={imageInfo.alt}
            />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-center">{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
