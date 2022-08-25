async function getdata(){

    try {
    
    let res= await fetch("https://newsapi.org/v2/everything?q=INDIAN&from=2022-08-24&sortBy=popularity&apiKey=650efccfef7a4b8b9959df4efa1cfc71")
    
    let data=  await res.json();
    let actualdata=data.articles;
    if(actualdata!==undefined){
        appenddata(actualdata);
    
    
    
    }
    console.log(actualdata);
    
    } catch (error) {
       console.log(error);
    }
    
  
    }
    
    getdata();

    function appenddata(ele){
       // console.log(data)
       for (let i=1;i<=4;i++){

       
        
            let div=document.createElement("div")
            let img=document.createElement('img')
            img.src=ele[i].urlToImage
            let h2=document.createElement('h2')
            h2.innerText=ele[i].title

            div.append(img,h2)
            //console.log(div)
            document.querySelector("#container").append(div)
        
    }

       
    for (let i=5;i<=8;i++){

       
        
        let div=document.createElement("div")
        let img=document.createElement('img')
        img.src=ele[i].urlToImage
        let h3=document.createElement('h3')
        h3.innerText=ele[i].title

        div.append(img,h3)
        //console.log(div)
        document.querySelector("#container-down").append(div)
    
}
        


    }

    async function EntertanmentData(){

        try {
        
        let res= await fetch("https://newsapi.org/v2/everything?q=INDIAN ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=650efccfef7a4b8b9959df4efa1cfc71")
        //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
        
        let data=  await res.json();
        let actualdata=data.articles;
        if(actualdata!==undefined){
            Entertanment_appenddata(actualdata);
        
        
        
        }
        console.log(actualdata);
        
        } catch (error) {
           console.log(error);
        }
        
      
        }
        
        EntertanmentData();
    
        function Entertanment_appenddata(ele){
           // console.log(data)
           for (let i=7;i<=9;i++){
    
           
            
                let div=document.createElement("div")
                let img=document.createElement('img')
                img.src=ele[i].urlToImage
                let h2=document.createElement('h2')
                h2.innerText=ele[i].title
    
                div.append(img,h2)
                //console.log(div)
                document.querySelector("#ENTERTAINMENT-container").append(div)
            
        }
    
           
        for (let i=12;i<=14;i++){
    
           
            
            let div=document.createElement("div")
            let img=document.createElement('img')
            img.src=ele[i].urlToImage
            let h3=document.createElement('h3')
            h3.innerText=ele[i].title
    
            div.append(img,h3)
            //console.log(div)
            document.querySelector("#ENTERTAINMENT-container-down").append(div)
        
    }
            
    
        }

        // JOBS AND EDUCATION 

        async function JobsData(){

            try {
            
            let res= await fetch("https://newsapi.org/v2/everything?q=INDIAN Education&from=2022-08-24&sortBy=popularity&apiKey=650efccfef7a4b8b9959df4efa1cfc71")
            //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
            
            let data=  await res.json();
            let actualdata=data.articles;
            if(actualdata!==undefined){
                Jobs_appenddata(actualdata);
            
            
            
            }
            console.log(actualdata);
            
            } catch (error) {
               console.log(error);
            }
            
          
            }
            
            JobsData();
        
            function Jobs_appenddata(ele){
               // console.log(data)
               
        
               
            for (let i=1;i<=4;i++){
        
               
                
                let div=document.createElement("div")
                let img=document.createElement('img')
                img.src=ele[i].urlToImage
                let h3=document.createElement('h3')
                h3.innerText=ele[i].title
        
                div.append(img,h3)
                //console.log(div)
                document.querySelector("#jobs-container-down").append(div)
            
        }
                
        
            }

            // SPORTS........

            async function SportsData(){

                try {
                
                let res= await fetch("https://newsapi.org/v2/everything?q=INDIAN CRICKET&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
                //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
                
                let data=  await res.json();
                let actualdata=data.articles;
                if(actualdata!==undefined){
                    Sports_appenddata(actualdata);
                
                
                
                }
                console.log(actualdata);
                
                } catch (error) {
                   console.log(error);
                }
                
              
                }
                
                SportsData();
            
                function Sports_appenddata(ele){
                   // console.log(data)
                   for (let i=1;i<=4;i++){
            
                   
                    
                        let div=document.createElement("div")
                        let img=document.createElement('img')
                        img.src=ele[i].urlToImage
                        let h2=document.createElement('h2')
                        h2.innerText=ele[i].title
            
                        div.append(img,h2)
                        //console.log(div)
                        document.querySelector("#sports-container").append(div)
                    
                }
            
                   
                for (let i=6;i<=9;i++){
            
                   
                    
                    let div=document.createElement("div")
                    let img=document.createElement('img')
                    img.src=ele[i].urlToImage
                    let h3=document.createElement('h3')
                    h3.innerText=ele[i].title
            
                    div.append(img,h3)
                    //console.log(div)
                    document.querySelector("#sports-container-down").append(div)
                
            }
                    
            
                }


                async function lifeStyleData(){

                    try {
                    
                    let res= await fetch("https://newsapi.org/v2/everything?q=INDIAN LIFESTYLE&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
                    //("https://newsapi.org/v2/top-headlines/sources?country=inapiKey=eb1cd6a6369142d08eacd7e381735525")//("https://newsapi.org/v2/everything?q=ENTERTAINMENT&from=2022-08-24&sortBy=popularity&apiKey=eb1cd6a6369142d08eacd7e381735525")
                    
                    let data=  await res.json();
                    let actualdata=data.articles;
                    if(actualdata!==undefined){
                        lifeStyle_appenddata(actualdata);
                    
                    
                    
                    }
                    console.log(actualdata);
                    
                    } catch (error) {
                       console.log(error);
                    }
                    
                  
                    }
                    
                    lifeStyleData();
                
                    function lifeStyle_appenddata(ele){
                       // console.log(data)
                       for (let i=1;i<=4;i++){
                
                       
                        
                            let div=document.createElement("div")
                            
                            let img=document.createElement('img')
                            img.src=ele[i].urlToImage
                            let h2=document.createElement('h2')
                            h2.innerText=ele[i].title
                        
                            div.append(img,h2)
                            //console.log(div)
                            document.querySelector("#life-container").append(div)
                        
                    }
                
                       
                    for (let i=6;i<=9;i++){
                
                       
                        
                        let div=document.createElement("div")
                        let imgdiv=document.createElement("div")
                        let img=document.createElement('img')
                        img.src=ele[i].urlToImage
                        let h3=document.createElement('h3')
                        h3.innerText=ele[i].title
                         imgdiv.append(img)
                        div.append(imgdiv,h3)
                        //console.log(div)
                        document.querySelector("#life-container-down").append(div)
                    
                }
                        
                
                    }
        
    