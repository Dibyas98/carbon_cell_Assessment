import React, { useEffect, useState } from "react";
import CurrencyCard from "./CurrencyCard";
import { nanoid } from "nanoid";

export default function CryptoCurrency() {
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    async function fetchCurrencyData() {
      try {
        const res = await fetch(
          "https://api.coindesk.com/v1/bpi/currentprice.json"
        );
        const data = await res.json();
        setData(data);
        const currencies = Object.keys(data.bpi).map((ele) => data.bpi[ele]);
        setCurrency(currencies);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCurrencyData();
    console.log(currency);
  }, []);
  return (
    <>
    
      {currency.length > 0 ? (
        <div className="crypto_section">
          <div className="crypto_section_heading">
            <h1 style={{color:'#9FFF9D'}}>{data.chartName}</h1>
            <h3>
              Updated On : <span>{data.time.updated.slice(0, 12)}</span>
            </h3>
          </div>
          <div className="currency_Card_Section">
            {
                currency.map((ele) => {
                    return <CurrencyCard key={nanoid()} curr={ele}></CurrencyCard>
                })
            }
          </div>
          
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
