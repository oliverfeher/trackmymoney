import ApiAdapter from "/modules/api.js";
import Auth from "/modules/auth.js";

class Money
{
    static getIncome()
    {
        ApiAdapter.postRequest("/users", Auth.currentUser)
            .then(response => console.log(response));
    }
}

export default Money;