import styles from './SearchBar.css'

export function SearchBar() {
    return (
        <div className='search-block'>
            <div className='header'>
                <h1 className='header-name'>HOME RADAR</h1>
            </div>
            <form action='/' method='get' className='search-form'>
                <input type='text' className='search-bar' placeholder='search a house' />
                <button className='search-btn' type='submit'></button>
            </form>
        </div>
    )
}

