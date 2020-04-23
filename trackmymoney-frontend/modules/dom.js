import Auth from "/modules/login.js";

// RESPONSIBLE FOR MANIPULATING THE DOM
class Dom
{
    
    static renderLogin()
    {
        const container = document.querySelector("#main-container");
        container.innerHTML = Auth.logInForm();
    }
}

export default Dom;