
export function SearchBar(props) {

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
            <div className='search-block'>
                <div className='header'>
                    <h1 className='header-name'>HOME RADAR</h1>
                </div>
                <div className='search-form'>
                    <input type='text' className='search-bar' placeholder='search a house' onChange={handleChange} />
                    <button className='search-btn' onClick={FetchUserInput}></button>
                </div>
            </div>
        </>
    )
}