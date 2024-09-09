import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

export default function weatherInfo(){

    const[weatherInfo, setWeatherInfo]=useState({
        city: "Kathmandu",
        temp: 25.4,
        humidity: 85,
        temp_min: 45,
        temp_max: 48,
        feels_like: 24.82,
        weather: "haze",
    });

    let updateInfo=(searchResult)=>{
        setWeatherInfo(searchResult);
    }

    return(
        <div>
            <h1>Search for the Weather</h1>
            <SearchBox searchRes={updateInfo}/>
            <br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}