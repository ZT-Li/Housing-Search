import { Map, GoogleApiWrapper } from 'google-maps-react';

function GoogleMapPage(props) {
    const defaultCenter = { lat: 37.334651, lng: -121.88065 }
    const MapStyle = { width: '400px', height: '400px' }
    return (
        <>
            <div>

            </div>
            <Map
                google={props.google}
                zoom={14}
                style={MapStyle}
                initialCenter={defaultCenter}></Map>
        </>
    )
}

const GM = GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAP_API_KEY
})(GoogleMapPage);

export default GM;