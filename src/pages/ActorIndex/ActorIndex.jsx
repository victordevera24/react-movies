import ActorCard from './ActorCard'

export default function ActorIndex({movies}) {
    return (
        <main>
            <h1>Actor Index Page</h1>
            <ActorCard movies={movies}/>
        </main>
    );
}