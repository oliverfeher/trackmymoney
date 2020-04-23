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
        loginButton.addEventListener("click", Auth.logIn);

        // sign up eventlistener to signup button
        const signUpButton = document.querySelector("#sign-up");
        signUpButton.addEventListener("click", this.renderSignUp);
    }
    
    // render sign up form
    static renderSignUp = () =>
    {
        this.container.innerHTML = Auth.signUpForm();
        document.querySelector("#title-container").style.marginTop = "5%";
        const signUpButton = document.querySelector("#sign-up");
        signUpButton.addEventListener("click", Auth.userSignUp);
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