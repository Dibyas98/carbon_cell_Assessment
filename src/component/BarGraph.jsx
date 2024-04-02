import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar} from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function BarGraph({population}) {
    const data = {
        labels:population.map((ele) => ele['ID Year']),
        datasets: [{
          label :population[0].Nation+" Population",
          data:population.map((ele) => ele.Population),
          backgroundColor:'yellow',
          borderColor:'#2AB42A',
        //   pointBorderColor:'white'
        }]
      }
       const options ={
        Plugins: {
          legend : {
            labels:{
              boxWidth:40,
              boxHeight:20
            }
          }
        },
        scales: {
          y: {
           border:{
            color : 'white'
           },
           grid: {
            color:"#3C3C3C"
           },
           title:{
            display: true,
            text:'population'
           }
          },
          x:{
            border: {
              color: "white"
            },
            grid: {
              color:"#3C3C3C"
            },
            title:{
              display: true,
              text:'Year'
             }
          }
        },
        colors:{
    
        }
       }
    
  return (
    <div className='barGraph'>
    <h1 className="crypto_section_heading">
          Bar Graph of <span style={{ color: "#2AB52A" }}>Population</span>
        </h1>
      <Bar options={options} data={data} style={{backgroundColor:'#171717',borderRadius:'5px'}}/>
    </div>
  )
}
