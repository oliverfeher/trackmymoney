import ApiAdapter from "/modules/api.js";
import Auth from "/modules/auth.js";

class Money
{
    static getIncome = (event) =>
    {
        event.preventDefault();

        const userInfo = {
            user: Auth.currentUser,
            income: parseInt(event.target.parentNode.children[0].children[1].value)
        }
        ApiAdapter.patchRequest("/users", userInfo)
            .then(response => console.log(response));
    }

}


export default Money;