import React from "react";
import Image from "next/image";
import { BiCameraMovie } from "react-icons/bi";

const Card = ({ title, image, id }) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
  return (
    <div className="h-70 w-50 hover:w-80 shrink-0 delay-500 duration-500">
      <div className=" duration-250 cursor-pointer  ">
        {image ? (
          <Image
            width={200}
            height={240}
            src={baseImageUrl + image}
            alt={title}
            priority
            aria-label={title}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800">
            <BiCameraMovie className="text-4xl text-gray-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
