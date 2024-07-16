import React from "react";
import '../styles/card.css';

const Card = ({ data } ) => {
    return(
        <div className="card">
            <img src={data.url} alt="project preview"/>
            <h1>{data.title}</h1>
            <p>{data.bio}</p>
            <h2>{data.stack}</h2>
            <div>
                <a href={`//${data.github}`} target="_blank" rel="noreferrer">
                    <button className="repo">REPO</button>
                </a>
                <a href={`//${data.demo}`} target="_blank" rel="noreferrer">
                    <button className="demo">DEMO</button>
                </a>
            </div>
        </div>
    )
};

export default Card;