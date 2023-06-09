class Api::MessagesController < ApplicationController
    def index
      @message = Message.order("RANDOM()").first
      @greeting = @message.content
    end
  end
  