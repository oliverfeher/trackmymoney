import API from "/modules/api.js"
import Dom from "/modules/dom.js";

// RESPONSIBLE FOR USER AUTH/LOGIN INCLUDING FORMS

class Auth 
{
    static currentUser = {}

    static setCurrentUser(user) 
    {
        this.currentUser = user;
        console.log("hello " + this.currentUser.first_name);
        Dom.loadMainPage();
    }

    static logInForm() 
    {
        return `
            <div id="login-container">
            <div id="title-container">
                <img src="./assets/logo.svg" alt="logo"/>
                <p id="title-text">trackMyMoney</p>
            </div>
            <form action="POST">
                <label for="">E-mail address:</label>
                <input type="text" name="user_email" placeholder="e-mail">
                <label for="">Password:</label>
                <input type="password" name="user_password" placeholder="password"/>
            </form>
            <div id="button-container">
                <button id="log-in">Log in</button>
                <button id="sign-up">Sign up</button>
            </div>
        </div>
        `
    };


    static logIn = (event) => 
    {
        event.preventDefault();
        
        // GET USER LOGIN INFO FROM FORM INTO AN OBJECT
        const userInfo = {
            user: {
                email: event.path[2].childNodes[3][0].value,
                password: event.path[2].childNodes[3][1].value
            }
        }
        
        API.postRequest("/users", userInfo)  
            .then(response => this.setCurrentUser(response))
    };


}

export default Auth;