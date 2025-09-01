"use client";
import { useContext, useEffect } from "react";
import AppContext from "@/contexts/contexts";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useGetMovieById from "@/hooks/movies/useGetMovieById";
import Loading from "@/components/loading";
import { FaPlay } from "react-icons/fa6";
const Page = () => {
  const { movieId } = useContext(AppContext);
  const router = useRouter();

  const baseImageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL;

  useEffect(() => {
    if (!movieId) {
      router.push("/");
    }
  }, []);
  const { data, loading, error } = useGetMovieById(movieId);

  useEffect(() => {
    if (data) console.log(data);
  }, [data]);

  return (
    <div>
      <div className=" w-full max-w-[2400px] overflow-hidden relative max-h-220">
        {loading ? (
          <Loading />
        ) : (
          <Image
            width={800}
            height={400}
            src={baseImageUrl + data.backdrop_path}
            alt={data.title}
            className="w-full"
          />
        )}
        <div className="w-full z-10 max-w-[1800px] flex justify-between items-center p-10 h-fit absolute bottom-20 text-white">
          <h1 className="w-120 font-bold text-7xl leading-20">
            {data && data.title}
          </h1>
          <div className="flex gap-5 ">
            <button className="w-36 cursor-pointer flex justify-center items-center gap-1 rounded-lg border-2 h-12 bg-blue-500 text-lg font-semibold">
              <FaPlay/>
              Watch now
            </button>
            <button className="w-35 cursor-pointer  rounded-lg border-2 border-blue-500 backdrop-blur-sm h-12 text-lg font-semibold">
              Preview
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 z-1 left-0 w-full h-1/3 bg-gradient-to-t from-gray-950 to-transparent"></div>
      </div>
    </div>
  );
};

export default Page;
