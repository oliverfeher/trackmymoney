const main = document.querySelector("main");

const startUp = () => 
{
    const div = document.createElement("div");
    div.setAttribute("id", "main-container")
    main.append(div)

    const backgroundPic = document.createElement("img");
    backgroundPic.setAttribute("id", "login-background");
    backgroundPic.setAttribute("src", "./assets/login-background.svg");
    
    const loginContainer = document.createElement("div");
    loginContainer.setAttribute("id", "login-container")
    div.append(backgroundPic, loginContainer);
}

export default startUp;