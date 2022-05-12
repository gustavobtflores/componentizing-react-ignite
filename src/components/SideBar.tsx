import { Button } from "./Button";
import { GenreResponseProps as GenreResponseTypes } from "../App";

interface SideBarProps {
  genres: GenreResponseTypes[];
  selectedGenreId: number;
  onGenreChange: (id: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  onGenreChange,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: GenreResponseTypes) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onGenreChange(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
