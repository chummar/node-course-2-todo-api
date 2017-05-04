const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');


var id = '590b4c19fc6171dc498a0a20';

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove(id).then((todo) => {
  console.log(todo);
});
