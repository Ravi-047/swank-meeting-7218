
const apiKey = "26691ce9f01e4e11b699c5aa720bdb1c"


import { getdata, appenddata } from "../components/southComp.js"; //.---------------importing function;

const link_1 = `https://newsapi.org/v2/everything?q=INDIAN&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`

let response_1 = await getdata(link_1)
appenddata(response_1);



//ENTERTAINMENT  ...... ..............................................................................................................

async function EntertanmentData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=INDIAN ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            Entertanment_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

EntertanmentData();

function Entertanment_appenddata(ele) {
    // console.log(data)
    for (let i = 7; i <= 9; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#ENTERTAINMENT-container").append(div)

    }


    for (let i = 12; i <= 14; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title

        div.append(img, h3)
        //console.log(div)
        document.querySelector("#ENTERTAINMENT-container-down").append(div)

    }


}


function showdata(el) {
    console.log(el);
    localStorage.setItem("newsdata", JSON.stringify(el))
    window.location.href = "newsmain.html"
}


// JOBS AND EDUCATION  ...... ..............................................................................................................

async function JobsData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=INDIAN Education&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)
        //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            Jobs_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

JobsData();

function Jobs_appenddata(ele) {
    // console.log(data)



    for (let i = 1; i <= 4; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title

        div.append(img, h3)
        //console.log(div)
        document.querySelector("#jobs-container-down").append(div)

    }


}

// SPORTS........ ...... ..............................................................................................................

async function SportsData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=INDIAN CRICKET&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)
        //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            Sports_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

SportsData();

function Sports_appenddata(ele) {
    // console.log(data)
    for (let i = 1; i <= 4; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#sports-container").append(div)

    }


    for (let i = 6; i <= 9; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title

        div.append(img, h3)
        //console.log(div)
        document.querySelector("#sports-container-down").append(div)

    }


}

// LIFE STYLE ...... ..............................................................................................................
async function lifeStyleData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=INDIAN LIFESTYLE&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)
        //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            lifeStyle_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

lifeStyleData();

function lifeStyle_appenddata(ele) {
    // console.log(data)
    for (let i = 1; i <= 4; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })

        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#life-container").append(div)

    }


    for (let i = 6; i <= 9; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        // let imgdiv=document.createElement("div")
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title
        //  imgdiv.append(img)
        div.append(img, h3)
        //console.log(div)
        document.querySelector("#life-container-down").append(div)

    }


}



// WORLD ...... ..............................................................................................................



async function worldData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=WORLD&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)


        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            world_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

worldData();

function world_appenddata(ele) {
    // console.log(data)
    for (let i = 1; i <= 4; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })

        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#world-container").append(div)

    }


    for (let i = 6; i <= 9; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })
        // let imgdiv=document.createElement("div")
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title
        //  imgdiv.append(img)
        div.append(img, h3)
        //console.log(div)
        document.querySelector("#world-container-down").append(div)

    }


}

//BUSINESS ...... ..............................................................................................................


async function businessData() {

    try {

        let res = await fetch(`https://newsapi.org/v2/everything?q=INDIAN BUSINESS&from=2022-08-24&sortBy=popularity&apiKey=${apiKey}`)


        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            business_appenddata(actualdata);



        }
        console.log(actualdata);

    } catch (error) {
        console.log(error);
    }


}

businessData();

function business_appenddata(ele) {
    // console.log(data)
    for (let i = 1; i <= 4; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })

        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#business-container").append(div)

    }


    for (let i = 6; i <= 9; i++) {



        let div = document.createElement("div")
        div.addEventListener("click", function () {
            showdata(ele[i])
        })

        // let imgdiv=document.createElement("div")
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title
        //  imgdiv.append(img)
        div.append(img, h3)
        //console.log(div)
        document.querySelector("#business-container-down").append(div)
    }
}
