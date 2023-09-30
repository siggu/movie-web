import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    console.log(json.data.movie);
  });
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
