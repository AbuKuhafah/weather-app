import SearchBar from './componants/SearchBar';
import React from 'react';
import CurrentWeather from './componants/CurrentWeather'
import {searchCity} from './api'
import { useState } from 'react';
import axios from "axios";
import ForcastWeather from './componants/ForcastWeather';
import './App.css';


function App(){
    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const [forcastData, setForcastData] = useState([])



    const searchCity = async (location) => {

        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},au&appid=6fd94e0b4f3d35d916b30cebde171bc6&units=metric`).then((response) => {
            setData(response.data);
        });        
        // console.log("the city weather for the location is: ", data);

        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location},au&appid=6fd94e0b4f3d35d916b30cebde171bc6&units=metric`).then((response) => {
            setForcastData(response.data.list);
        }); 
        // console.log("the city forcast weather for the location is: ", forcastData)
        
    }

    const serachCityForcast = async (location) => {
        await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${location},au&appid=6fd94e0b4f3d35d916b30cebde171bc6&units=metric`).then((response) => {
            setForcastData(response.data);
        });  
    }

    const handleSubmit = async (term) => {
        const result = await searchCity(term);
        setLocation(term);
    }

    
    return (
        <div className='app'>
            <SearchBar onSubmit={handleSubmit}/>
            <CurrentWeather data={data}/>
            <ForcastWeather forcastData={forcastData}/>
        </div>
    );
}

export default App;