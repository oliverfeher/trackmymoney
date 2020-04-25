import ApiAdapter from "/modules/api.js";
import Auth from "/modules/auth.js";
import Dom from "/modules/dom.js";

// RESPONSIBLE FOR CALCULATIONS AND DATA PULLS
class Money
{

    // ADD/EDIT USERS INCOME
    static getIncome = (event) =>
    {
        event.preventDefault();

        const userInfo = 
        {
            user: Auth.currentUser,
            income: parseInt(event.target.parentNode.children[0].children[1].value)
        }
        ApiAdapter.patchRequest("/users", userInfo)
            .then(response => this.updateUserIncome(response))
    }

    // UPDATE DOM WITH getIncome() RESULTS
    static updateUserIncome(user)
    {
        Dom.updateBars(user);
        const incomeText = document.querySelector("#total-income");
        incomeText.innerText = `Total income: $${user.income}`
    }

    // GET USERS BILLS TOTAL VALUE/COST
    static getBillsValue(user)
    {
        let costArray = [];
        for(let i = 0; i < user.bills.length; i++)
        {
            costArray.push(user.bills[i].cost);
        }
        let totalCost = costArray.reduce((total, num) => {return total + num}, 0)
        return totalCost;
    }

    // PAY BILL * MARK PAID *
    static payBill(event) 
    {
        const billInfo = 
        {
            user_id: Auth.currentUser.id,
            bill_id: event.target.id
        }
        console.log(event.target.id)
        ApiAdapter.patchRequest(`/users/${Auth.currentUser.id}/bills`, billInfo)
        .then(data => console.log(data))
    }

}


export default Money;