const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/sara';

const content = document.getElementById('content');
const text = document.getElementById('text');
const submit = document.getElementById('submit');
const email = document.getElementById('email');


getComments();
// getEmail();

async function getComments() {
  var resp = await fetch(url);
  var comments = await resp.json();
  var html = "";
  comments.forEach(function(comment){
    html += "<div>";
    html += `<span>Message: ${comment.message}</span>`;
    html += "</div>";
    html += "<div>";
    html += `<span>Submitted by: ${comment.email}</span>`;
    html += "</div>";
    html += "<div>";
    html += `__________________________________________________________`;
    html += "</div>";
  });
  content.innerHTML = html;
  console.log(html);
}

submit.addEventListener('click', function() {
  postComments([{
    "message": text.value,
    "email": email.value,
  }]);
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
  text.value = "";
  getComments();
}
