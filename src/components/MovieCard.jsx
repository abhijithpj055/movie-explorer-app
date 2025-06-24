import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100">
      <img src={movie.image?.medium} alt={movie.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.name}</h5>
        <p className="card-text">{movie.genres?.join(', ')}</p>
        <Link to={`/movie/${movie.id}`} className="btn btn-primary">
          View Movie
        </Link>
      </div>
    </div>
  </div>
);

export default MovieCard;
