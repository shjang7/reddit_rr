class Link < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  acts_as_votable

  default_scope -> { order(created_at: :desc) }

  validates :title, presence: true
  validates :url, presence: true
end
