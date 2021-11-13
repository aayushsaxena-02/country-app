import React from "react";

function Card(props){
    return (
    <div className="card content " style={{width: "25rem"}}>
    <img className="card-img-top img"
         src={props.img}
         alt="country flag"
    />

<div class="card-body">
    <a href="\Payment.html" ><h1 className="card-text name">{props.name}</h1></a>
    <p className="card-text details">{props.population}</p>
    <p className="card-text details">{props.region}</p>
    <p className="card-text details">{props.capital}</p>
    </div>

    </div>
    )};

    export default Card;