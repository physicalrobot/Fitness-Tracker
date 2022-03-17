class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

  get "/routines" do
    routines = Routine.all.order(:id)
    routines.to_json
  end

  get "/workouts" do
    workouts = Workout.all.order(:created_at)
    workouts.to_json
  end

  get "/workouts/:group" do
    workout = Workout.where(group: params[:group])
    workout.to_json(only: [:name, :body])
  end

  get "/days" do
    days = Day.all.order(:created_at)
    days.to_json
  end

  get "/day-workout" do
      @days = Day.all
      @days.to_json ({include: [{ routines: { include: [:workout], except: [:workout_id, :day_id, :created_at, :updated_at] }
    }]})
  end

  post "/day-workout" do
    days = Day.create(name: params[:name])
    days.to_json
  end

  post "/days" do
    days = Day.create(name: params[:name])
    days.to_json
  end

  post "/workouts" do
    workouts = Workout.create(group: params[:group], body: params[:body], name: params[:name])
    workouts.to_json
  end

  post "/routines" do
    routines = Routine.create(name: params[:name], day_id: params[:day_id], workout_id: params[:workout_id] )
    routines.to_json
  end

  patch "/routines" do
    routines = Routine.find(day_id: params[:day_id], workout_id: params[:workout_id] )
    routines.update(day_id: params[:day_id], workout_id: params[:workout_id])
    routines.to_json
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


end
