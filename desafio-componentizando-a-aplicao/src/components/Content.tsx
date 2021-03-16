import '../styles/content.scss';
import { MovieCard } from './MovieCard';

interface ContentProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
  movies: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }[];
}
export function Content({ genre, movies }: ContentProps) {
  // Complete aqui

  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {genre.title}</span>
        </span>
      </header>

      <main>
        <div className='movies-list'>
          {movies.map(movie => (
            <MovieCard
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
