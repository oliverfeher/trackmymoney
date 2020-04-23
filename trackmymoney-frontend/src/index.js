import Auth from "/modules/login.js";

const main = document.querySelector("main");
const div = document.createElement("div");
div.setAttribute("id", "main-container")
main.append(div)


Auth.logInForm();

