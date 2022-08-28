



let getData = async (url) => {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        return (data.articles);
    }
    catch (err) {
        console.log(err);
    }
}


let append_Data = (data, container) => {

    let count = 0;
    data.forEach((ele) => {
        if (count < 8 && ele.urlToImage != null) {
            let main_div = document.createElement("div")
            main_div.className = "r_enter_techno_nation_business_container"

            let div_1 = document.createElement("div");
            let div_img = document.createElement("div");
            let div_p = document.createElement("div");

            let image = document.createElement("img");
            image.src = ele.urlToImage;

            let cont_p = document.createElement("p");
            cont_p.innerText = ele.title;

            div_img.append(image);
            div_p.append(cont_p);

            div_1.append(div_img, div_p);

            container.append(div_1);
        }
        else {
            return
        }
        count++;
    })
}



let append_2nd_Data = (data, container) => {

    let count = 0;
    data.forEach((ele) => {
        if (count < 6 && ele.urlToImage != null) {
            let main_div = document.createElement("div")
            main_div.className = "r_enter_techno_nation_business_container"

            let div_1 = document.createElement("div");
            let div_img = document.createElement("div");
            let div_p = document.createElement("div");

            let image = document.createElement("img");
            image.src = ele.urlToImage;

            let cont_p = document.createElement("p");
            cont_p.innerText = ele.title;

            div_img.append(image);
            div_p.append(cont_p);

            div_1.append(div_img, div_p);

            container.append(div_1);
        }
        else {
            return
        }
        count++;
    })
}

export { getData, append_Data, append_2nd_Data };