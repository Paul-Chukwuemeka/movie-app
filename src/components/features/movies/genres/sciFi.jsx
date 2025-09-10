import useGetMoviesByGenre from "@/hooks/movies/useGetMoviesByGenre";
import Roll from "@/components/ui/roll";

const ScifiMovies = () => {
  const {data,error} =  useGetMoviesByGenre(878);

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">Sci-fi</h1>
      <Roll data={data}/>
    </div>
  );
};

export default ScifiMovies;
