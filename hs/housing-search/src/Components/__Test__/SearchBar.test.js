function SearchBar(props) {

    let input = "";
    function handleChange(e) {
        e.preventDefault();
        input = e.target.value;
    }

    function FetchUserInput(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className='search-form'>
                <input type='text' className='search-bar' placeholder='search a house' onChange={handleChange} value='sjsu' />
                <button className='search-btn' onClick={FetchUserInput}></button>
            </div>
        </>
    )
}

test('test', () => {

})