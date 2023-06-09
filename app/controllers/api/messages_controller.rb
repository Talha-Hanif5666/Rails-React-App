class Api::MessagesController < ApplicationController
    def index
      @message = Message.order("RANDOM()").first
      render plain: @message.content 
    end
  end
  