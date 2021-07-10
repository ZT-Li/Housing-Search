import axios from 'axios';

let data = null
async function getData(url) {
    await axios.get(url).then(res => data = res.data)
    return data;
}

export default getData;