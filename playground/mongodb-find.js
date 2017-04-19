// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
  //
  // db.collection('Todos').find(
  //   { _id: new ObjectID('58f7c2562a3a132798bbcfe6')
  //   }
  // ).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // }, (err) => {
  //
  // });


    db.collection('Todos').find()
                          .count().then((count) => {
      console.log(`Todos count ${count}`);
      
    }, (err) => {

    });


 db.close();
});
