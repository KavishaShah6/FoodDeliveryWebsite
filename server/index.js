const express = require('express');


const cors = require('cors');
const mongoose = require('mongoose');

// getting-started.js
// const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://devpatel2122003:mnbvc123@cluster0.ikvgbxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  console.log("DB connected...")
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
  username : String,
  password : String
})

const User = mongoose.model('User', userSchema);



const server = express();
server.use(cors());


server.get('/demo', async (req,res)=>{
//   let user = new User();
// user.username = 'kavisha';
// user.password = '123';
// const doc = await user.save();
// console.log(doc);
  res.send('Hello World');
})

server.listen(8080, ()=>{
  console.log("Server Started...")
})























// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://devpatel2122003:mnbvc123@cluster0.ikvgbxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {0
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB!");

//     const database = client.db("KD"); // Specify the database name
//     const collection = database.collection("food"); // Specify the collection name

//     // Find documents in the collection
//     const cursor = collection.find();

//     // Iterate over the cursor to access documents
//     await cursor.forEach((document) => {
//       console.log(document); // Log each document to the console
//     });
//   } finally {
//     await client.close();
//     console.log("Connection closed.");
//   }
// }

// run().catch(console.dir);
