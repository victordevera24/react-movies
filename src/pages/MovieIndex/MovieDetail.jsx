import { useParams } from 'react-router-dom';
import ActorList from "../ActorIndex/ActorList"

export default function MovieDetail({movies}){
    const { id } = useParams();
    let movie = movies[id]
    return(
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <img src={movie.poster_path}></img>
            <h3>Cast</h3>
            <ActorList cast={movie.cast}/>
        </div>
    )
}