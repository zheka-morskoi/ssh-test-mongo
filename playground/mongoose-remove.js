const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

//1
/* Todo.remove({}).then((result) => {
  console.log(result);
});
 */

//2

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
//2-1
/* Todo.findOneAndRemove({_id: '5b0de3660fa45618c608c74c'}).then((todo) => {
  console.log(todo);
}); */

//2-2
Todo.findByIdAndRemove("5b0de1580fa45618c608c6af").then(todo => {
  console.log(todo);
});
