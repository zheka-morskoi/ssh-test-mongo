const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a58ed11532f93334435a7ad';
// var id = '6a58ed11532f93334435a7ad';
// var id = '5a58ed11532f93334435a7ad11';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

////1
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
// //2
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });


//3
// Todo.findById(id).then((todo) => {
//   console.log('Todo By Id', todo);
// });
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// });
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


//User.findById

User.findById('5964f5d110f7410398b5c33f').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
