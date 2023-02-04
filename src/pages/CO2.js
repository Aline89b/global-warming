import React from "react";
import CO2data from "../CO2data.json"
import BarChart from "../components/barChart";
import Navbar from "../components/navbar"
import '../App.css';





export default function CO2(){
    const temperatureData = {
        labels: CO2data.co2.map(data => data.year),
        datasets: [{
            label: "CO2",
            data: CO2data.co2.map(data=> data.trend)
        }]
    }
console.log(temperatureData)
    return (
        <div>
            <Navbar />
            < BarChart temperatureData = {temperatureData}  />
        </div>
    )
}