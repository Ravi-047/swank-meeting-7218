

async function getdata(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            return (actualdata);
        }
    } catch (error) {
        console.log(error);
    }
}



function appenddata(ele) {
    // console.log(data)
    for (let i = 1; i <= 4; i++) {
        let div = document.createElement("div")
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h2 = document.createElement('h2')
        h2.innerText = ele[i].title

        div.append(img, h2)
        //console.log(div)
        document.querySelector("#container-up").append(div)

    }


    for (let i = 5; i <= 8; i++) {
        let div = document.createElement("div")
        let img = document.createElement('img')
        img.src = ele[i].urlToImage
        let h3 = document.createElement('h3')
        h3.innerText = ele[i].title

        div.append(img, h3)
        //console.log(div)
        document.querySelector("#container-down").append(div)
    }
}


export { getdata, appenddata };


// > ---------------------------------------------------------------------------------------------------------------------


