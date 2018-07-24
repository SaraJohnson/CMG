const url = 'https://us-central1-omg-codemygear.cloudfunctions.net/comments/sara';

const content = document.getElementById('content');
const text = document.getElementById('text');
const submit = document.getElementById('submit');

getComments();


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
