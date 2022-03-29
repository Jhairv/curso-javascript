const obj = {
    nombre: "Jhair",
    apellido: "Vasquez",
    curso: "3ro",
    paralelo: "A",
};

Date.prototype.restDays = function restDays(date1, date2) {
    let Date1 = new Date(date1);
    let Date2 = new Date(date2);

    let difference = Date1.getTime() - Date2.getTime();

    let days = difference / (1000 * 60 * 60 * 24);

    return days;
};

let day = new Date();

console.log("dias de diferencia", day.restDays("2022-03-20", "2022-03-05"));

// console.log(day.getTime());

// console.log(restDays("2022-03-20", "2022-02-05"));

// console.dir(console);

// console.dir(Date);

// console.log(now.getTime());

// console.log(now.getFullYear());

// console.log(now.toLocaleTimeString());

console.log(Math.ceil(Math.random() * 10));
