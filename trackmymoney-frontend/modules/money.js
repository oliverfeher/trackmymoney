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

    static updateUserIncome(data)
    {
        console.log(data);
        Dom.updateBars(data);
        const incomeText = document.querySelector("#total-income");
        incomeText.innerText = `Total income: $${data.user.income}`
    }

    static getBillsValue(data)
    {
        let costArray = [];

        for(let i = 0; i < data.bills.length; i++)
        {
            costArray.push(data.bills[i].cost);
        }
        let totalCost = costArray.reduce((total, num) => {return total + num}, 0)
        console.log(totalCost);
    }

}


export default Money;