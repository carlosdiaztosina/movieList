import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Empty } from "./Empty";
import styles from "./SliderTv.module.scss";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { getMovieImg } from "../utils/getMovieIng";

export function SliderTv() {
  const [series, setMovies] = useState([]);
  const [isLoading, setIslLoading] = useState(true);

  useEffect(() => {
    setIslLoading(true);
    const searchUrl = "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies((prevSeries) => prevSeries.concat(data.results));
      setIslLoading(false);
    });
  }, []);

  if (!isLoading && series.length === 0) {
    return <Empty />;
  }

  return (
    <div className={styles.container}>
      <AwesomeSlider>
        {series.map((element,index)=> (
          <div key={element.id}>
            <h3 className={styles.text}>
              Top <span>{index + 1}</span> Movies
            </h3>
            <img
              width={230}
              height={330}
              src={getMovieImg(element.poster_path)}
              alt={element.title}
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
}
