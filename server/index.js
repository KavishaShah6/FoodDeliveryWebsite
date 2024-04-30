// server.js

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));

// Define the User model directly in this file
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Define the Item model for search functionality
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);


// Define the Restaurant model for restaurant search functionality
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  menu: [
    {
      category: String,
      items: [
        {
          name: String,
          price: Number,
          description: String,
        },
      ],
    },
  ],
});

const Restaurant = mongoose.model("Restaurants", restaurantSchema);

// Restaurant search endpoint
app.get("/demo/search-restaurant", async (req, res) => {
  try {
    const restaurantName = req.query.name; // Get the name from query parameter

    // Assuming you have a MongoDB collection named 'restaurants'
    const restaurant = await Restaurant.findOne({ name: restaurantName });

    if (!restaurant) {
      return res
        .status(404)
        .json({ error: "RestaurantNotFound", message: "Restaurant not found." });
    }

    // Send the entire restaurant object in the response
    res.status(200).json(restaurant);
  } catch (error) {
    console.error("Restaurant Search error:", error.message);
    res
      .status(500)
      .json({ error: "ServerError", message: "Error fetching restaurant data." });
  }
});



// Login endpoint
app.post("/demo/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      // User not found, switch to signup mode
      return res.status(401).json({ error: "UserNotFound" });
    }

    if (user.password !== password) {
      // Invalid password
      return res.status(401).json({ error: "InvalidCredentials" });
    }

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "ServerError" });
  }
});

// Signup endpoint
app.post("/demo/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "UserExists" });
    }

    const newUser = new User({ username, password });
    await newUser.save();
    res.json({ message: "Signup successful" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ error: "ServerError" });
  }
});

// Define a route for searching items by name
app.get("/demo/search", async (req, res) => {
  try {
    const itemName = req.query.name; // Get the name from query parameter

    // Assuming you have a MongoDB collection named 'items'
    const item = await Item.findOne({ name: itemName });

    if (!item) {
      return res.status(404).json({ error: "ItemNotFound", message: "Item not found." });
    }

    // Send the item details (name, description, price) in the response
    res.status(200).json({ name: item.name, description: item.description, price: item.price });
  } catch (error) {
    console.error("Search error:", error.message);
    res.status(500).json({ error: "ServerError", message: "Error fetching data." });
  }
});



app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
