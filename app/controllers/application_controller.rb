class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    before_action :normalize_keys!
    helper_method :current_user

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
        @current_user = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def normalize_keys!(val = params)
        if val.class == Array
            val.map { |v| normalize_keys! v }
        else
            if val.respond_to?(:keys)
            val.keys.each do |k|
                current_key_value = val[k]
                val.delete k
                val[k.to_s.underscore] = normalize_keys!(current_key_value)
            end
            end
            val
        end
        val
    end
end

