class CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render json: @comments
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment
    end

    def create
        @comment = Comment.create(comment_params)
        render json: @toy
    end

    def updated
        @comment = Comment.find(params[:id])
        @comment.update(comment_params)
        render json: @comment
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy
        render json: @toy
    end

    private
    def comment_params
        params.permit(:user_id, :blog_id, :content)
    end

end
