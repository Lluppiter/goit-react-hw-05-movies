import { useFetchMovie } from 'hooks/useFetchForCast';

const MovieCast = () => {
  const movie = useFetchMovie();
  return (
    movie && (
      <>
        {movie.data.cast.length !== 0 ? (
          <ul>
            {movie.data.cast.map(actor => (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : 'https://cdn-icons-png.flaticon.com/512/53/53106.png'
                  }
                  alt={actor.original_name}
                  width="120px"
                  height="180px"
                />
                <h2>{actor.name}</h2>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Don't Find Actors</p>
        )}
      </>
    )
  );
};
export { MovieCast };
