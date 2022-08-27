
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
    for (let i = 1; i <= 4; i++) {
        if (actualdata[i].urlToImage == null) {
            continue;
        }
        let box = document.createElement("div");

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

        box.append(image, head, des);
        box.addEventListener("click", function () {
            myfunction(actualdata[i]);
        })

        document.querySelector("#first").append(box);
    }
}




function america(actualdata) {
    for (let j = 0; j <= 3; j++) {
        if (actualdata[j].urlToImage == null) {
            continue;
        } else {
            let box8 = document.createElement("div");
            box8.style.marginLeft = "30px"
            let head8 = document.createElement("h2");
            head8.innerText = actualdata[j].title;
            head8.style.fontSize = "15px";
            head8.style.width = "300px"
            //head7.style.marginLeft="13px"
            let image8 = document.createElement("img");
            image8.src = actualdata[j].urlToImage;
            image8.style.width = "300px";
            image8.style.height = "200px";
            image8.style.borderRadius = "10px"
            image8.style.marginTop = "20px"
            box8.append(image8, head8);
            document.querySelector("#amfirst").append(box8);
        }
    }

    for (let k = 7; k < 10; k++) {
        if (actualdata[k].urlToImage == null) {
            continue;
        } else {
            let box9 = document.createElement("div");
            box9.style.margin = "40px"
            box9.style.display = "flex"
            let head9 = document.createElement("h2");
            head9.innerText = actualdata[k].title;
            head9.style.fontSize = "16px";
            head9.style.width = "130px"
            head9.style.margin = "30px"
            //head7.style.marginLeft="13px"
            let image9 = document.createElement("img");
            image9.src = actualdata[k].urlToImage;
            image9.style.width = "150px";
            image9.style.height = "90px";
            image9.style.borderRadius = "10px"
            image9.style.marginTop = "20px"
            box9.append(image9, head9);
            document.querySelector("#amsecond").append(box9);
        }
    }
}
export { getdata, appenddata, america }; // . ---------------------------  Exporting function;

// >------------------------------------------------------------------------------------------------------------------------------- 

async function infodata(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        let realdata = data.articles;
        if (realdata !== undefined) {
            return (realdata);
        }
        console.log(realdata);
    } catch (error) {
        console.log(error);
    }
}


function third(realdata) {
    let imgs = document.createElement("img");
    imgs.src = realdata[16].urlToImage;
    imgs.style.width = "700px";
    imgs.style.borderRadius = "10px"
    imgs.style.marginTop = "20px"
    document.querySelector("#galy").append(imgs)
    for (let p = 0; p <= 16; p++) {
        if (realdata[p].urlToImage == null) {
            continue;
        }
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
        if (p == 15 || p == 14 || p == 13 || p == 12 || p == 4 || p == 0) {
            document.querySelector("#more").append(box4);
        }
    }
}


function ausnz(real) {
    for (let j = 0; j <= 7; j++) {
        if (real[j].urlToImage == null) {
            continue;
        }
        let box10 = document.createElement("div");
        box10.style.marginLeft = "30px"
        let head10 = document.createElement("h2");
        head10.innerText = real[j].title;
        head10.style.fontSize = "13px";
        head10.style.width = "300px"
        //head7.style.marginLeft="13px"
        let image10 = document.createElement("img");
        image10.src = real[j].urlToImage;
        image10.style.width = "300px";
        image10.style.height = "200px";
        image10.style.borderRadius = "10px"
        image10.style.marginTop = "20px"
        let de = document.createElement("h4");
        de.innerText = real[j].description;
        de.style.fontSize = "13px"
        box10.append(image10, head10, de);
        document.querySelector("#aunz").append(box10);
    }
}


export { infodata, third, ausnz };

// >----------------------------------------------------------------------------------------------------------------------- 


async function to(url) {
    try {
        let res = await fetch(url)
        let data = await res.json();
        let realdata = data.articles;
        console.log('realdata ne :>> ', realdata);
        if (realdata !== undefined) {
            return (realdata);
        };
    } catch (error) {
        console.log(error);
    }
}


