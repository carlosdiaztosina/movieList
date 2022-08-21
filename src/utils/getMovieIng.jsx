import placeHolderImg from "../default-placeholder.png";

export function getMovieImg(path) {
  return path
    ? "https://image.tmdb.org/t/p/w300" + path
    : placeHolderImg;
}
