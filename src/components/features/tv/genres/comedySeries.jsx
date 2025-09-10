import useGetSeriesByGenre from "@/hooks/series/useGetSeriesByGenre";
import Roll from "@/components/ui/roll";

const ComedySeries = () => {
  const { data, error } = useGetSeriesByGenre(35);
  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left w-full px-4 py-2 text-3xl font-bold">
            Comedy
          </h1>
          <Roll data={data} />
        </>
      )}
    </div>
  );
};

export default ComedySeries;
