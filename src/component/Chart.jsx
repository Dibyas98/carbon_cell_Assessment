import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({population}) {

  const data = {
    labels:population.map((ele) => ele['ID Year']),
    datasets: [{
      label :population[0].Nation+" Population",
      data:population.map((ele) => ele.Population),
      backgroundColor:'yellow',
      borderColor:'#2AB42A',
      pointBorderColor:'white'
    }]
  }
   const options ={
    Plugins: {
      legend : true
    },
    scales: {
      y: {
       border:{
        color : 'white'
       },
       grid: {
        color:"#3C3C3C"
       }
      },
      x:{
        border: {
          color: "white"
        },
        grid: {
          color:"#3C3C3C"
        }
      }
    },
    colors:{

    }
   }

  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}