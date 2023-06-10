puts "🌱 Seeding messages..."

# Creating electronic records using create or create!
Electronic.create(device: "Laptop", price: 300000, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFjfGVufDB8fDB8fHww&w=1000&q=80")
Electronic.create(device: "Smartphone", price: 150000, image: "https://cdn.mos.cms.futurecdn.net/QWRX5D22ak5rgDhWPZ9o7Q.jpg")
Electronic.create(device: "Fridge", price: 500000, image: "https://www.techadvisor.com/wp-content/uploads/2023/02/best-fridges_23.jpg?quality=50&strip=all")
Electronic.create(device: "Washing Machine", price: 75000, image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80")
Electronic.create(device: "Headphones", price: 35000, image: "https://biasharaplace.co.ke/wp-content/uploads/2021/03/Sennheiser-HD-450-Bluetooth-Headphones.jpg")
Electronic.create(device: "iPad", price: 165000, image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBpcGFkJTIwcHJvfGVufDB8fDB8fHww&w=1000&q=80")
Electronic.create(device: "Microwave", price: 27000, image: "https://www.bria.com.ph/wp-content/uploads/2023/01/oven-toaster-compared-to-microwave-oven.png")

puts "✅ Done seeding!"
