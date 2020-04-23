class Api::V1::UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.errors
            render json: {
                loginError: user.errors.full_messages
            }
        else
            render json: user
        end
    end

    def show
        users = User.all
        render json: users
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end