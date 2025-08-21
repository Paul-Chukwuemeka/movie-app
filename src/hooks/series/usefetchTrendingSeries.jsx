import tmdb from "@/api/tmdb";

const useFetchTrendingSeries = async () => {
  try {
    const res = await tmdb.get("/trending/tv/day");
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default useFetchTrendingSeries;
