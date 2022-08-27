


async function getdata(url) {
    try {
        let res = await fetch(url);

        let data = await res.json();
        let actualdata = data.articles;
        if (actualdata !== undefined) {
            return (actualdata);
        }

    } catch (error) {
        console.log(error);
    }
}

function appenddata(actualdata) {
    for (let i = 0; i <= 4; i++) {
        if (actualdata[i].urlToImage == null) {
            continue;
        } else {

            let box = document.createElement("div");
            box.addEventListener("click", function () {
                showdata(actualdata[i])
            })
            let head = document.createElement("h2");
            head.innerText = actualdata[i].title;
            head.style.fontSize = "25px"
            let image = document.createElement("img");
            image.src = actualdata[i].urlToImage;
            image.style.width = "400px"
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
    }
}


export { getdata, appenddata }  // .--------------------------------------------------------- Exporting function;




async function seconddata(url) {
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


function second(actualdata) {

    for (let j = 5; j <= 19; j++) {
        if (actualdata[j].urlToImage === null) {
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
}

export { seconddata, second } // .------------------------------------------------------------ Exporting function;



async function infodata(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        let realdata = data.articles;
        if (realdata !== undefined) {
            return (realdata);
        }
    }
    catch (error) {
        console.log(error);
    }
}



function third(realdata) {
    for (let p = 0; p <= 14; p++) {
        if (realdata[p].urlToImage == null) {
            continue;
        }
        let box4 = document.createElement("div");
        let head4 = document.createElement("h2");
        head4.innerText = realdata[p].title;
        head4.style.fontSize = "15px";
        head4.style.marginLeft = "13px"
        let image4 = document.createElement("img");
        image4.src = realdata[p].urlToImage;
        image4.style.width = "200px";
        image4.style.borderRadius = "10px"

        box4.append(head4, image4);
        document.querySelector("#third").append(box4);
    }
}


export { infodata, third } // .--------------------------------------------------------------- Exporting function;