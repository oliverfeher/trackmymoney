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
        
        this.container.innerHTML = `${this.renderLoggedInHeader()} + ${this.renderIncomeSection()}`L;
    };

    // RENDER LOGGED IN HEADER

    static renderLoggedInHeader()
    {
        return `
        <div id="user-container">
            <div class="title-container" id="logged-in-title">
                <img src="./assets/logo.svg" alt="logo" id="logo"/>
                <p id="title-text">trackMyMoney</p>
            </div>
            <div id="welcome-container">
                <p id="welcome-msg">Welcome, ${Auth.currentUser.first_name + " " + Auth.currentUser.last_name}!</p>
                <p id="date-now">${this.getTodaysDate()}</p>
            </div>
        </div>`
    }

    // RENDER INCOME SECTION\
    static renderIncomeSection() 
    {
        return `
            <div id="income-section">
                
            </div>
        `
    }

    // RENDER CURRENT DATE
    static getTodaysDate()
    {
        let date = new Date();
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let currentDate = ` ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
        return currentDate;
    }
}

export default Dom;