import React, { useState } from "react";
import Image from "next/image";
import { BiCameraMovie } from "react-icons/bi";
import { FaCheck, FaPlus } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const Card = ({ title, image, id }) => {
  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;
  const [addToList, setAddToList] = useState(false);
  const { setSeriesId, setMovieId } = useContext(AppContext);
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div
      className="overflow-hidden cursor-pointer   h-70 w-50 hover:w-80 relative shrink-0 delay-500 duration-500"
      onClick={() => {
        if (pathName == "/") {
          setMovieId(id);
          router.push(`/${id}`);
        } else if (pathName == "/series") {
          setSeriesId(id);
          router.push(`/series/${id}`);
        } else {
          return;
        }
      }}
    >
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
      <div
        className="block *:opacity-0 hover:*:opacity-100 
     *:transition-opacity *:duration-500 *:delay-500 
     hover:bg-black/60 bg-transparent absolute top-0 left-0 h-full
     w-full"
      >
        <button
          title=""
          className=" active:scale-95 cursor-pointer flex items-center justify-center font-bold text-2xl rounded-lg "
          onClick={(e) => {
            e.stopPropagation();
            setAddToList(!addToList);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill={addToList ? "red" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=""
          >
            <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
          </svg>
        </button>
        <p className="text-2xl p-4 font-bold">{title}</p>
      </div>
    </div>
  );
};

export default Card;
