import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Roll from "@/components/ui/roll";
const ActionSeries = () => {
  const { data, error } = useGetSeriesByGenre(10759);

  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">
            Action
          </h1>
         <Roll data={data}/>
        </>
      )}
    </div>
  );
};

export default ActionSeries;
