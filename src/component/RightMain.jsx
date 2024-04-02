import axios from "axios";
import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import CryptoCurrency from "./CryptoCurrency";
import Wallet from "./Wallet";
import BarGraph from "./BarGraph";
import { CandlestickChart } from 'lucide-react';

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
      <div className="right_heading">
         <h2>Hello, <span style={{ color: "#2AB52A" }}>Brooklyn Simmons</span> <CandlestickChart style={{color:'red'}}></CandlestickChart></h2>
         <h4>Welcom to <span style={{ color: "#2AB52A" }}>Carbon Cell</span></h4>
      </div>
      <div className="chart_section ">
        <div className="wallet_handel">
          {population.length > 0 ? (
            <Chart population={population}></Chart>
          ) : (
            <></>
          )}
          {population.length > 0 ? (
            <BarGraph population={population}></BarGraph>
          ) : (
            <></>
            )}
            <Wallet></Wallet>
        </div>
      </div>
      <div className="crypto">
        <CryptoCurrency></CryptoCurrency>
      </div>
    </div>
  );
}
