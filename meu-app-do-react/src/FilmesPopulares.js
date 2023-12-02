import React, { useState, useEffect } from 'react';

function FilmesPopulares() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function fetchFilmesPopulares() {
      try {
        const apiKey = 'sua_api_key'; // Insira sua API key do TMDB aqui
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        const data = await response.json();
        setFilmes(data.results);
      } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
      }
    }

    fetchFilmesPopulares();
  }, []);

  return (
    <div>
      <h1>Filmes Populares</h1>
      <div className="filmes-lista">
        {filmes.map((filme) => (
          <div key={filme.id} className="filme">
            <h2>{filme.title}</h2>
            <p>{filme.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt={filme.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmesPopulares;
