import React from 'react';
import './ForcastWeather.css';

function ForcastWeather({ forcastData }) {

    let imageID = '01d';
    let today = new Date();
    let dd = today.getDate();

    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-'+mm+'-'+dd;

    const forcastedDates = forcastData.map((forcastDate) => {
        
        const dateChecker = forcastDate.dt_txt

        
        if (dateChecker.split(' ')[0] === today) {
            console.log('returning  with date: ' + today)

            imageID = forcastDate.weather ? forcastDate.weather[0].icon : null;
            console.log('returningweather in icon 2: ' + imageID)
            return (
                <div className='weather' >
                    <div className='forcast-date'>
                        <text >{forcastDate.dt_txt}</text>
                    </div>
                    <img src={require(`./images/${imageID}@2x.png`)} alt="Forcasted Image" />
                    <div key={forcastDate.id}>{forcastDate.main ? <h1>{forcastDate.main.temp}°C</h1> : null}</div>
                    <text className="description">{forcastDate.weather ? <h1>{forcastDate.weather[0].description}</h1> : null}</text>

                </div>
            );
        }

    });
    
    return (

        <div>
            <div className='weather-list'>{forcastedDates}</div>
        </div>

    );


}

export default ForcastWeather;

// return(
//     <div> the forcast data is
//         {forcastData.main ? <h1>{forcastData.main.temp}</h1> : null}
//     </div>
// );

// 6.31°C
// 7.49
// 9.88
// 8
// 7.29
// 7.9