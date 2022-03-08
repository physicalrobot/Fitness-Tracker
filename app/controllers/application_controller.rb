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

  post "/workouts" do
    workouts = Workout.create(group: params[:group], body: params[:body], name: params[:name])
    workouts.to_json
  end

  
  patch "/workouts/:id" do
    workout = Workout.find(params[:id])
    workout.update(body: params[:body])
    workout.to_json
  end
  
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
