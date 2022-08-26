let main=async (val)=>{
    let res=await fetch(val)
    let data=await res.json()
    return(data.articles)
    

}


let append=(data,container)=>{
    let count=0;
    console.log(data)
    data.forEach((ele)=>{
        if(count<=5){
            let div=document.createElement("div")
        div.setAttribute("class","box")
        let p=document.createElement("h4")
        let img=document.createElement("img")
        let hr=document.createElement("hr")
        p.innerText=ele.title
        img.src=ele.urlToImage;
        div.append(p,img)

        container.append(div,hr)
        div.addEventListener("click",function(){
            mainnews(ele)

        })

        }else{
            return
        }
        count++;
    })

    function mainnews(data){
        localStorage.setItem("newsdata",JSON.stringify(data))
        window.location.reload()
    }
    
}
let append2=(data,container)=>{
    let count=0
    
    data.forEach((ele)=>{
        if(count<4){
            let div=document.createElement("div")
        div.setAttribute("class","box2")
        let p=document.createElement("h4")
        let img=document.createElement("img")
        let hr=document.createElement("hr")
        p.innerText=ele.title
        img.src=ele.urlToImage;
        div.append(img,p)

        container.append(div)
        div.addEventListener("click",function(){
            mainnews(ele)

        })
        }else{
            return
        }
        count++;
    })
    function mainnews(data){
        localStorage.setItem("newsdata",JSON.stringify(data))
        window.location.reload()
    }
}
export {main,append,append2}
/*
let main1=async ()=>{
    let res=await fetch("https://newsapi.org/v2/top-headlines?country=in&category=latest&apiKey=3b0d1c2c88ac4818b1a323df1f5eb64b")
    let data=await res.json()
    console.log(data)
    append(data.articles)
https://newsapi.org/v2/everything?q=apple&from=2022-08-23&to=2022-08-23&sortBy=popularity&apiKey=3b0d1c2c88ac4818b1a323df1f5eb64b"
}
main1()
*/