function ne(actualdata) {
    for (let j = 10; j <= 19; j++) {
        if (actualdata[j].urlToImage == null) {
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


function negi(realdata) {
    for (let j = 2; j <= 5; j++) {
        if (realdata[j].urlToImage == null) {
            continue;
        }
        let box7 = document.createElement("div");
        box7.style.marginLeft = "30px"
        let head7 = document.createElement("h2");
        head7.innerText = realdata[j].title;
        head7.style.fontSize = "13px";
        head7.style.width = "300px"
        //head7.style.marginLeft="13px"
        let image7 = document.createElement("img");
        image7.src = realdata[j].urlToImage;
        image7.style.width = "300px";
        image7.style.height = "200px";
        image7.style.borderRadius = "10px"
        image7.style.marginTop = "20px"
        let des = document.createElement("h4");
        des.innerText = realdata[j].description;
        des.style.fontSize = "13px"

        box7.append(image7, head7, des);
        document.querySelector("#neg").append(box7);
    }
}




export { to, ne, negi };


// > -----------------------------------------------------------------------------------------------------------------



async function neg(url) {
    try {
        let re = await fetch(url)
        let dat = await re.json();
        let realdat = dat.articles
        if (realdat !== undefined) {
            return (realdat);
        };
        console.log(dat);
    } catch (error) {
        console.log(error);
    }
}

export { neg };


// > -----------------------------------------------------------------------------------------------------------------


async function as(url) {
    try {
        let re = await fetch(url)
        let da = await re.json();
        let realda = da.articles
        if (realda !== undefined) {
            return (realda);
        }
    } catch (error) {
        console.log(error);
    }
}


function asia(realda) {
    for (let j = 0; j <= 3; j++) {
        if (realda[j].urlToImage == null) {
            continue;
        }
        else {
            let box8 = document.createElement("div");
            box8.style.marginLeft = "30px"
            let head8 = document.createElement("h2");
            head8.innerText = realda[j].title;
            head8.style.fontSize = "15px";
            head8.style.width = "300px"
            //head7.style.marginLeft="13px"

            let image8 = document.createElement("img");
            image8.src = realda[j].urlToImage;
            image8.style.width = "300px";
            image8.style.height = "200px";
            image8.style.borderRadius = "10px"
            image8.style.marginTop = "20px"


            box8.append(image8, head8);
            document.querySelector("#asfirst").append(box8);
        }
    }



    for (let k = 7; k < 10; k++) {
        if (realda[k].urlToImage == null) {
            continue;
        }
        else {
            let box9 = document.createElement("div");
            box9.style.margin = "40px"
            box9.style.display = "flex"
            let head9 = document.createElement("h2");
            head9.innerText = realda[k].title;
            head9.style.fontSize = "16px";

            head9.style.width = "130px"
            head9.style.margin = "30px"
            //head7.style.marginLeft="13px"
            let image9 = document.createElement("img");
            image9.src = realda[k].urlToImage;
            image9.style.width = "150px";
            image9.style.height = "90px";
            image9.style.borderRadius = "10px"
            image9.style.marginTop = "20px"


            box9.append(image9, head9);

            document.querySelector("#assecond").append(box9);
        }
    }
}


export { as, asia };

// > -----------------------------------------------------------------------------------------------------------------


async function middle(url) {
    try {
        let re = await fetch(url);
        let da = await re.json();
        let reald = da.articles
        if (reald !== undefined) {
            return (reald);
        }
        console.log(reald);
    } catch (error) {
        console.log(error);
    }
}



function middleeast(reald) {
    for (let j = 2; j <= 5; j++) {
        if (reald[j].urlToImage == null) {
            continue;
        }
        let box10 = document.createElement("div");
        box10.style.marginLeft = "30px"
        let head10 = document.createElement("h2");
        head10.innerText = reald[j].title;
        head10.style.fontSize = "13px";
        head10.style.width = "300px"
        //head7.style.marginLeft="13px"
        let image10 = document.createElement("img");
        image10.src = reald[j].urlToImage;
        image10.style.width = "300px";
        image10.style.height = "200px";
        image10.style.borderRadius = "10px"
        image10.style.marginTop = "20px"
        let de = document.createElement("h4");
        de.innerText = reald[j].description;
        de.style.fontSize = "13px"

        box10.append(image10, head10, de);

        document.querySelector("#mid").append(box10);
    }
}


export { middle, middleeast };

// > --------------------------------------------------------------------------------------------------------------------



async function euro(url) {
    try {
        let re = await fetch(url)
        let da = await re.json();
        let real = da.articles
        if (real !== undefined) {
            return (real);
        }
    } catch (error) {
        console.log(error);
    }
}


function europ(reald) {
    for (let j = 2; j <= 5; j++) {
        if (reald[j].urlToImage == null) {
            continue;
        }
        else {
            let box10 = document.createElement("div");
            box10.style.marginLeft = "30px"
            let head10 = document.createElement("h2");
            head10.innerText = reald[j].title;
            head10.style.fontSize = "13px";
            head10.style.width = "300px"
            //head7.style.marginLeft="13px"
            let image10 = document.createElement("img");
            image10.src = reald[j].urlToImage;
            image10.style.width = "300px";
            image10.style.height = "200px";
            image10.style.borderRadius = "10px"
            image10.style.marginTop = "20px"
            let de = document.createElement("h4");
            de.innerText = reald[j].description;
            de.style.fontSize = "13px"

            box10.append(image10, head10, de);

            document.querySelector("#europ").append(box10);
        }
    }
}


export { euro, europ };


// > ----------------------------------------------------------------------------------------------------------------


async function afric(url) {
    try {
        let re = await fetch(url)
        let da = await re.json();
        let real = da.articles
        if (real !== undefined) {
            return (real);
        }
    } catch (error) {
        console.log(error);
    }
}



function africa(actualdata) {
    for (let j = 0; j <= 3; j++) {
        if (actualdata[j].urlToImage == null) {
            continue;
        }
        else {
            let box8 = document.createElement("div");
            box8.style.marginLeft = "30px"
            let head8 = document.createElement("h2");
            head8.innerText = actualdata[j].title;
            head8.style.fontSize = "15px";
            head8.style.width = "300px"
            //head7.style.marginLeft="13px"

            let image8 = document.createElement("img");
            image8.src = actualdata[j].urlToImage;
            image8.style.width = "300px";
            image8.style.height = "200px";
            image8.style.borderRadius = "10px"
            image8.style.marginTop = "20px"

            box8.append(image8, head8);
            document.querySelector("#affirst").append(box8);
        }
    }



    for (let k = 7; k < 10; k++) {
        if (actualdata[k].urlToImage == null) {
            continue;
        } else {
            let box9 = document.createElement("div");
            box9.style.margin = "40px"
            box9.style.display = "flex"
            let head9 = document.createElement("h2");
            head9.innerText = actualdata[k].title;
            head9.style.fontSize = "16px";
            head9.style.width = "130px"
            head9.style.margin = "30px"
            //head7.style.marginLeft="13px"

            let image9 = document.createElement("img");
            image9.src = actualdata[k].urlToImage;
            image9.style.width = "150px";
            image9.style.height = "90px";
            image9.style.borderRadius = "10px"
            image9.style.marginTop = "20px"
            box9.append(image9, head9);

            document.querySelector("#afsecond").append(box9);
        }
    }
}



export { afric, africa };