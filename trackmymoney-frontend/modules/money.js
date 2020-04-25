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
        let paidArray = user.bills.filter(bill=>bill.paid === true)
        for(let i = 0; i < paidArray.length; i++)
        {
            costArray.push(paidArray[i].cost);
        }
        let totalCost = costArray.reduce((total, num) => {return total + num}, 0)
        return totalCost;
    }

    // PAY BILL * MARK PAID *
    static payBill = (event) => 
    {
        const billInfo = 
        {
            user_id: Auth.currentUser.id,
            bill_id: event.target.id
        }
        ApiAdapter.patchRequest(`/users/${Auth.currentUser.id}/bills`, billInfo)
        .then(data => this.updatePaymentStatus(data, event))
    }

    static updatePaymentStatus(data, event)
    {

        let bill = data.bills.find(e=> e.id == event.target.id)

        console.log(bill);
        if (bill.paid !== false)
        {
            event.target.style.backgroundColor = "#3EF3D3";
            event.target.style.color = "black";
            event.target.innerText = "Paid";
            console.log("this shouldbe true")
        } 
        else 
        {
            console.log(bill)
            event.target.style.backgroundColor = "#21264B";
            event.target.style.color = "white";
            event.target.innerText = "Mark Paid";
        }
        this.getBillsValue(data);
        Dom.updateBars.call(this, data);
    }

}


export default Money;