
import { getdata, appenddata } from "../components/sotryTop.js";
import { seconddata, second } from "../components/sotryTop.js";
import { infodata, third } from "../components/sotryTop.js";


let key = "26691ce9f01e4e11b699c5aa720bdb1c";
const link = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${key}`


let response = await getdata(link)
console.log(response);

let append_Data = document.getElementById("first");
appenddata(response, append_Data);


const link_2 = `https://newsapi.org/v2/top-headlines?country=in&apiKey=26691ce9f01e4e11b699c5aa720bdb1c&category=general`

let response_3 = await infodata(link_2);
console.log('response_3 :>> ', response_3);

let append_Data_3 = document.getElementById("first");
third(response_3, append_Data_3);


let response_2 = await seconddata(link);
console.log('response_2 :>> ', response_2);

let append_Data_2 = document.getElementById("second");
second(response_2, append_Data_2)










































