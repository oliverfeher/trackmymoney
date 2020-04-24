class Api::V1::SessionsController < ApplicationController

    # POST TO LOGIN
    def new
        user = User.find_by(email: params[:user][:email])
        
        # VALIDATION FOR NON EXISTING EMAIL ADDRESS
        if !user.nil?
            # binding.pry
            if user.authenticate(params[:user][:password])
                render json: user, include: ["bills"]
            else
                render json: { error: "Invalid creditentials!"}
            end
        else
            render json: { error: "Invalid creditentials!"}
        end

    end

    # POST TO LOGOUT
    def destroy
    end
end