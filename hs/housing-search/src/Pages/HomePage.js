import { Link } from 'react-router-dom';
import styles from './HomePage.css'
import { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polygon } from 'google-maps-react';
import { GetCoord, Radar } from '../Components/index';
import axios from 'axios';

function HomePage(props) {
    const [coord, SetCoord] = useState();
    const [zm, SetZoom] = useState(14);

    const IconConfig = {
        url: "http://pngimg.com/uploads/circle/small/circle_PNG42.png",
        scaledSize: { width: 64, height: 64 },
    }

    let input = "";
    let radius = 0;

    function handleChange(e) {
        e.preventDefault();
        input = e.target.value;
    }

    function RangeSelectorChange(e) {
        radius = e.target.value * 1609;
    }

    async function FetchUserInput(e) {
        e.preventDefault();
        await GetCoord(input).then(res => {
            SetCoord(res)
            SetZoom(15)
            axios.get(`http://localhost:8000/googleplaces?lat=${res.lat}&lng=${res.lng}&radius=${radius}&type=resturant`).then(res => console.log(res))
        }).catch(err => console.log(err));
    }

    return (
        <>
            <div className='home-page'>
                <div>
                    <Radar></Radar>
                </div>
                <div className='search-block'>
                    <div className='header'>
                        <h1 className='header-name'>HOME RADAR</h1>
                    </div>
                    <div className='search-form'>
                        <input type='text' className='search-bar' placeholder='search a place' onChange={handleChange} />
                        <button className='search-btn' onClick={FetchUserInput}><div className='btn-highlight'></div></button>
                        <div className='selector-container'>
                            <select className='range-selector' onChange={RangeSelectorChange}>
                                <option className='range-option'>Range Selector: Miles</option>
                                <option className='range-option'>1</option>
                                <option className='range-option'>5</option>
                                <option className='range-option'>10</option>
                                <option className='range-option'>25</option>
                                <option className='range-option'>50</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="map"> <Map
                    google={props.google}
                    center={coord}
                    zoom={zm}
                    defaultZoom={15}
                    initialCenter={{ lat: 37.3351874, lng: -121.8810715 }}
                //onMouseover={() => SetZoom(zm + 1)}
                //onMouseout={() => SetZoom(zm - 1)}
                >
                    <Marker
                        position={coord}
                        icon={IconConfig}>
                    </Marker>
                </Map>
                </div>
                <div className='data-table'>
                </div>
            </div>
        </>
    )
}

const GM = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(HomePage)

export default GM;