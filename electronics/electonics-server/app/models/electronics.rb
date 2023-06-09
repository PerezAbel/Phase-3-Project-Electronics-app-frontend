class Electronic < ActiveRecord::Base

    validates :device, :price, :image, presence: true
    validates :price, numericality: { greater_than: 0 }
  
    def formatted_price
      "$#{price}"
    end
  end
  