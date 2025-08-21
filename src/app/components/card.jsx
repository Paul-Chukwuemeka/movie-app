import React from "react";
import Image from "next/image";

const Card = ({ title, image, id }) => {
  return (
    <div className="w-50 hover:scale-105">
      <div className=" duration-250 cursor-pointer  shrink-0 h-70 w-50">
        <Image
          width={200}
          height={240}
          src={image}
          alt={title}
          priority
          aria-label={title}
          className="w-full h-auto object-cover"
        />
      </div>
      <p className="w-full p-1 font-bold backdrop-blur-2xl text-lg truncate">
        {title}
      </p>
    </div>
  );
};

export default Card;
