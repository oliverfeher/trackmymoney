class Auth {


    static logInForm() 
    {
        const container = document.querySelector("#main-container")
        container.innerHTML = `
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
    }


    static logIn(event) {
        event.preventDefault();
        // console.log(event);
        // console.log(event.target.form[0].value);
        // console.log(event.target.form[1].value);
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
}

export default Auth;