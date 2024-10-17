import React from "react";

function Main(props) {
  return (
    <div className="card">
      <img src={props.image}/>
      <div className="detail">
        <div className="locate">
          <p>{props.country}</p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${props.link}`} target="_blank" rel="noopener noreferrer">VIEW ON GOOGLE MAP</a>
        </div>
        <h3>{props.title}</h3>
        <p className="date">{props.date}</p>
        <p className="describe">{props.description}</p>
      </div>
    </div>
  );
}

export default Main