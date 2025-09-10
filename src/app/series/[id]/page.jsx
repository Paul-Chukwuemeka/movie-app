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

  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

  useEffect(() => {
    if (!id) {
      router.push("/series");
    }
  }, []);
  const { data, error } = useGetTvById(id);

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
          <div className="w-full z-10 max-w-[1800px] max-md:flex-col max-md:items-start max-md:gap-4 flex justify-between items-center p-10 h-fit absolute bottom-20 text-white">
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
        {data && data.overview && (
          <div className="p-2">
            <h2 className="text-5xl leading-20 font-bold">Synopsis</h2>
            <p className="text-xl leading-7">{data && data.overview}</p>
          </div>
        )}
        <div>
          <h2 className="text-5xl leading-14  font-bold">Genres</h2>
          <ul className="flex gap-2 p-2">
            {data &&
              data.genres.map((genre, i) => {
                return (
                  <li
                    key={i}
                    className="rounded-xl min-w-20 w-fit p-2 font-semibold bg-blue-500  items-center justify-center h-8 flex"
                  >
                    {genre.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
