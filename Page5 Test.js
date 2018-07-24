const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/sara';

const content = document.getElementById('content');
const text = document.getElementById('text');
const submit = document.getElementById('submit');

getComments();
// getEmail();










async function getComments() {
  var resp = await fetch(url);
  var comments = await resp.json();
  var html = "";
  comments.forEach(function(comment){
    html = html + "<div>";
    html = html + `<span>Message: ${comment.message}</span>`;
    html = html + "</div>";
    html = html + "<div>";
    html = html + `<span>Submitted by: ${comment.email}</span>`;
    html = html + "</div>";
    html = html + "<div>";
    html = html + `__________________________________________________________`;
    html = html + "</div>";
  });
  content.innerHTML = html;
  console.log(html);
}

submit.addEventListener('click', function() {
  postComments([{"message": text.value}]);
  // postEmail([{"email": text.value}]);
});

async function postComments(comment) {
  var resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    // body: JSON.stringify(email),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  getComments();
}

// async function postEmail(email) {
//   var resp = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(email),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//     }
//   });
//   getEmail();
// }

// var content = document.getElementById('content');
// var text = document.getElementById('text');
// var submit = document.getElementById('submit');
//
// getToDos();
//
// // conent.addEventListener('click', function(){
// //   if event.target.className === "completeTask") {
// //     putToDo([{
// //       id: event.target.id,
// //       completed: true
// //     }]);
// //   }
// // });
//
// async function getToDos() {
//   var resp = await fetch(url);
//   var todos = await resp.json();
//   var html = "";
//   todos.forEach(function(todo){
//     html = html + "<div>";
//     html = html + `<span>${todo.task}</span>`;
//     html = html + "</div>";
//   });
//   content.innerHTML = html;
//   console.log(html);
// }
//
// submit.addEventListener('click', function() {
//   postToDos([{"task": text.value}]);
// });
//
// async function postToDos(todo) {
//   var resp = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(todo),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8"
//     }
//   });
//   getToDos();
// }
