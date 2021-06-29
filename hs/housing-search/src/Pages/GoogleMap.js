import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useState } from 'react';
import GetCoord from '../Components/GetCoord/GetCoord';

//show the map
function GoogleMapPage(props) {
    const [coord, SetCoord] = useState({ lat: 37.3351874, lng: -121.8810715 });
    const [address, SetAddress] = useState("SJSU");
    const [zoom, SetZoom] = useState(14);

    const MapStyle = { width: '400px', height: '400px' }

    function handleChange(e) {
        e.preventDefault();
        SetAddress(e.target.value);
    }

    function Submit(e) {
        e.preventDefault();
        GetCoord({ address: address }).then(res => {
            SetCoord(res);
        })
        SetZoom(14);
    }

    return (
        <>
            <div>
                <form >
                    <label>
                        Enter Address:
                        <input type='text' onChange={handleChange}></input>
                    </label>
                    <button onClick={Submit}>Search</button>
                </form>
            </div>
            <div> <Map
                google={props.google}
                zoom={zoom}
                style={MapStyle}
                center={coord}
            />
            </div>
        </>
    )
}

const GM = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(GoogleMapPage);

export default GM;