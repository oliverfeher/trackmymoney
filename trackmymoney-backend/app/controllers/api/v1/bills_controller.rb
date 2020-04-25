class Api::V1::BillsController < ApplicationController

    def create
        user = User.find_by(id: params[:user_id])
        user.bills.create(name: params[:bills_title], cost: params[:bill_cost], date: params[:bill_date])
        render json: user, include: ["bills"]
    end

    def update
        user = User.find_by(id: params[:user_id])
        bill = user.bills.find_by(id: params[:bill_id])
        bill.update(paid: !bill.paid)
        # binding.pry
        render json: user, include: ["bills"]
    end

end