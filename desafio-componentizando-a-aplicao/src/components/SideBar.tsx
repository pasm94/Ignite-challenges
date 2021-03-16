import { useEffect, useState } from 'react';
import { Button } from './Button';
import '../styles/sidebar.scss';

interface SideBarProps {
  genreId: number;
  genres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }[];
  handleSelectGenre(id: number): void;
}
export function SideBar({ genreId, genres, handleSelectGenre }: SideBarProps) {
  // Complete aqui
  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map(genre => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSelectGenre(genre.id)}
            selected={genreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
