import tmdb from "@/api/tmdb";

const useGetSeriesByGenre = async (id) => {
  try {
    const res = await tmdb.get("/discover/tv", {
      params: {
        with_genres: id,
      },
    });
    return res.data.results;
  } catch (error) {
    return error;
  }
};

export default useGetSeriesByGenre;
