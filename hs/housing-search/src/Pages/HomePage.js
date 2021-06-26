import { SearchBar } from '../Components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { GM } from './index';
const HomePage = () => {
    return (
        <>
            <SearchBar></SearchBar>
            <Link to='/gm'>google map page</Link>
        </>
    )
}

export default HomePage;