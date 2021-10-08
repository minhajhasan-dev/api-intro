function loadData() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((json) => console.log(json.fact));
}
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function displayUsers(data) {
  console.log(data);
}
