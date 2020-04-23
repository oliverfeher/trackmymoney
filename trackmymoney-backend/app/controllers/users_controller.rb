class UsersController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        binding.pry
        render json: user
    end

    def show
        users = User.all
        render json: users
    end

end