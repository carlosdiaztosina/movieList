import styles from "./MovieCard.module.scss";
import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieIng";
import {FaStar} from "react-icons/fa";

export function MovieCard({ movie }) {
  const imgUrl = getMovieImg(movie.poster_path);
  return (
    <li className={styles.movieCard}>
      <Link to={"/movie/" + movie.id}>
        <img
          className={styles.movieImg}
          width={230}
          height={345}
          src={imgUrl}
          alt={movie.title}
        />
        <h3 className={styles.movieVote}>
          {movie.vote_average}
          <span>
            <FaStar className={styles.starVote} color="yellow"/>
          </span>
        </h3>
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
