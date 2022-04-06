const ul = document.getElementById("contacts"),
  fragment = document.createDocumentFragment();

console.log(window);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.ok ? 
    res.json() : 
    Promise.reject({status: res.status, msg: res.statusText || "Ha ocurrido un error"}))
  .then(json => {
    json.forEach((el) => {
      let li = document.createElement("li");
      li.textContent = `${el.name} --- ${el.username} --- ${el.phone}`;
      fragment.appendChild(li);
    });
    ul.appendChild(fragment);
    console.log(json)
  })
  .catch(err => {
    ul.outerHTML = `<p> ${err.status}: ${err.msg} </p>`
  });
