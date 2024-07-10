import { WeatherReport } from '@/model/WeatherReport';
import React from 'react'


interface WeatherTableProps{
    weatherReport:WeatherReport[];
}
const WeatherTable:React.FC<WeatherTableProps> = ({weatherReport}) => {
  return (
    <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Location</th>
                        <th>Country</th>
                        <th>Time</th>
                        <th>Temperature (C)</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherReport.map((report, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>{report.location.name}</td>
                            <td>{report.location.country}</td>
                            <td>{report.location.localtime}</td>
                            <td>{report.current.temp_c}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default WeatherTable