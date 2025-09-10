import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Roll from "@/components/ui/roll";

const ScifiSeries = () => {
  const { data, error } = useGetSeriesByGenre(10765);

  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">
            Sci-fi
          </h1>
         <Roll data={data}/>
        </>
      )}
    </div>
  );
};

export default ScifiSeries;
