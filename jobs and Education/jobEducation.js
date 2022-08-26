console.log("working jobEducation.js");

let getData = async () => {
    const url = "https://newsapi.org/v2/everything?q=Education AND Jobs&pageSize=20&apiKey=0400744487794b96b2a7c9d61d7d135c"
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.articles);
        append(data.articles);
    }
    catch (err) {
        console.log(err);
    }
}

getData();


let append = (data) => {
    let main_container = document.getElementById("job_Education_section");
    let h1 = document.createElement("h1");
    h1.innerText = "Jobs & Education"

    main_container.innerHTML = null;
    main_container.append(h1);

    data.forEach((el) => {

        let main_box = document.createElement("div");
        main_box.className = "main_news_div";

        let img_div = document.createElement("div");
        img_div.className = "main_news_image";

        let content_div = document.createElement("div");
        content_div.className = "main_news_content";

        let image = document.createElement("img");
        image.src = el.urlToImage;

        let news_title = document.createElement("h3");
        news_title.innerText = el.title;

        let news_desc = document.createElement("p");
        news_desc.innerText = el.description;

        img_div.append(image);
        content_div.append(news_title, news_desc);

        main_box.append(img_div, content_div);
        main_container.append(main_box);
    })
}


