class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :link

  validates :body, presence: true
end
