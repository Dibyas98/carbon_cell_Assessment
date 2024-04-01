import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Chart from './Chart';

export default function RightMain() {
    const [population,setPopulation] = useState([])
    useEffect(() =>{
        async function fetchData(){
            const res = await axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
            setPopulation(res.data.data)
        }
        fetchData()
    },[])
    console.log(population);
  return (
    <div className='rightmain'>
      {population.length>0?<Chart population={population}></Chart> :<></>}
    </div>
  )
}
