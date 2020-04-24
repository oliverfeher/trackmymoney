import Auth from "/modules/auth.js";
import Money from "/modules/money.js"

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
        document.querySelector(".title-container").style.marginTop = "5%";
        const signUpButton = document.querySelector("#sign-up");
        signUpButton.addEventListener("click", Auth.userSignUp);
    }

    // RERENDER AFTER SUCCESFUL LOGIN
    static loadMainPage()
    {
        this.container.innerHTML = `${this.renderLoggedInHeader()}  ${this.renderIncomeSection()}`;
        this.flipping();

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
            <div id="income-section" class="flip-box">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        <p id="total-income">Total income: $6,000</p>
                        <div id="progress-container">
                            <ul>
                                <p id="bar-remaining-text">remaining $2,000</p>
                                <li></li>
                                <li id="bar-remaining"></li>

                                    <p id="bar-spent-text">spent $4,000</p>
                                <li></li>
                                <li id="bar-spent"></li>
                            </ul>
                            <p id="edit-income-section" >edit</p>
                        </div>
                    </div>

                    <div class="flip-box-back">
                        <form id="income-form">
                            <label>Add/Edit Income:</label>
                            <input type="number">
                        </form>
                        <h2>Submit</h2>
                    </div>
                </div>
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

    // FLIP FLOP SECTION FLIPPING
    static flipping()
    {
        const progressSection = document.querySelector("#edit-income-section");
        progressSection.addEventListener("click", flipFlop);

        const progressSectionBack = document.querySelector("h2");
        progressSectionBack.addEventListener("click", flipFlopBack);
        progressSectionBack.addEventListener("click", Money.getIncome);

        function flipFlop() 
        {
            document.querySelector(".flip-box").classList.add("flip-section");
        }

        function flipFlopBack() 
        {
            document.querySelector(".flip-box").classList.remove("flip-section");
        }
    }
}

export default Dom;