class Api::V1::UsersController < ApplicationController
    def create
        user = User.create(user_params)
        if user.errors.full_messages.blank?
            render json: user, include: ["bills"]
        else
            render json: {
                loginError: user.errors.full_messages
            }
        end
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, include: ["bills"]
    end

    def index
        users = User.all
        render json: users, include: ["bills"]
    end

    def update
        user = User.find_by(id: params[:user][:id])
        user.update(income: params[:income])
        render json: user, include: ["bills"]
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :first_name, :last_name)
    end
end