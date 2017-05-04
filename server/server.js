const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos', (req, res) => {
var todo = new Todo({
  text: req.body.text
})
todo.save().then((doc) => {
  res.send(doc);
},(e) => {
  res.status(400).send(e);
})
});

app.get('/todos', (req, res) => {

  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });

});


app.get('/todos/:id', (req, res) => {

  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send(id);
  }

  Todo.findById(id).then((todo) => {
    res.send({todo})
  }, (e) => {
    res.status(400).send();
  }).catch((e) => {res.status(400).send(e)});

});

app.delete('/todos/:id', (req, res) => {

  var id = req.params.id;
  // res.send(id);
  if(!ObjectID.isValid(id)) {
    return res.status(404).send(id);
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    res.send({todo})
  }, (e) => {
    res.status(400).send();
  }).catch((e) => {res.status(400).send(e)});

});

app.patch('/todos/:id', (req, res) => {

  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send(id);
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    })
});

app.listen(port, () => {

  console.log(`Server Started on port ${port}`);

});

module.exports = {app};

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });


// var newTodo = new Todo({
//   text: 'Edit this video'
//
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo',e);
// });


// var newUser = new User({
//   email: 'cmaly@rccl.com '
//
// });
//
// newUser.save().then((doc) => {
//   console.log('Saved User', doc);
// }, (e) => {
//   console.log('Unable to save User',e);
// });
