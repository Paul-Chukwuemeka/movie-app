import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Card from "@/components/ui/card";

const AnimationSeries = () => {
  const { data, error } = useGetSeriesByGenre(16);

  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">
            Animation
          </h1>
          <div className="w-full overflow-y-hidden movies flex gap-4 overflow-x-scroll p-4 py-1 ">
            {data &&
              data.map((item, i) => {
                return (
                  <Card
                    key={i}
                    title={item.name}
                    image={item.poster_path}
                    id={item.id}
                  />
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default AnimationSeries;
