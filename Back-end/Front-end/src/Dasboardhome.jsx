import React, { useState, useEffect } from 'react';
import Country from './country';
import IntensityCount from './intensitycount';
import IntensityOverall from './intensityoverall';
import RelevanceLikelihood from './revelence_likelihood';
import TotalCountry from './totalcountry';
import StartEndYear from './start_end_year';
import Topic from './topic';
import Region from './region';
import AddedPublished from './added_published';
import AddedPublishedGraph from './added_publishedline';

function Dashboardhome() {
  const [changing, setChanging] = useState('Intensity');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const[toggle,settoggle]=useState('white');

  const words = ['Intensity', 'Likelihood', 'Relevance', 'Year', 'Country', 'Topics', 'Region', 'City'];
  let i = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (i > 7) {
        i = 0;
      }
      setChanging(words[i]);
      i++;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

   const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    settoggle((prev)=>{
      if(prev=='black'){
        return 'white';
      }
      else{
        return 'black';
      }
    });
   
  
  };

  return (
    <>
    <div style={{backgroundColor:toggle}}>
      <nav className="dashboard-navbar">
        <div className="dashboard-brand">
          <div className="brand-text">Explore By {changing}</div>
          <span className="mode-switch" onClick={toggleMode}>
            <i className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </span>
        </div>
      </nav>
      <div className="home-grid-container">
        <div>
          <IntensityCount />
          <IntensityOverall />
          <TotalCountry />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Country className="country-div-dash" />
          <RelevanceLikelihood className="relevance_likehood_graph" />
        </div>
      </div>
      <div style={{ display: 'flex'}}>
      <StartEndYear />
      <Topic/>
      </div>
      <div style={{display:'flex'}}>
      <AddedPublished/>
      <Region/>
     
      </div>
      <AddedPublishedGraph/>
      </div>
     
    </>
  );
}

export default Dashboardhome;
