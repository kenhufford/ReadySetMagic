class League < ApplicationRecord
    validates :name, presence: true

    belongs_to :commissioner,
    class_name: "User",
    foreign_key: :commissioner_id,

end
