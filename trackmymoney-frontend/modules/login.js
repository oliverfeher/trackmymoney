const logInForm = () => 
{
    const container = document.querySelector("#main-container")
    const loginContainer = document.createElement("div");
    loginContainer.setAttribute("id", "login-container")
    
    const title = document.createElement("div");
    title.setAttribute("id", "title-container");

    const logo = document.createElement("img");
    logo.setAttribute("src", "./assets/logo.svg");
    logo.setAttribute("id", "logo")

    const titleText = document.createElement("p");
    titleText.setAttribute("id", "title-text");
    titleText.innerText = "trackMyMoney";

    title.append(logo, titleText);

    loginContainer.append(title)
    container.append(loginContainer);
}



export default logInForm;