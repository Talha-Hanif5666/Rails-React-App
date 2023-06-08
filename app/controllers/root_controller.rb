class RootController < ApplicationController
  def index; end

  def welcome
    render json: Message.all.sample(1).first
  end
end
