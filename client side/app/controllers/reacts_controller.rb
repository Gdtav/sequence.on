class ReactsController < ApplicationController
  skip_before_action :authenticate_user!

  # GET /reacts
  # GET /reacts.json
  def index
  end

  # GET /reacts/1
  # GET /reacts/1.json
  def show
  end

  # GET /reacts/new
  def new
    @react = React.new
  end

  # GET /reacts/1/edit
  def edit
  end

  # POST /reacts
  # POST /reacts.json
  def create
    @react = React.new(react_params)

    respond_to do |format|
      if @react.save
        format.html { redirect_to @react, notice: 'React was successfully created.' }
        format.json { render :show, status: :created, location: @react }
      else
        format.html { render :new }
        format.json { render json: @react.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reacts/1
  # PATCH/PUT /reacts/1.json
  def update
    respond_to do |format|
      if @react.update(react_params)
        format.html { redirect_to @react, notice: 'React was successfully updated.' }
        format.json { render :show, status: :ok, location: @react }
      else
        format.html { render :edit }
        format.json { render json: @react.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reacts/1
  # DELETE /reacts/1.json
  def destroy
    @react.destroy
    respond_to do |format|
      format.html { redirect_to reacts_url, notice: 'React was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_react
      @react = React.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def react_params
      params.fetch(:react, {})
    end
end
