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

  module.exports = {run}

  