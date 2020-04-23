import Auth from "/modules/auth.js";

// RESPONSIBLE FOR MANIPULATING THE DOM
class Dom
{
    static container = document.querySelector("#main-container");
    
    static renderLogin()
    {
        // render login form
        this.container.innerHTML = Auth.logInForm();

        // login eventlistener to login button
        const loginButton = document.querySelector("#log-in");
        loginButton.addEventListener("click", Auth.logIn)
    }

    // RERENDER AFTER SUCCESFUL LOGIN
    static loadMainPage()
    {
        this.container.innerHTML =  `
        <div id="login-container">
            <p id="welcome-msg">Hello ${Auth.currentUser.first_name} !</p>
        </div>`
    }
}

export default Dom;