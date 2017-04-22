const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');


var id = '68fa757354dc5f14201e0cb711';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if(!todos) {
//     return console.log('Id not found!');
//   }
//   console.log('Todos', todos);
// });
//
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo FindOne', todo);
// });


// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));
var id = '58f8c258b57e7390333bcf12';

User.findById(id).then((user) => {
  console.log('found user');
},(e) => {
  console.log('User not found');
});
