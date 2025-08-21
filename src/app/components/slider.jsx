import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import Image from "next/image";
import AppContext from "@/contexts/contexts";
import { useContext } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

function Slider({ trending, isTrendingLoading }) {
  const banner = useRef(null);
  const router = useRouter();
  const { setSeriesId, setMovieId, currentPage } = useContext(AppContext);
  const [currentTrending, setCurrentTrending] = useState(0);

  useEffect(() => {
    if (trending.length == 0) return;

    const interval = setInterval(() => {
      setCurrentTrending((prev) =>
        prev >= trending.length - 1 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [trending]);

  return (
    <div
      className=" h-fit w-full max-h-220 max-w-[2400px] relative  overflow-hidden"
      ref={banner}
    >
      <div className="w-full flex flex-col  justify-between text-white h-full absolute z-40 p-10  bg-[#ffffff00]">
        <div className="absolute bottom-10 backdrop-blur-xs bg-gray-900/10 max-w-180 p-4 flex flex-col gap-4">
          <h1 className=" text-6xl max-lg:text-4xl font-bold   py-1 rounded-lg w-fit">
            {trending[currentTrending]?.title
              ? trending[currentTrending]?.title
              : trending[currentTrending]?.name}
          </h1>
          <p>{trending[currentTrending]?.overview}</p>
          <button
            className="flex items-center border-2 w-40 rounded-full cursor-pointer border-blue-500 justify-center text-white text-xl  p-2 gap-1"
            onClick={() => {
              if (currentPage && currentPage == "movie") {
                setMovieId(trending[currentTrending].id);
                router.push(`/${trending[currentTrending].id}`);
              } else if (currentPage && currentPage == "series") {
                setSeriesId(trending[currentTrending].id);
                router.push(`/series/${trending[currentTrending].id}`);
              }
            }}
          >
            More Info <FaArrowRightLong />
          </button>
        </div>
      </div>
      {isTrendingLoading ? (
        <>
          <Loading />
        </>
      ) : (
        <div
          className={`flex *:shrink-0 h-fit w-fit  
              ${currentTrending == 0 ? "duration-0" : "duration-300"} 
            `}
          style={{
            transform: `translateX(-${
              currentTrending *
              (banner.current?.clientWidth ? banner.current.clientWidth : 0)
            }px)`,
          }}
        >
          {trending &&
            trending.map((item, i) => {
              return (
                <Image
                  key={i}
                  src={baseImageUrl + item.backdrop_path}
                  width={1200}
                  height={560}
                  priority
                  alt=""
                  aria-label=""
                  className="w-full h-auto  object-fit "
                />
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Slider;
