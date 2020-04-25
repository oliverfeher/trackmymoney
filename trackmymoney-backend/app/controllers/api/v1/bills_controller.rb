class Api::V1::BillsController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        render json: user.bills
    end

    def create
        user = User.find_by(id: params[:user_id])
    end

    def update
        user = User.find_by(id: params[:user_id])
        binding.pry
    end

end