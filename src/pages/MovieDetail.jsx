import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!movie) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{movie.name}</h2>
      <img src={movie.image?.original} alt={movie.name} className="img-fluid mb-3" />
      <div dangerouslySetInnerHTML={{ __html: movie.summary }} />
      <p><strong>Genres:</strong> {movie.genres?.join(', ')}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Rating:</strong> {movie.rating?.average || 'N/A'}</p>
    </div>
  );
};

export default MovieDetail;
