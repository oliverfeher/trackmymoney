class Api::V1::SessionsController < ApplicationController

    # POST TO LOGIN
    def new
        user = User.find_by(email: params[:user][:email])
        
        # VALIDATION FOR NON EXISTING EMAIL ADDRESS
        if !user.nil?
            render json: user
        else
            render json: { error: "This e-mail does not exist!"}
        end
    end

    # POST TO LOGOUT
    def destroy
    end
end