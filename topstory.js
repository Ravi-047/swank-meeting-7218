async function getdata() {

    try {

        
    let res= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0c18b0d72b504269ada33e0c987a9eee")
    
    let data=  await res.json();
    let actualdata=data.articles;
    if(actualdata!==undefined){
        appenddata(actualdata);
        
        
       
    }
    //console.log(data.articles);
    
    } catch (error) {
       console.log(error);
    }
    
    
    
    
    
    }
    
    getdata();
    
    
    
    
    function appenddata(actualdata){
    
    for(let i=1;i<=4;i++){
    if(actualdata[i].urlToImage==null){
        continue;
    }
        let box= document.createElement("div");
    
    let head= document.createElement("h2");
    head.innerText=actualdata[i].title;
    head.style.fontSize="25px"
    let image= document.createElement("img");
    image.src=actualdata[i].urlToImage;
    image.style.width="400px"
    image.style.borderRadius="10px"
    let des=document.createElement("h4");
    des.innerText=actualdata[i].description;
    des.style.fontSize="18px"
    let con=document.createElement("h3");
    con.innerText=actualdata[i].content;
    con.style.fontSize="16px"
    con.style.color="grey";
    
    box.append(image,head,con,des);
    
    document.querySelector("#first").append(box);
    
    
    
    }
    
    for(let j=5;j<=22;j++){
        if(actualdata[j].urlToImage==null){


        let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=eb1cd6a6369142d08eacd7e381735525")

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            appenddata(actualdata);



        }
        //console.log(data.articles);

    } catch (error) {
        console.log(error);
    }





}

getdata();




function appenddata(actualdata) {

    for (let i = 1; i <= 4; i++) {
        if (i == 3) {

            continue;
        }
        let box = document.createElement("div");

        let head = document.createElement("h2");
        head.innerText = actualdata[i].title;
        head.style.fontSize = "25px"
        let image = document.createElement("img");
        image.src = actualdata[i].urlToImage;
        image.style.width = "500px"
        image.style.borderRadius = "10px"
        let des = document.createElement("h4");
        des.innerText = actualdata[i].description;
        des.style.fontSize = "18px"
        let con = document.createElement("h3");
        con.innerText = actualdata[i].content;
        con.style.fontSize = "16px"
        con.style.color = "grey";

        box.append(image, head, con, des);

        document.querySelector("#first").append(box);



    }

    for (let j = 5; j <= 22; j++) {
        if (j == 13 || j == 15 || j == 18) {
            continue;
        }

        let box2 = document.createElement("div");
        let head2 = document.createElement("h2");
        head2.innerText = actualdata[j].title;
        head2.style.fontSize = "15px";
        head2.style.marginLeft = "13px"
        head2.style.color = "grey";
        let image2 = document.createElement("img");
        image2.src = actualdata[j].urlToImage;
        image2.style.width = "200px";
        image2.style.borderRadius = "10px"

        box2.append(image2, head2);
        document.querySelector("#second").append(box2);
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    async function infodata(){
    
        try {
            
        let res= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=0c18b0d72b504269ada33e0c987a9eee&category=general")
        
        let data=  await res.json();
        let realdata=data.articles;
        if(realdata!==undefined){
            third(realdata);
        }
        console.log(realdata);
        
        } catch (error) {
           console.log(error);
        }
        
        
        
        
        
        }
        
        infodata();
        
        
        function third(realdata){
        
        for(let p=0;p<=10;p++){
        if(realdata[p].urlToImage==null){
            continue;
        }
            let box4= document.createElement("div");
        let head4= document.createElement("h2");
        head4.innerText=realdata[p].title;
        head4.style.fontSize="15px";
        head4.style.marginLeft="13px"
        //head4.style.color="grey";
        let image4= document.createElement("img");
        image4.src=realdata[p].urlToImage;
        image4.style.width="200px";
        image4.style.borderRadius="10px"
        
        box4.append(head4,image4);
        document.querySelector("#third").append(box4);
        }
        
        //"ff"
        
        
        }
        
        








}




















async function infodata() {

    try {

        let res = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")

        let data = await res.json();
        let realdata = data.articles;
        if (realdata !== undefined) {
            third(realdata);
        }
        console.log(realdata);

    } catch (error) {
        console.log(error);
    }





}

infodata();


function third(realdata) {

    for (let p = 0; p <= 10; p++) {

        let box4 = document.createElement("div");
        let head4 = document.createElement("h2");
        head4.innerText = realdata[p].title;
        head4.style.fontSize = "15px";
        head4.style.marginLeft = "13px"
        //head4.style.color="grey";
        let image4 = document.createElement("img");
        image4.src = realdata[p].urlToImage;
        image4.style.width = "200px";
        image4.style.borderRadius = "10px"

        box4.append(head4, image4);
        document.querySelector("#third").append(box4);
    }

    //"ff"


}


    // all ok///






