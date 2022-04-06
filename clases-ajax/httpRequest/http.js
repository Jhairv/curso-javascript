const table = document.getElementById("users-table"),
  fragment = document.createDocumentFragment();

// 1._ Instanciar el objeto
const http = new XMLHttpRequest();

http.addEventListener("readystatechange", (e) => {
  if (http.readyState !== 4) return;

  const json = JSON.parse(http.responseText);

  json.forEach((el) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td> ${el.name} </td> 
      <td> ${el.email} </td>
      <td> ${el.address.city} </td>
    `;
    fragment.appendChild(row);
  })
  table.appendChild(fragment);
  console.log(json);
});

http.open("GET", "./data/example.json");

http.send();


