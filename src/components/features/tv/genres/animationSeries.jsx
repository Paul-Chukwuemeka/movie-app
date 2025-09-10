import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Roll from "@/components/ui/roll";

const AnimationSeries = () => {
  const { data, error } = useGetSeriesByGenre(16);

  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">
            Animation
          </h1>
         <Roll data={data}/>
        </>
      )}
    </div>
  );
};

export default AnimationSeries;
