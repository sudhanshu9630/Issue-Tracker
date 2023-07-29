//const  MongoClient  = require('mongodb').MongoClient;// you can assume this or like line 4
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://sudhanshu:mishra123@cluster0.dldvbte.mongodb.net/tracker';

let db;

async function connectToDatabase() {
  try {
    const mongoClient = await new MongoClient(uri).connect();

    console.log('{jai shree ram} Successfully connected to MongoDB Atlas!');

    db = mongoClient.db('tracker');

  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
    throw error;
  }
}

function getDbConnection() {
  if (!db) {
    throw new Error('MongoDB connection not established. Call connectToDatabase() first.');
  }
  return db;
}

module.exports = { connectToDatabase, getDbConnection };
