import { MoviesList } from "../components/MoviesList";
import { Search } from "../components/Search";
import { SliderTv } from "../components/SliderTv";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  
  const query = useQuery();
  const search = query.get("search");

  const debounce = useDebounce(search, 500)
  return (
    <div>
      <Search />
      <SliderTv/>
      <MoviesList key={debounce} search={debounce}/>
    </div>
  );
}
