console.log("Working footer.js");

import footer from "../components/fOOter.js";
//

let footer_container = document.querySelector("footer");
footer_container.innerHTML = footer();

console.log(footer_container);
