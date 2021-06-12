import React from 'react';
import styles from './SearchBar.css'

export function SearchBar() {
    return (
        <form action='/' method='get'>
            <input type='text' className='search-bar' placeholder='search a house' style={styles.SearchBar} />
            <button className='search-btn' type='submit'>search</button>
        </form>
    )
}