class User < ApplicationRecord
  attr_accessor :remember_token
  has_secure_password
  has_many :links, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4 }
  validates :email, presence: true
  validates :email, uniqueness: true

  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  before_create :generate_token
  before_save :downcase_email

  def generate_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

  def update_token
    update_attribute(:remember_token, remember_token)
  end

  def authenticated?(token)
    token == remember_token
  end

  private

  def downcase_email
    email.downcase!
  end
end
