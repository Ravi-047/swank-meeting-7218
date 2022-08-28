console.log("working gallery.js");


const api_key = "7cc87a95151e465eb9101a1f1bfd02d9"

import { getData, append_Data, append_2nd_Data } from "./galleryComp.js";

const link_1 = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${api_key}`

let container_entertainment = document.getElementById("r_entertainment_data");

let response_1 = await getData(link_1);
console.log('response_1 :>> ', response_1);
append_Data(response_1, container_entertainment);


const link_2 = `https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${api_key}`
let response_2 = await getData(link_2);
let container_technology = document.getElementById("r_technology_data");

append_Data(response_2, container_technology);


const link_3 = `https://newsapi.org/v2/top-headlines?country=in&category=nation&apiKey=${api_key}`
let response_3 = await getData(link_3);
let container_nation = document.getElementById("r_national_data");

append_Data(response_3, container_nation);



const link_4 = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${api_key}`
let response_4 = await getData(link_4);
let container_business = document.getElementById("r_businessed_data");

append_Data(response_4, container_business);

// .--------------------------------------------------------------------------------------------------------------------


const link_5 = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${api_key}`

let response_5 = await getData(link_5);
let container_lifestyle = document.getElementById("r_lifestyle_data");

append_2nd_Data(response_5, container_lifestyle);




const link_6 = `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${api_key}`

let response_6 = await getData(link_6);
let container_sports = document.getElementById("r_sports_data");

append_2nd_Data(response_6, container_sports);



const link_7 = `https://newsapi.org/v2/everything?q=world&from=2022-08-27&to=2022-08-27&sortBy=popularity&apiKey=${api_key}`

let response_7 = await getData(link_7);
let container_world = document.getElementById("r_world_data");

append_2nd_Data(response_7, container_world);


const link_8 = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=${api_key}`

let response_8 = await getData(link_8);
let container_science = document.getElementById("r_science_data")

append_2nd_Data(response_8, container_science);
