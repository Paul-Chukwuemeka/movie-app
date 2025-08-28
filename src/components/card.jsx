import React from "react";
import Image from "next/image";
import { BiCameraMovie } from "react-icons/bi";

const Card = ({ title, image, id }) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
  return (
    <div className="overflow-hidden cursor-pointer  du h-70 w-50 hover:w-80 relative shrink-0 delay-500 duration-500">
      <div className="duration-500 cursor-pointer  ">
        {image ? (
          <Image
            width={200}
            height={240}
            src={baseImageUrl + image}
            alt={title}
            priority
            aria-label={title}
            className="w-full h-full"
          />
        ) : (
          <div className=" h-70 w-full flex-col flex items-center justify-center bg-gray-800">
            <h3 className="font-bold text-xl text-center">{title}</h3>
            <BiCameraMovie className="text-8xl text-gray-400" />
          </div>
        )}
      </div>
      <span
        className="block *:opacity-0 hover:*:opacity-100 
     *:transition-opacity *:duration-500 *:delay-500 
     hover:bg-black/50 bg-transparent absolute top-0 left-0 h-full
     w-full"
      >
        <p>{title}</p>
      </span>
    </div>
  );
};

export default Card;
