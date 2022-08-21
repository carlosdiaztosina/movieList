import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.scss" ;
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function App() {
  return (
    <Router>
      <header>
        <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetails/>}></Route>
        </Routes>
      </main>
    </Router>
  );
}
