import useGetMoviesByGenre from "@/hooks/movies/useGetMoviesByGenre";
import Roll from "@/components/ui/roll";
const ActionMovies = () => {
  const { data, error } = useGetMoviesByGenre(28);
  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">Action</h1>
      <div className="w-full overflow-y-hidden movies flex gap-4 overflow-x-scroll p-4 py-1 ">
        <Roll data={data} />
      </div>
    </div>
  );
};

export default ActionMovies;
