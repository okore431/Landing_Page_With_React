import React from "react";
import propTypes from "prop-types";
import pic00 from "./img/00.jpg";
import pic01 from "./img/01.jpg";
import pic02 from "./img/02.jpg";
import pic03 from "./img/03.jpg";

const dataSet = [];

const data00 = {
	image: pic00,
	cardTitle: "Pelican",
	cardDescription:
		"Pelicans (genus Pelecanus) are a genus of large water birds that make up the family Pelecanidae.",
	button: {
		url: "https://en.wikipedia.org/wiki/Pelican",
		label: "Go to wikipedia",
	},
};

const data01 = {
	image: pic01,
	cardTitle: "Albatros",
	cardDescription:
		"Albatrosses, of the biological family Diomedeidae, are large seabirds related to the procellariids.",
	button: {
		url: "https://en.wikipedia.org/wiki/Albatross",
		label: "Go to wikipedia",
	},
};

const data02 = {
	image: pic02,
	cardTitle: "Seagull",
	cardDescription:
		"Gulls, or colloquially seagulls, are seabirds of the family Laridae in the suborder Lari.",
	button: {
		url: "https://en.wikipedia.org/wiki/Gull",
		label: "Go to wikipedia",
	},
};

const data03 = {
	image: pic03,
	cardTitle: "Sanderling",
	cardDescription:
		"The sanderling (Calidris alba) is a small wading bird. The name derives from Old English sand-yrðling.",
	button: {
		url: "https://en.wikipedia.org/wiki/Sanderling",
		label: "Go to wikipedia",
	},
};

dataSet.push(data00, data01, data02, data03);

const Cards = (props) => { 
	return (
		<div class="col-sm">
        <div className="card" styleName="width: 18rem;">
                <img src={props.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.url} className="btn btn-primary">{props.label}</a>
            </div>
        </div>
    </div>
	)
}

Cards.propTypes ={
	image: propTypes.string,
	title: propTypes.string,
	description: propTypes.string,
	url: propTypes.string,
	label: propTypes.string
}

const showData = dataSet.map((dataItem, i) => {
    return (
    <Cards key={i} image={dataItem.image} title={dataItem.cardTitle} description={dataItem.cardDescription} url={dataItem.button.url} label={dataItem.button.label}></Cards>
    )
});

const Card = () => {
    return (
        <div class="container mt-3">
            <div class="row">
                {showData}
            </div>
        </div>
    )
}

export default Card;