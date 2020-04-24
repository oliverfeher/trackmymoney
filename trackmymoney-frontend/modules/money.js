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
            .then(response => this.updateUserIncome(response));
    }

    static updateUserIncome(user)
    {
        const incomeText = document.querySelector("#total-income");
        incomeText.innerText = `Total income: $${user.income}`
    }

}


export default Money;