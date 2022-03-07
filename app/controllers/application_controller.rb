class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/workouts" do
    workouts = Workout.all.order(:created_at)
    workouts.to_json

  end

  # post "/messages" do
  #   message = Message.create(body: params[:body], username: params[:username])
  #   message.to_json
  # end
  
  # patch "/messages/:id" do
  #   message = Message.find(params[:id])
  #   message.update(body: params[:body])
  #   message.to_json
  # end
  
  delete "/workouts/:id" do
    workout = Workout.find(params[:id])
    workout.destroy
    workout.to_json
  end

  get "/workouts/:group" do
    workout = Workout.where(group: params[:group])
    workout.to_json(only: [:name, :body])
  end



end
