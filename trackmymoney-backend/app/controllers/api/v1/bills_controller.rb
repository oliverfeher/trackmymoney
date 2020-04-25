class Api::V1::BillsController < ApplicationController

    def create
        user = User.find_by(id: params[:user_id])
    end

    def update
        user = User.find_by(id: params[:user_id])
        bill = user.bills.find_by(id: params[:bill_id])
        bill.update(paid: !bill.paid)
        # binding.pry
        render json: user, include: ["bills"]
    end

end