import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const uri =
    "mongodb+srv://whdudqls12:J5oXXEScVAWJkNag@cluster0.y9duvu0.mongodb.net/?retryWrites=true&w=majority";

  const client = await MongoClient.connect(uri);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
