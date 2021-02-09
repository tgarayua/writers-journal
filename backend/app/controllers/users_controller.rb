class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def create
        @user = User.create(user_params)
        render json: @user
    end

    def updated
        @user = user.find(params[:id])
        @user.update(user_params)
        render json: @user
    end

    def destroy
        @user = user.find(params[:id])
        @user.destroy
        render json: @toy
    end

    private
    def user_params
        params.permit(:username, :email, :password, :first_name, :last_name)
    end

end
