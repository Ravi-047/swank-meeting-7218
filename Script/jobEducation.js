console.log("working jobEducation.js");

let getData = async (page_number, per_page) => {
    const url = `https://newsapi.org/v2/everything?q=indian education&pageSize=${per_page}&page=${page_number}&apiKey=0400744487794b96b2a7c9d61d7d135c`
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



let append = (data) => {
    let main_container = document.getElementById("job_Education_section");
    let h1 = document.createElement("h1");
    h1.innerText = "Jobs & Education"

    main_container.innerHTML = null;
    main_container.append(h1);

    data.forEach((el) => {

        let main_box = document.createElement("div");
        main_box.className = "main_news_div";
        main_box.addEventListener("click", function () {
            showdata2(el)
        })

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


function showdata2(el) {
    console.log(el);
    localStorage.setItem("newsdata", JSON.stringify(el))
    window.location.href = "newsmain.html"
}



const showButon = (results, per_page) => {
    let button_div = document.getElementById("page");
    let buttons = Math.ceil(results / per_page);
    console.log(buttons);
    for (let i = 1; i <= buttons; i++) {
        let button = document.createElement('button');
        button.innerText = i;
        button.className = "pageNumber"
        button.onclick = function () {
            getData(i, per_page);
        }
        button_div.append(button);
    }
}

//> On Load this function will excute;
let showdata = async () => {
    console.log("hello world");
    const url = `https://newsapi.org/v2/everything?q=indian education&apiKey=0400744487794b96b2a7c9d61d7d135c`
    try {
        let res = await fetch(url);
        let get_data = await res.json();
        console.log(get_data.articles);
        let array = [];
        let per_page = 20  //. showing data per page;
        for (let i = 0; i < per_page; i++) {
            array.push(get_data.articles[i]);
        }
        append(array);
        showButon(get_data.articles.length, per_page);
    } catch (err) {
        console.log(err);
    }
}