const divContainer = document.getElementById("fetch-container"),
  ulUsers = document.getElementById("list-users"),
  fragmentAsync = document.createDocumentFragment();



// la api de fetch nos permite realizar peticiones asincronas con promesas


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.ok? res.json(): Promise.reject(res))
  .then(json => {

    json.forEach((el) => {
      let li = document.createElement("li");
      li.innerText = `${el.name} - ${el.email} - ${el.phone}`;
      fragmentAsync.appendChild(li);
    });

    ulUsers.appendChild(fragmentAsync);
    //console.log(json)
  })
  .catch(err => {
    console.log(err);
    let msg = err.statusText || "Ha ocurrio un error unu";

    ulUsers.insertAdjacentText("afterend", msg);
  })
  .finally(() => {
    console.log("Esto se ejcuta se hata completado con exito o no");

  });
