import React from "react";
import { Bitcoin } from 'lucide-react';
import { Banknote } from 'lucide-react';
import { AudioLines } from 'lucide-react';

export default function CurrencyCard({ curr }) {
  return (
    <div className="currencyCard">
      <div className="currency_head">
        <Bitcoin style={{backgroundColor:'green',borderRadius:'50%'}}></Bitcoin>
        <div>
        <h5>{curr.code}</h5>
        <p>{curr.description}</p>
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
      <Banknote style={{color:'green'}}></Banknote>{" "}
        <p>{curr.symbol == "&#36;" ? (
          <span> &#36;</span>
        ) : curr.symbol === "&pound;" ? (
          <span>&pound;</span>
        ) : (
          <span>&euro;</span>
        )}{" "}
        {curr.rate}</p>
      </div>
      <br />
      <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
      <AudioLines style={{color:'green'}}></AudioLines>{" "}
        <p>{curr.symbol == "&#36;" ? (
          <span> &#36;</span>
        ) : curr.symbol === "&pound;" ? (
          <span>&pound;</span>
        ) : (
          <span>&euro;</span>
        )}{" "}
        {curr.rate_float}</p>
      </div>
     
    </div>
  );
}
