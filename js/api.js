function loadData() {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((json) => console.log(json.fact));
}
