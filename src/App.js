import './app.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchBar/SearchBar';
import Card from './components/card/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const regions = [
    {
      id: 0,
      name: "All"
    },
    {
      id: 1,
      name: "Africa"
    }, 
    {
      id: 2,
      name: "America"
    }, 
    {
      id: 3,
      name: "Asia"
    }, 
    {
      id: 4,
      name: "Europe"
    }, 
    {
      id: 5,
      name: "Oceania"
    }, 
  ];
  
  const [openFilter, setOpenFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState('Filter by Region');
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);

  const handleFilter = (region) => {
    setRegion(region);
    setOpenFilter(!openFilter);
  }

  const fetchCountries = async () => {
    let response = await fetch(`https://restcountries.com/v3.1/all`);
    let data = await response.json();
    setIsLoading(false);
    setCountries(data);
  }

  useEffect(() => {
    fetchCountries();
  }, [search]);


  return (
    <main>
      <Navbar />

      <div className="contentWrapper">
        <div className="inputsWrapper">
          <SearchBar setSearch={setSearch}/>

          {/* Filter */}
          <div className="filterContainer">
            <button type="button" className="filterBtn" onClick={() => setOpenFilter(!openFilter)}>
              <span>{region}</span>
              {openFilter ? (
                <FontAwesomeIcon icon={faAngleUp}/>
                ) : (
                  <FontAwesomeIcon icon={faAngleDown}/>
                  )}
            </button>

            {openFilter &&
              <ul className="regionList">
              {regions.filter((reg) => {
                return reg.name !== region
              }).map(reg => (
                <li key={reg.id} onClick={() => handleFilter(reg.name)}>{reg.name}</li>
                ))}
              </ul>
            }
          </div>
        </div>
        
        {isLoading ? (
          <p>Loading</p>
        ): (
          <div className="cards">
          {countries.filter((country) => {
            if (region === "All" || region === "Filter by Region") {
              return country;
            } else {
              return country.region.toLowerCase().includes(region.toLowerCase());
            }
          }).filter((country) => {
            if (search === '') {
              return country;
            } else { 
              return country.name.common.toLowerCase().includes(search.toLowerCase());
            }
          }).map((country, index) => (
            <Card key={index} country={country}/>
          ))}
        </div>
        )}
        
      </div>
    </main>
  );
}

export default App;
