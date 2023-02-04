import React from "react";
import articData from "../articData.json"
import BarChart from "../components/barChart";
import Navbar from "../components/navbar"
import '../App.css';

export default function Artic(){
    const temperatureData = {
        labels: articData.arcticData.map(data => Number(data.year)),
        datasets: [{
            label: "area",
            data: articData.arcticData.map(data=> data.area)
        },
        {
            label: "extent",
            data: articData.arcticData.map(data=> data.extent)
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