const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/TMS";

const client = new MongoClient(uri);

async function run() {
    try {
        
      console.log("Connect to MongoDB");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);

  module.exports = {run}

  