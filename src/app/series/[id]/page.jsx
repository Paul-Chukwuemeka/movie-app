"use client";
import { useContext, useEffect } from "react";
import AppContext from "@/contexts/contexts";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { FaPlay } from "react-icons/fa6";
import useGetTvById from "@/hooks/series/useGetTvById";

const Page = () => {
  const { seriesId } = useContext(AppContext);
  const { id: paramId } = useParams();
  const router = useRouter();
  const id = seriesId ? seriesId : paramId;

  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_SLIDER;
  const castImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL_CAST;

  useEffect(() => {
    if (!id) {
      router.push("/series");
    }
  }, []);
  const { data, error } = useGetTvById(id);

  console.log(data);

  return (
    <div>
      <div>
        <div className=" w-full max-w-[2400px] overflow-hidden relative max-h-220">
          {data && (
            <Image
              width={800}
              height={400}
              src={baseImageUrl + data.backdrop_path}
              alt={data.name}
              className="w-full"
            />
          )}
          <div className="w-full z-10 max-w-[1800px] max-md:flex-col max-md:items-start max-md:gap-4 flex justify-between items-center p-10 h-fit absolute bottom-20 max-md:bottom-0 text-white">
            <h1 className="min-w-120 max-sm:w-4/6 max-lg:text-4xl max-sm:text-xl  max-sm:leading-5 max-lg:leading-12 font-bold text-5xl leading-20">
              {data && data.name}
            </h1>
            <div className="flex lg:flex-row gap-5 md:flex-col ">
              <button className="w-36 max-sm:w-28 max-sm:text-sm cursor-pointer flex justify-center items-center gap-1 rounded-lg border-2 h-12 bg-blue-500 text-lg font-semibold">
                <FaPlay />
                Watch now
              </button>
              <button className="w-36 cursor-pointer max-sm:w-28 max-sm:text-sm rounded-lg border-2 border-blue-500 bg-gray-900/10 h-12 text-lg font-semibold">
                Preview
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 z-1 left-0 w-full h-1/3 bg-gradient-to-t from-gray-950 to-transparent"></div>
        </div>
        <div className="flex flex-col pb-10 gap-5 px-8">
          {data && data.overview && (
            <div className=" flex flex-col gap-2 ">
              <h2 className="text-4xl max-md:text-xl  max-lg:text-3xl font-bold">
                Synopsis
              </h2>
              <p className="text-lg max-md:text-sm  max-lg:leading-6 max-md:leading-5 leading-7">
                {data && data.overview}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl max-md:text-xl max-lg:text-3xl font-bold">
              Genre
            </h2>
            <ul className="flex gap-2">
              {data &&
                data.genres.map((genre, i) => {
                  return (
                    <li
                      key={i}
                      className="rounded-sm min-w-20 w-fit p-2 font-medium bg-blue-500 items-center justify-center h-8 flex"
                    >
                      {genre.name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl max-md:text-xl max-lg:text-3xl font-bold">
              Cast
            </h2>
            <div className="flex gap-6 items-center snap-x snap-mandatory w-full movies overflow-x-scroll">
              {data &&
                data.credits?.cast?.map((item, i) => {
                  console.log(item);
                  return (
                    <div key={i} className="flex shrink-0 snap-start flex-col items-center gap-3">
                      <Image
                        width={100}
                        height={100}
                        src={castImageUrl + item.profile_path}
                        alt={item.name}
                        className=" w-40 max-md:w-30"
                      />
                      <div className="text-center text-lg max-md:text-sm font-semibold">
                        <p>{item.name}</p>
                        <p className="text-gray-500">{item.character}</p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
