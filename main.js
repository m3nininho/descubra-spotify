import "./src/styles/generic/reset.css";
import "./src/styles/generic/generalSettings.css";
import "./src/styles/settings/colors.css";

import FindOut from "./src/components/FindOut";
import Footer from "./src/components/Footer";

document.querySelector("#app").innerHTML = /*html*/ `
  <div>
    ${FindOut()}
    ${Footer()}
  </div>
`;
