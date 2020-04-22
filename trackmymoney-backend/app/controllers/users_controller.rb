class UsersController < ApplicationController
    def create
    end

    def show
        users = User.all
        render json: users
    end

end