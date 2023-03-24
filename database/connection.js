const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://kpranit0134:PranitK@cluster0.v0f64ar.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(url);

const insertToDB = async (data) =>{
   try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection =  database.collection('employee');
    const dbResponce = await collection.insertMany(data);
    await client.close();
    return dbResponce
   }catch(err) {
    return err.message
   }
}

const findDB = async () =>{
   try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection =  database.collection('employee');
    const dbResponce = await collection.find({$and:[{'yearGrad':{$gt:'2015'}},{'overallExp':{$gt:'1'}}]}).toArray();
   //  const dbResponce = await collection.find({'overallExp':{$gt:'2'}}).toArray();
   //  const dbResponce = await collection.find({'salary':{$gt:'35000'}}).toArray();
    await client.close();
    return dbResponce
   }catch(err) {
    return err.message
   }
}

const updateDB = async () =>{
   try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection =  database.collection('employee');
    const dbResponce = await collection.updateMany({"department":"HR"},{$set:{'salary':'45000'}});
    await client.close();
    return dbResponce
   }catch(err) {
    return err.message
   }
}

const deleteDB = async () =>{
   try {
    await client.connect();
    const database = client.db("Human_Resource");
    const collection =  database.collection('employee');
    const dbResponce = await collection.deleteMany({'lastCompany':'Y'});
    await client.close();
    return dbResponce
   }catch(err) {
    return err.message
   }
}

module.exports = {insertToDB,findDB,updateDB,deleteDB}