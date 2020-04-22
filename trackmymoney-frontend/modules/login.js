function logInForm() 
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

    const form = document.createElement("form");

    const emailLabel = document.createElement("label");
    emailLabel.innerText = "E-mail address:"

    const emailInput = document.createElement("input")
    emailInput.setAttribute("type", "email")
    emailInput.placeholder = "e-mail";
    
    const passwordLabel = document.createElement("label");
    passwordLabel.innerText = "Password:"

    const passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "password");
    passwordInput.placeholder = "password";

    const buttonContainer = document.createElement("div")
    buttonContainer.setAttribute("id", "button-container");


    const logInButton = document.createElement("button")
    logInButton.setAttribute("id", "log-in")
    logInButton.innerText = "Log in"
    logInButton.setAttribute("type", "submit")
    logInButton.onclick = logIn;
    
    const signUpButton = document.createElement("button")
    signUpButton.setAttribute("id", "sign-up");
    signUpButton.innerText = "Sign up"

    buttonContainer.append(logInButton, signUpButton)

    form.append(emailLabel, emailInput, passwordLabel, passwordInput, buttonContainer);

    
    title.append(logo, titleText);

    loginContainer.append(title, form)
    container.append(loginContainer);
}

function logIn(event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target.form[0].value);
    console.log(event.target.form[1].value);
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            user_email: event.target.form[0].value
        })
    }).then(response=> response.json())
    .then(data=>console.log(data))
}



export default logInForm;