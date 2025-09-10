"use client";
import Roll from "@/components/ui/roll";
import useFetchPopularSeries from "@/hooks/series/usefetchPopularSeries";

const Popular = () => {
  const { data, error } = useFetchPopularSeries();

  return (
    <div className="w-full overflow-hidden">
      {!error && (
        <>
          <h1 className="text-left px-4 w-full text-xl font-bold">
            Popular series
          </h1>
          <Roll data={data}/>
        </>
      )}
    </div>
  );
};

export default Popular;
