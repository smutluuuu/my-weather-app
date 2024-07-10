"use client";
import React, { useState } from 'react'
import WeatherTable from './WeatherTable';
import { WeatherReport } from '@/model/WeatherReport';
import weatherLogo from '@/public/vercel.svg';

const Weather = () => {
    const [weatherReport, setWeatherReport] = useState<WeatherReport[]>([]);
    const [location, setLocation] = useState('');

    async function sendLocation() {
        try {
            const response = await fetch(`http://localhost:3000/api/weather?location=${location}`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }
            const data = await response.json();
            setWeatherReport(prevReports => [...prevReports, data]);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }
    return (
        <div className='m-auto'>
            <div>
                <img src="weathericon.png" alt="mizdo" />
            </div>
            <WeatherTable weatherReport={weatherReport} />
            <div className='items-center content-center flex'>
                <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button onClick={sendLocation} className="btn btn-active btn-primary">Send Location</button>
            </div>
        </div>
    )
}

export default Weather