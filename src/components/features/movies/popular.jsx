import useFetchPopular from "@/hooks/movies/useFetchPopularMovies";
import Roll from "@/components/ui/roll";


const Popular = () => {
  const { data, error } = useFetchPopular();

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left px-4 w-full text-xl font-bold">
        Popular Movies
      </h1>
      <Roll data={data}/>
    </div>
  );
};

export default Popular;
