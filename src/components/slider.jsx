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
    }, 15000);
    return () => clearInterval(interval);
  }, [trending]);

  return (
    <div className=" h-fit w-full max-w-[2400px] relative " ref={banner}>
      <div className="w-full h-full max-h-220  overflow-hidden">
        <div className="w-full flex flex-col  justify-between text-white h-full absolute z-40 p-10  bg-[#ffffff00]">
          <div className="absolute bottom-10  max-w-180 p-4 flex flex-col gap-4">
            <h1 className=" text-5xl max-lg:text-3xl font-bold  py-1 rounded-lg w-fit">
              {trending[currentTrending]?.title
                ? trending[currentTrending]?.title
                : trending[currentTrending]?.name}
            </h1>
            <p>
              {trending[currentTrending] && trending[currentTrending].overview}
            </p>
            {trending[currentTrending] && (
              <div className="flex gap-2 items-center">
                <p
                  className={`${
                    trending[currentTrending]?.vote_average < 6 && "bg-red-500"
                  } 
                ${
                  trending[currentTrending]?.vote_average < 8 &&
                  trending[currentTrending]?.vote_average > 6 &&
                  "bg-yellow-500"
                }
                ${
                  trending[currentTrending]?.vote_average >= 8 && "bg-green-500"
                } border-1 rounded-full h-10 w-10 flex  items-center justify-center p-3 `}
                >
                  {trending[currentTrending]?.vote_average &&
                    (trending[currentTrending]?.vote_average).toFixed(1)}
                </p>
                <button
                  className="flex hover:[&>span]:w-full overflow-hidden items-center border-2 w-40 rounded-full cursor-pointer border-blue-500 justify-center text-white relative text-xl font-semibold p-2 gap-1"
                  onClick={() => {
                    if (currentPage && currentPage == "movies") {
                      setMovieId(trending[currentTrending].id);
                      router.push(`/${trending[currentTrending].id}`);
                    } else if (currentPage && currentPage == "series") {
                      setSeriesId(trending[currentTrending].id);
                      router.push(`/series/${trending[currentTrending].id}`);
                    }
                  }}
                >
                  <span className="absolute -z-1 duration-500 block left-0 top-0 h-full w-0 bg-blue-500">

                  </span>
                  More Info <FaArrowRightLong />
                </button>
              </div>
            )}
          </div>
        </div>
        {isTrendingLoading ? (
          <div className="w-full lg:h-160">
            <Loading />
          </div>
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
                  item.backdrop_path && (
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
                  )
                );
              })}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-950 to-transparent"></div>
    </div>
  );
}

export default Slider;
