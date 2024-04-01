import React from "react";

export default function CurrencyCard({ curr }) {
  return (
    <div className="currencyCard">
      <h5>Currency Code: {curr.code}</h5>

      <p>
        Rate:{" "}
        {curr.symbol == "&#36;" ? (
          <span> &#36;</span>
        ) : curr.symbol === "&pound;" ? (
          <span>&pound;</span>
        ) : (
          <span>&euro;</span>
        )}{" "}
        {curr.rate}
      </p>
      <p>
        Rate Float :-
        {curr.symbol == "&#36;" ? (
          <span> &#36;</span>
        ) : curr.symbol === "&pound;" ? (
          <span> &pound;</span>
        ) : (
          <span> &euro;</span>
        )}{" "} {curr.rate_float}
      </p>
      <p>Currency Name : {curr.description}</p>
    </div>
  );
}
