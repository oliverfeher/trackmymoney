import ApiAdapter from "/modules/api.js";
import Auth from "/modules/auth.js";
import Dom from "/modules/dom.js";

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
            .then(response => this.updateUserIncome(response))
    }

    static updateUserIncome(user)
    {
        console.log(user);
        Dom.updateBars(user);
        const incomeText = document.querySelector("#total-income");
        incomeText.innerText = `Total income: $${user.income}`
    }

    static getBillsValue(user)
    {
        let costArray = [];
        console.log(user)
        for(let i = 0; i < user.bills.length; i++)
        {
            costArray.push(user.bills[i].cost);
        }
        let totalCost = costArray.reduce((total, num) => {return total + num}, 0)
        return totalCost;
    }

}


export default Money;