const ul = document.getElementById("contacts"),
  fragment = document.createDocumentFragment();


async function fetchReq (url) {
  try {
    let res = await fetch(url),
    json = await res.json();
    if (!res.ok) throw ({status: res.status, msg: res.statusText || "Ha ocurrido un error :c"}); 
    json.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = `${el.name} --- ${el.username} --- ${el.phone}`;
    fragment.appendChild(li);
  })
  ul.appendChild(fragment);
  }
  catch (err){
    ul.outerHTML = `<p> ${err.status}: ${err.msg} </p>`
  }
}

fetchReq("https://jsonplaceholder.typicode.com/users");
