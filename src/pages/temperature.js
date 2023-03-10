import React from "react";
import tempData from "../tempData.json"
import BarChart from "../components/barChart";
import Navbar from "../components/navbar"
import '../App.css';





export default function Temperature(){
    const temperatureData = {
        labels: tempData.result.map(data => Number(data.time).toFixed(0)),
        datasets: [{
            label: "temperature",
            data: tempData.result.map(data=> data.station)
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