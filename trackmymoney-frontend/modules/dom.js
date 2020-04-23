import Auth from "/modules/login.js";

// RESPONSIBLE FOR MANIPULATING THE DOM
class Dom
{
    
    static renderLogin()
    {
        // render login form
        const container = document.querySelector("#main-container");
        container.innerHTML = Auth.logInForm();

        // login eventlistener to login button
        const loginButton = document.querySelector("#log-in");
        loginButton.addEventListener("click", Auth.logIn)
    }
}

export default Dom;