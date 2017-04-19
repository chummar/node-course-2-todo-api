// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

  if(err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('58f7cd39256ff88ef0fea8c0')
// }, {
//   $set: {
//     completed: false
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('58f7c312e0c1af06507ab645')
}, {
  $set: {
    name: 'C Maly'
  },
  $inc: {age: 1
    },
},
{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});


 db.close();
});
