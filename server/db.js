const mongoose = require("mongoose");
const dns = require("node:dns");

dns.setServers([
  "8.8.8.8",
  "1.1.1.1"
]);

const uri = process.env.ATLAS_URI;


async function connectDB() {
 try {
   await mongoose.connect(uri);
   console.log("You are successfully connected to MongoDB!");
   console.log('Banco conectado:', mongoose.connection.name);
 } catch (error) {
   console.log(error);
 }
}
module.exports = connectDB;