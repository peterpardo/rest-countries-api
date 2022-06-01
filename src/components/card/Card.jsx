import "./card.css";
import React from 'react'

const Card = ({country}) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={country.flags.png} alt="flag" />
      </div>
      <div className="cardDetails">
        <h1>{country.name.common}</h1>
        <p><span>Population:</span> {country.population}</p>
        <p><span>Region:</span> {country.region}</p>
        <p><span>Capital:</span> {country?.capital}</p>
      </div>
    </div>
  )
}

export default Card