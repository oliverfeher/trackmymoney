import logInForm from "/modules/login.js";

const main = document.querySelector("main");
const div = document.createElement("div");
div.setAttribute("id", "main-container")
main.append(div)


const backgroundPic = document.createElement("img");
backgroundPic.setAttribute("id", "login-background");
backgroundPic.setAttribute("src", "./assets/login-background.svg");
div.append(backgroundPic)


logInForm();

