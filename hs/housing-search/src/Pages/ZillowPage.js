import axios from "axios";
import { SearchBar } from "../Components/SearchBar/SearchBar";



function ZillowPage() {
    const state = "CA";
    const city = "San Francisco";

    async function getData() {
        let config = { 'x-api-key': 'b1d85241-8ea5-42d5-88fc-99ff6b41b6b4' };
        await axios.get('https://api.mashvisor.com/v1.1/client/city/properties/${state}/${city}', {
            headers: config
        })
            .then(res => console.log(res.data))
            .catch(e => console.log(e))
    }

    getData()
    return (
        <>
            <h1>ZillowPage</h1>
            <SearchBar></SearchBar>
        </>
    )
}

export default ZillowPage;