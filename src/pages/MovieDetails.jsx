import styles from "./MovieDetails.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getMovieImg } from "../utils/getMovieIng";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIslLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setIslLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIslLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!movie) {
    return null;
  }

  const dateRelease = new Date(movie.release_date).toLocaleDateString();

  const imgUrl = getMovieImg(movie.poster_path);
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Tittle: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Release Date: </strong>
          {dateRelease}
        </p>
        <p>
          <strong>Description: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
