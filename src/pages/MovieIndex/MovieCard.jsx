import { Link } from 'react-router-dom';

export default function MovieCard({movie, index}){
    return(
        <div>
            <Link to={'/movie/' + index}>
            <img src={movie.poster_path}></img>
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
            </Link>
            <hr />
        </div>
    )
}