class BlogsController < ApplicationController

    def index
        @blogs = Blog.all
        render json: @blogs
    end

    def show
        blog = Blog.find(params[:id])
        render json: blog
    end

    def create
        @blog = Blog.create(blog_params)
        render json: @blog
    end

    def updated
        @blog = Blog.find(params[:id])
        @blog.update(blog_params)
        render json: @blog
    end

    def destroy
        @blog = Blog.find(params[:id])
        @blog.destroy
        render json: @blog
    end

    private
    def blog_params
        params.permit(:user_id, :title, :content)
    end

end
