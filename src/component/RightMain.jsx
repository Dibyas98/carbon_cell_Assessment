import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import CryptoCurrency from "./CryptoCurrency";

export default function RightMain() {
  const [population, setPopulation] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        setPopulation(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="rightmain">
      <div className="chart_section crypto_section_heading">
      <h1>Line Graph of <span style={{color:'#2AB52A'}}>Population</span></h1>
      <br />
      {population.length > 0 ? <Chart population={population}></Chart> : <></>}
      </div>
      <div className="crypto">
      <CryptoCurrency></CryptoCurrency>
      </div>
    </div>
  );
}
