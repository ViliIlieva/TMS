const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/TMS";
const mongoose = require('mongoose');

const client = new MongoClient(uri);
// const {Freelancers} = require('./db/models/Freelancer.model');

async function run() {
    try {
      mongoose.connect("mongodb://127.0.0.1:27017")
      console.log("Connect to MongoDB");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);


  // const fs = require('node:fs');
  // fs.readFile('./db/freelancer.json', "utf8", (err, jsonString) => {
  //   if (err) {
  //     console.log("File read failed:", err);
  //     return;
  //   }
  //   // try {
  //   //   const jsonString = fs.readFileSync('./db/freelancer.json');
  //   //   const customer = JSON.parse(jsonString);
  //   //   console.log('Customer name is:', customer.name )
  //   // }catch (err) {
  //   //   console.log("Error parsing JSON string:", err);
  //   // }
  //   console.log("File data:", jsonString);
  // });

  module.exports = {run}

  