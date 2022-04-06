const div = document.getElementById("async-container"),
  ol = document.getElementById("users-list"),
  fragment = document.createDocumentFragment();

const fetchRequest = async (url) => {
  try {

    let res = await fetch(url),
      json = await res.json();
    if (!res.ok){
      throw ({status: res.code, msg: res.statusText || "Ocurrio un error"});
    }

    json.forEach((el) => {
      let li = document.createElement("li");
      li.textContent = `${el.name}, ${el.address.suite}`;
      fragment.appendChild(li);
    });

    ol.appendChild(fragment);


  } catch (err) {
    console.log(err.status, err.msg);

  }

}

fetchRequest("https://jsonplaceholder.typicode.com/users");
