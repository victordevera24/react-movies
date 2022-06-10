import MovieCard from './MovieCard'

export default function MovieIndex({movies}) {
    return (
        <main>
            <h1>Movie Index Page</h1>
            {movies.map((m, idx) => (
                <MovieCard movie={m} index={idx}/>
            ))}
        </main>
    );
}