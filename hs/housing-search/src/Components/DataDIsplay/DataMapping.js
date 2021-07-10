import axios from "axios";
import { useState } from 'react';
import getData from "./FetchData";

const url = "http://localhost:8000/googleplaces/";

const DataMapping = () => {
    const [data, SetData] = useState();



    async function showData(e) {
        e.preventDefault();
        getData(url).then(res => {
            SetData(res)
        }).then(console.log(data))
    }


    return (
        <>
            <div>
                <button onClick={showData}>show data</button>
            </div>
        </>
    )
}
export default DataMapping;