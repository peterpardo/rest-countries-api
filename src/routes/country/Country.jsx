import "./country.css";
import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Country = () => {
  const params = useParams();
  const [country, setCountry] = useState([]); 
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchCountry = async () => {
      let response = await fetch(`https://restcountries.com/v3.1/name/${params.name}/?fullText=true`);
      let data = await response.json();
      setCountry(data);
      setIsLoading(false);
      setCurrencies(Object.values(data[0]?.currencies).map(curr => curr.name));
      setLanguages(Object.values(data[0]?.languages))
    }

    fetchCountry();
  }, [params]);

  return (
    <div>
      <Navbar />

      {isLoading ? (
        <div className="loadingContainer">
          <p>Loading Country</p>
        </div>
      ) : (
        <div className="countryContainer">
          {/* Back link */}
          <Link to="/" className="backLink">
            <FontAwesomeIcon icon={faArrowLeftLong}/>
            <span>Back</span>
          </Link>

          <div className="countryWrapper">
            <div className="countryFlag">
              <img src={country[0]?.flags?.png} alt="countryFlag" />
            </div>

            <div className="countryDesc">
              <h1 className="countryName">{country[0]?.name?.common}</h1>

              <div className="cdWrapper">
                <div>
                  <p><span>Native Name:</span> {country[0]?.name?.official}</p>
                  <p><span>Population:</span> {country[0]?.population}</p>
                  <p><span>Region:</span> {country[0]?.region}</p>
                  <p><span>Sub Region:</span> {country[0]?.subregion  }</p>
                  <p><span>Capital:</span> {country[0]?.capital}</p>
                </div>

                <div>
                  <p><span>Top Level Domain:</span> {country[0]?.tld[0]}</p>
                  <p>
                    <span>Currencies:</span> 
                    {currencies.map((curr, index) => {
                      return (index < currencies.length - 1) ? <span key={index}> {curr},</span> : <span key={index}> {curr}</span>
                    })}
                  </p>
                  <p>
                    <span>Languages:</span> 
                    {languages.map((lang, index) => {
                      return (index < languages.length - 1) ? <span key={index}> {lang},</span> : <span key={index}> {lang}</span>
                    })}
                  </p>
                </div>
              </div>

              <div className="countryBorder">
                <h1>Border Countries:</h1>
                <div className="borderWrapper">
                  {country[0]?.borders?.map((border, index) => (
                    <div key={index} className="border">{border}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Country