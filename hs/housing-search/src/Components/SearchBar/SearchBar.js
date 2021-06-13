import styles from './SearchBar.css'

export function SearchBar() {
    return (
        <div className='search-block'>
            <form action='/' method='get'>
                <input type='text' className='search-bar' placeholder='search a house' />
                <button className='search-btn' type='submit'>search</button>
            </form>
        </div>
    )
}
