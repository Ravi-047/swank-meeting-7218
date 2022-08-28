
const api_key = "f007935ad209452f872634fe12cfa950";


import { getdata, appenddata, america } from "../components/worldComp.js"; // .--------------- importing  function


const link_1 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`

let response_1 = await getdata(link_1)
console.log(response_1);

appenddata(response_1)
america(response_1)

// >----------------------------------------------------------------------------------------------------


import { infodata, third, ausnz } from "../components/worldComp.js";  // .--------------- importing  function


const link_2 = `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${api_key}&category=general`

let response_2 = await infodata(link_2)
third(response_2)
ausnz(response_2)


//  >----------------------------------------------------------------------------------------------------


import { to, ne, negi } from "../components/worldComp.js";   // .--------------- importing  function

const link_3 = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}&category=general`

let response_3 = await to(link_3)
console.log('response_3 :>> ', response_3);
ne(response_3)
negi(response_3)


// >-----------------------------------------------------------------------------------------------------



const link_4 = `https://newsapi.org/v2/top-headlines?country=ph&apiKey=${api_key}&category=general`



// import { neg } from "../components/worldComp.js";   // .--------------- importing  function

// let response_4 = neg(link_4)
// negi(response_4)



// > -----------------------------------------------------------------------------------------------------

// ASIA PAGE // 

const link_5 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${api_key}&category=general`


import { as, asia } from "../components/worldComp.js";   // .--------------- importing  function

let response_5 = await as(link_5);
asia(response_5);

// > -----------------------------------------------------------------------------------------------------



//  MIDDLE EAST//

import { middle, middleeast } from "../components/worldComp.js";  //.--------------- importing  function

const link_6 = `https://newsapi.org/v2/top-headlines?country=sa&apiKey=${api_key}&category=general`

let response_6 = await middle(link_6);
middleeast(response_6);

// > -----------------------------------------------------------------------------------------------------


// Europe//

import { euro, europ } from "../components/worldComp.js"; // .--------------- importing  function

const link_7 = `https://newsapi.org/v2/top-headlines?country=sg&apiKey=${api_key}&category=general`

let response_7 = await euro(link_7);
europ(response_7);

// > -----------------------------------------------------------------------------------------------------


//AFRICA//

import { afric, africa } from "../components/worldComp.js";   // .--------------- importing  function

const link_8 = `https://newsapi.org/v2/top-headlines?country=za&apiKey=${api_key}&category=general`

let response_8 = await afric(link_8);
africa(response_8);



