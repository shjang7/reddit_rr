class User < ApplicationRecord
  attr_accessor :remember_token
  before_create :generate_token
  before_save :downcase_email
  before_save :downcase_username

  acts_as_voter
  has_secure_password
  has_many :links, dependent: :destroy
  has_many :comments, dependent: :destroy

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :username, length: { minimum: 4, maximum: 50 }
  validates :email, presence: true, length: { maximum: 255 },
                    uniqueness: { case_sensitive: false }
  validates :password, presence: true, length: { minimum: 4 }

  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

  def self.digest(string)
    cost = ActiveModel::SecurePassword.min_cost ? BCrypt::Engine::MIN_COST :
                                                  BCrypt::Engine.cost
    BCrypt::Password.create(string, cost: cost)
  end

  def generate_token
    self.remember_token = SecureRandom.urlsafe_base64
  end

  def update_token
    update_attribute(:remember_token, hex_encrypt(remember_token))
  end

  def authenticated?(token)
    hex_encrypt(token) == remember_token
  end

  def hex_encrypt(token)
    Digest::SHA1.hexdigest(token.to_s)
  end

  private

  def downcase_email
    email.downcase!
  end

  def downcase_username
    username.downcase!
  end
end
