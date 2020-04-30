class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :link

  default_scope -> { order(created_at: :desc) }

  validates :body, presence: true
end
