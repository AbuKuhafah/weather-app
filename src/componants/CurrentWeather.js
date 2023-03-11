import { useState } from "react";
import React from 'react';
import './CurrentWeather.css';


function CurrentWeather({ data }) {

    let ifNull;
    if (data.main == null) {
        ifNull = true;
    }
    let imageID='01d';
    if(!ifNull){
        imageID = data.weather ? data.weather[0].icon : null;
    }
    
    return (
        <div className="weather-show" style={{ display: !ifNull ? "block" : "none" }} >
            <div className="current-date">
                <text >Current Weather</text>
            </div>
            <img src={require(`./images/${imageID}@2x.png`)} alt="Current Weather"/>
            <div >{data.main ? <h1>{data.main.temp}°C</h1> : null}</div>
            <text className="description">{data.weather ? <h1>{data.weather[0].description}</h1> : null}</text>
        </div>
    );
}

export default CurrentWeather;