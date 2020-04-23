class Api::V1::UsersController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        # binding.pry
        render json: user
    end

    def show
        users = User.all
        render json: users
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
end