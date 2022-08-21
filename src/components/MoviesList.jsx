import { MovieCard } from "./MovieCard";
import styles from "./MoviesList.module.scss";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../components/Spinner";
import { Empty } from "./Empty";

export function MoviesList({search}) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIslLoading] = useState(true);

  useEffect(() => {
    setIslLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIslLoading(false);
    });
  }, [search, page]);
  if(!isLoading && movies.length === 0){
    return <Empty/>;
  }

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => setPage((prevPage)=> prevPage + 1)} //actualizacion de estado con setpage para cargar las paginas siguientes
      hasMore={hasMore}
      loader={<Spinner/>}
    >
      <ul className={styles.moviesList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
