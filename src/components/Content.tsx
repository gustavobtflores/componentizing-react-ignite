import { MovieCard } from "./MovieCard";
import { GenreResponseProps as GenreResponseTypes } from "../App";
import { MovieProps as MovieTypes } from "../App";

interface ContentProps {
  selectedGenre: GenreResponseTypes;
  movies: MovieTypes[];
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
