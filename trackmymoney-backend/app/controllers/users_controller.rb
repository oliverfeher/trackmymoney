class UsersController < ApplicationController
    def create
        user = User.find_by(email: params[:user_email])
        binding.pry
    end

    def show
        users = User.all
        render json: users
    end

end