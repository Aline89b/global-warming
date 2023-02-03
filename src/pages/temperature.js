import React from "react";
import tempData from "../tempData.json"
import { useState } from "react";
import BarChart from "../components/barChart";




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
            < BarChart temperatureData = {temperatureData}  />
        </div>
    )
}