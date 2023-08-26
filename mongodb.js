// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.Mongodb_URL;
const client = new MongoClient(url);

// Database Name
const dbName = 'task-manager'

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    // const collection = db.collection('users');

    // const insertResult = await collection.insertOne({ name:'Rajvi', age:21 });
    // console.log('Inserted documents =>', insertResult);

    // const insertResult=await db.collection('tasks').insertMany([{description:'Task 1',completed:true},
    // {description:'Task 2',completed:false},
    // {description:'Task 3',completed:true}])

    // console.log('Inserted documents =>', insertResult);
  
    // const users=await db.collection('tasks').updateMany({},{$set:{completed:true}})

    // console.log(users)
      const deleteuser=await db.collection('tasks').deleteOne({description:'Task 3'})
      console.log(deleteuser)
  
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
