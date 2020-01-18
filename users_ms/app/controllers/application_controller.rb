class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordNotFound, with: :handle_notfound
    # rescue_from Exception, with: :handle_exception
    
    private
    def handle_notfound(exc)
        puts exc
        render json: { error: "Resource doesn't exist" }, status: :not_found
    end

    def handle_exception(exc)
        puts exc
        render json: { error: "Internal server error" }, status: :internal_server_error
    end
end
