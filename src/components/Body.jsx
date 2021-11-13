import React from "react";
import Card from "./Card";
import Countries from "../Countries";

function countrycard(country){
     return(
        
     <div className="col-lg-3 col-md-4 col-sm-6 ab ">
         <Card 
               key={country.flags.svg}
               img={country.flags.png}
               name={country.name.common}
               population={"Population: " + country.population}
               region={"Region: " +country.region}
               capital={"Capital: " +country.capital}
          />
     </div>
     
     );
 };
 


function Body(){

    

    return (
        <div className="container">
         <div className="row">
             {Countries.map(countrycard)};
         </div>
        </div>
    );
};

export default Body;