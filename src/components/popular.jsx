import Loading from "./loading";
import useFetchPopular from "@/hooks/movies/useFetchPopularMovies";
import Card from "./card";


const Popular = () => {
  const { data, loading, error } = useFetchPopular();

  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-left px-4 w-full text-xl font-bold">
        Popular Movies
      </h1>
      <div className="w-full movies flex gap-4 overflow-y-hidden overflow-x-scroll p-4 py-1 ">
        {loading
          ? Array(10)
              .fill("")
              .map((_, i) => {
                return (
                  <div
                    key={i}
                    className="duration-250 cursor-pointer shrink-0 h-70 w-50"
                  >
                    <Loading />
                  </div>
                );
              })
          : data &&
            data.map((item, i) => {
              return (
                <Card
                  key={i}
                  title={item.title}
                  image={item.poster_path}
                  id={item.id}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Popular;
