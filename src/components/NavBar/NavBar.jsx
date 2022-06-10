import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <Link to="/movies">Movie List</Link>
            &nbsp; | &nbsp;
            <Link to="/actors">Actor List</Link>
        </nav>
    );
}