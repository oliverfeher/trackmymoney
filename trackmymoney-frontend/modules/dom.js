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
                        <p id="total-income">Total income: $${Auth.currentUser.income}</p>
                        <div id="progress-container">
                            <ul>
                                <p id="bar-remaining-text">remaining $${Auth.currentUser.income - Money.getBillsValue(Auth.currentUser)}</p>
                                <li></li>
                                <li id="bar-remaining" style="width:${this.calculateRemainingWidth(Auth.currentUser)}%;"></li>

                                    <p id="bar-spent-text">spent $${Money.getBillsValue(Auth.currentUser)}</p>
                                <li></li>
                                <li id="bar-spent" style="width:${this.calculateSpentWidth(Auth.currentUser)}%;"></li>
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

    // UPDATE MONEY BARS

    static updateBars(user)
    {
        const remainingText = document.querySelector("#bar-remaining-text");
        const remainingBar = document.querySelector("#bar-remaining");
        const spentBar = document.querySelector("#bar-spent");
        const spentText = document.querySelector("#bar-spent");

        
        remainingText.innerText = `remaining $${user.income - Money.getBillsValue(user)}`
        remainingBar.style.width =`${this.calculateRemainingWidth(user)}%`

        spentText.inerText = `spent $${Money.getBillsValue(user)}`
        spentBar.style.width = `${this.calculateSpentWidth(user)}%`;
    }

    static calculateSpentWidth(user)
    {
        let spent = (Money.getBillsValue(user) / user.income) * 100;
        return spent;  
    }

    static calculateRemainingWidth(user)
    {
        let remaining = 100 - this.calculateSpentWidth(user);
        return remaining;
    }
}

export default Dom;