class Api::V1::BillsController < ApplicationController

    def create
        user = User.find_by(id: params[:user_id])
        bill = user.bills.create(name: params[:bills_title], cost: params[:bill_cost], date: params[:bill_date])
        render json: {
            user: user, include: ["bills"],
            new_bill: bill
        }
    end

    def update
        user = User.find_by(id: params[:user_id])
        bill = user.bills.find_by(id: params[:bill_id])
        bill.update(paid: !bill.paid)
        render json: user, include: ["bills"]
    end

    def destroy
        user = User.find_by(id: params[:id])
        user.bills.each { |x| x.destroy}
        user.income = 0
        user.save
        render json: user, include: ["bills"]
    end

end