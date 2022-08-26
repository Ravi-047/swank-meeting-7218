async function getdata(){

    try {
        
    let res= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=eb1cd6a6369142d08eacd7e381735525")
    
    let data=  await res.json();
    let actualdata=data.articles;
    if(actualdata!==undefined){
        appenddata(actualdata);
        america(actualdata);
        
       
    }
    
    console.log(data);
    
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
    
    
    box.append(image,head,des);
    box.addEventListener("click",function(){
        myfunction(actualdata[i]);
    })
    
    document.querySelector("#first").append(box);
    
    
    
    }
}


function myfunction(ok){
    console.log(ok);
}










async function infodata(){
    
    try {
        
    let res= await fetch("https://newsapi.org/v2/top-headlines?country=nz&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
    
    let data=  await res.json();
    let realdata=data.articles;
    if(realdata!==undefined){
        third(realdata);
        ausnz(realdata);
    }
    console.log(realdata);
    
    } catch (error) {
       console.log(error);
    }
    
    
    
    
    
    }
    
    infodata();
    
    
    function third(realdata){
        let imgs=document.createElement("img");
        imgs.src=realdata[16].urlToImage;
        imgs.style.width="700px";
        imgs.style.borderRadius="10px"
        imgs.style.marginTop="20px"
    document.querySelector("#galy").append(imgs)
    for(let p=0;p<=16;p++){
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
    if(p==15||p==14||p==13||p==12||p==4||p==0){
        document.querySelector("#more").append(box4);
    }
   

    }
    
    //"ff"
   
    
    }
    
    

    async function to(){


        try {
                
            let res= await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
            
            let data=  await res.json();
            let realdata=data.articles;
            if(realdata!==undefined){
                ne(realdata);
                negi(realdata);
            }
            console.log(data);
            
            } catch (error) {
               console.log(error);
            }
            
    
    
    
    }
    
    to()
    
    
    
    
    
    function ne(actualdata){
    
    
        for(let j=10;j<=20;j++){
            if(actualdata[j].urlToImage==null){
                continue;
               }
        
        let box2= document.createElement("div");
        let head2= document.createElement("h2");
        head2.innerText=actualdata[j].title;
        head2.style.fontSize="15px";
        head2.style.marginLeft="13px"
        head2.style.color="grey";
        let image2= document.createElement("img");
        image2.src=actualdata[j].urlToImage;
        image2.style.width="200px";
        image2.style.borderRadius="10px"
        
        box2.append(image2,head2);
        document.querySelector("#second").append(box2);
        

        }
    
    
    
    }
    
    
  



async function neg(){


    try {
                
        let re= await fetch("https://newsapi.org/v2/top-headlines?country=ph&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
        
        let dat=  await re.json();
        let realdat=dat.articles
        if(realdat!==undefined){
            negi(realdat);
        }
       
        console.log(dat);
        
        } catch (error) {
           console.log(error);
        }


}
neg();

  function negi(realdata){
    for(let j=2;j<=6;j++){
        if(realdata[j].urlToImage==null||j==3){
            continue;
           }
       
        let box7= document.createElement("div");
        box7.style.marginLeft="30px"
        let head7= document.createElement("h2");
        head7.innerText=realdata[j].title;
        head7.style.fontSize="13px";
        head7.style.width="300px"
        //head7.style.marginLeft="13px"
       
        let image7= document.createElement("img");
        image7.src=realdata[j].urlToImage;
        image7.style.width="300px";
        image7.style.height="200px";
        image7.style.borderRadius="10px"
        image7.style.marginTop="20px"
        let des=document.createElement("h4");
        des.innerText=realdata[j].description;
        des.style.fontSize="13px"
        
        box7.append(image7,head7,des);
       
        document.querySelector("#neg").append(box7);

        }
    



}



// ASIA PAGE // 


async function as(){


    try {
                
        let re= await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
        
        let da=  await re.json();
        let realda=da.articles
        if(realda!==undefined){
            asia(realda);
        }
       
        console.log(da);
        
        } catch (error) {
           console.log(error);
        }
    }
as();




function asia(realda){

for(let j=0;j<=2;j++){

if(realda[j].urlToImage==null){
    continue;
}else{



    let box8= document.createElement("div");
    box8.style.marginLeft="30px"
    let head8= document.createElement("h2");
    head8.innerText=realda[j].title;
    head8.style.fontSize="15px";
    head8.style.width="300px"
    //head7.style.marginLeft="13px"
   
    let image8= document.createElement("img");
    image8.src=realda[j].urlToImage;
    image8.style.width="300px";
    image8.style.height="200px";
    image8.style.borderRadius="10px"
    image8.style.marginTop="20px"


    box8.append(image8,head8);
    document.querySelector("#asfirst").append(box8);

}

}

for(let k=7;k<10;k++){
    if(realda[k].urlToImage==null){
        continue;
    }else{
    let box9= document.createElement("div");
    box9.style.margin="40px"
    box9.style.display="flex"
    let head9= document.createElement("h2");
    head9.innerText=realda[k].title;
    head9.style.fontSize="16px";
   
    head9.style.width="130px"
    head9.style.margin="30px"
    //head7.style.marginLeft="13px"
   
    let image9= document.createElement("img");
    image9.src=realda[k].urlToImage;
    image9.style.width="150px";
    image9.style.height="90px";
    image9.style.borderRadius="10px"
    image9.style.marginTop="20px"


    box9.append(image9,head9);

    document.querySelector("#assecond").append(box9);
}
}
}






//  MIDDLE EAST//







async function middle(){


    try {
                
        let re= await fetch("https://newsapi.org/v2/top-headlines?country=sa&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
        
        let da=  await re.json();
        let reald=da.articles
        if(reald!==undefined){
            middleeast(reald);
        }
       
        console.log(reald);
        
        } catch (error) {
           console.log(error);

        }
    }
    middle();







    function middleeast(reald){

        for(let j=2;j<=5;j++){
            if(reald[j].urlToImage==null||j==3){
                continue;
               }
           
            let box10= document.createElement("div");
            box10.style.marginLeft="30px"
            let head10= document.createElement("h2");
            head10.innerText=reald[j].title;
            head10.style.fontSize="13px";
            head10.style.width="300px"
            //head7.style.marginLeft="13px"
           
            let image10= document.createElement("img");
            image10.src=reald[j].urlToImage;
            image10.style.width="300px";
            image10.style.height="200px";
            image10.style.borderRadius="10px"
            image10.style.marginTop="20px"
            let de=document.createElement("h4");
            de.innerText=reald[j].description;
            de.style.fontSize="13px"
            
            box10.append(image10,head10,de);
           
            document.querySelector("#mid").append(box10);
    
            }
    }







    // AMERICA//


    function america(actualdata){







        for(let j=0;j<=2;j++){

            if(actualdata[j].urlToImage==null){
                continue;
            }else{
            
            
            
                let box8= document.createElement("div");
                box8.style.marginLeft="30px"
                let head8= document.createElement("h2");
                head8.innerText=actualdata[j].title;
                head8.style.fontSize="15px";
                head8.style.width="300px"
                //head7.style.marginLeft="13px"
               
                let image8= document.createElement("img");
                image8.src=actualdata[j].urlToImage;
                image8.style.width="300px";
                image8.style.height="200px";
                image8.style.borderRadius="10px"
                image8.style.marginTop="20px"
            
            
                box8.append(image8,head8);
                document.querySelector("#amfirst").append(box8);
            
            }
            
            }
            
            for(let k=7;k<10;k++){
                if(actualdata[k].urlToImage==null){
                    continue;
                }else{
                let box9= document.createElement("div");
                box9.style.margin="40px"
                box9.style.display="flex"
                let head9= document.createElement("h2");
                head9.innerText=actualdata[k].title;
                head9.style.fontSize="16px";
               
                head9.style.width="130px"
                head9.style.margin="30px"
                //head7.style.marginLeft="13px"
               
                let image9= document.createElement("img");
                image9.src=actualdata[k].urlToImage;
                image9.style.width="150px";
                image9.style.height="90px";
                image9.style.borderRadius="10px"
                image9.style.marginTop="20px"
            
            
                box9.append(image9,head9);
            
                document.querySelector("#amsecond").append(box9);
            }
        }
            }
            
            
            
            
            


            // Europe//

            



async function euro(){



    
    try {
                
        let re= await fetch("https://newsapi.org/v2/top-headlines?country=sg&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
        
        let da=  await re.json();
        let real=da.articles
        if(real!==undefined){
            europ(real);
        }
       
       // console.log(reald);
        
        } catch (error) {
           console.log(error);

        }
}

euro();

function europ(reald){



    for(let j=2;j<=6;j++){
        if(reald[j].urlToImage==null||j==3){
            continue;
           }else{
       
        let box10= document.createElement("div");
        box10.style.marginLeft="30px"
        let head10= document.createElement("h2");
        head10.innerText=reald[j].title;
        head10.style.fontSize="13px";
        head10.style.width="300px"
        //head7.style.marginLeft="13px"
       
        let image10= document.createElement("img");
        image10.src=reald[j].urlToImage;
        image10.style.width="300px";
        image10.style.height="200px";
        image10.style.borderRadius="10px"
        image10.style.marginTop="20px"
        let de=document.createElement("h4");
        de.innerText=reald[j].description;
        de.style.fontSize="13px"
        
        box10.append(image10,head10,de);
       
        document.querySelector("#europ").append(box10);

        }


    }
}

    






//AFRICA//


async function afric(){
    try {
                
        let re= await fetch("https://newsapi.org/v2/top-headlines?country=za&apiKey=eb1cd6a6369142d08eacd7e381735525&category=general")
        
        let da=  await re.json();
        let real=da.articles
        if(real!==undefined){
            africa(real);
        }
       
      //  console.log(reald);
        
        } catch (error) {
           console.log(error);

        }
}

afric();





function africa(actualdata){



    for(let j=0;j<=2;j++){

        if(actualdata[j].urlToImage==null){
            continue;
        }else{
        
        
        
            let box8= document.createElement("div");
            box8.style.marginLeft="30px"
            let head8= document.createElement("h2");
            head8.innerText=actualdata[j].title;
            head8.style.fontSize="15px";
            head8.style.width="300px"
            //head7.style.marginLeft="13px"
           
            let image8= document.createElement("img");
            image8.src=actualdata[j].urlToImage;
            image8.style.width="300px";
            image8.style.height="200px";
            image8.style.borderRadius="10px"
            image8.style.marginTop="20px"
        
        
            box8.append(image8,head8);
            document.querySelector("#affirst").append(box8);
        
        }
        
        }
        
        for(let k=7;k<10;k++){
            if(actualdata[k].urlToImage==null){
                continue;
            }else{
            let box9= document.createElement("div");
            box9.style.margin="40px"
            box9.style.display="flex"
            let head9= document.createElement("h2");
            head9.innerText=actualdata[k].title;
            head9.style.fontSize="16px";
           
            head9.style.width="130px"
            head9.style.margin="30px"
            //head7.style.marginLeft="13px"
           
            let image9= document.createElement("img");
            image9.src=actualdata[k].urlToImage;
            image9.style.width="150px";
            image9.style.height="90px";
            image9.style.borderRadius="10px"
            image9.style.marginTop="20px"
        
        
            box9.append(image9,head9);
        
            document.querySelector("#afsecond").append(box9);
        }
    }
        }
        
        
        
        
        


       

        







//  Austrila and newzalend//








function ausnz(real){

    
    for(let j=1;j<=4;j++){
        if(real[j].urlToImage==null||j==3){
            continue;
           }
       
        let box10= document.createElement("div");
        box10.style.marginLeft="30px"
        let head10= document.createElement("h2");
        head10.innerText=real[j].title;
        head10.style.fontSize="13px";
        head10.style.width="300px"
        //head7.style.marginLeft="13px"
       
        let image10= document.createElement("img");
        image10.src=real[j].urlToImage;
        image10.style.width="300px";
        image10.style.height="200px";
        image10.style.borderRadius="10px"
        image10.style.marginTop="20px"
        let de=document.createElement("h4");
        de.innerText=real[j].description;
        de.style.fontSize="13px"
        
        box10.append(image10,head10,de);
       
        document.querySelector("#aunz").append(box10);

        }
}























