import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useState, useEffect } from 'react';
import Geocode from 'react-geocode';

//show the map
function GoogleMapPage(props) {
    const [coord, SetCoord] = useState({ lat: 37.3351874, lng: -121.8810715 });
    const [address, SetAddress] = useState("SJSU");
    const [zoom, SetZoom] = useState(14);

    const MapStyle = { width: '400px', height: '400px' }

    //convert address to geocode
    Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    function GetCoord(Adrs) {
        Geocode.fromAddress(Adrs).then(
            (response) => {
                SetCoord(response.results[0].geometry.location);
            },
            (error) => {
                console.error(error);
            }
        );
    }

    function handleChange(e) {
        e.preventDefault();
        SetAddress(e.target.value);
    }

    function Submit(e) {
        e.preventDefault();
        GetCoord(address);
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