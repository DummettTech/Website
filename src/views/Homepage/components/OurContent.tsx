import Image from "@/components/image";

export interface OurContentProps {
  heading: string;
  imageInfo: { src: string; alt: string };
  body: string;
}

export const OurContent: React.FC<OurContentProps> = ({
  heading,
  imageInfo,
  body,
}) => {
  return (
    <div className="p-4 shadow-lg transform transition-transform duration-500 hover:scale-105 bg-gray-200">
      <div className="p-4 font-semibold bg-orange-t">
        <h1>{heading}</h1>
      </div>
      <div className="py-2 flex gap-4">
        <div>
          <Image
            src={imageInfo.src}
            height="200px"
            width="200px"
            alt={imageInfo.alt}
          />
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};
