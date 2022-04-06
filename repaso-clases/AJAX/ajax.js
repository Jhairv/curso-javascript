const httpDiv = document.getElementById("http-container"),
  httpFragment = document.createDocumentFragment(),
  usersTable = document.getElementById("users-table");

// peticion asincrona con el objeto httprequest
// creacion del objeto httprequest
const http = new XMLHttpRequest();
// console.log(http);
// ejecutar el evento onReadyStateChange ya que contiene a todos los demas eventos
// ya que se ejecuta cuando ha detectado un cambio en el estado

http.addEventListener("readystatechange", (e) => {

  //validar el estado del objeto http

  if (http.readyState != 4) return;

  //validar el codigo de la peticion

  if (http.status >= 200 && http.status < 300){
    //transformar la respuesta a json
    let json = JSON.parse(http.responseText);
    json.forEach((el) => {
      let row = document.createElement("tr");
      row.innerHTML = `
        <tr> 
          <td> ${el.id} </td>
          <td> ${el.name}</td>
          <td> ${el.address.suite}</td>
        </tr>
      `
      httpFragment.appendChild(row);
    })
    usersTable.appendChild(httpFragment);
  } 
  else {
    const p = document.createElement("p")
    let msg = http.statusText || "Ha ocurrido un error";
    p.textContent = msg;
    httpDiv.appendChild(p);
    console.log(http);
  }


})

// abrir la peticion
// especificar el metodo y la url

http.open("GET", "https://jsonplaceholder.typicode.com/users");

// enviar la peticion

http.send();
