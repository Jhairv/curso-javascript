const raizPromesa = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== "number") {
            reject("el parametro no es un numero");
        }

        setTimeout(() => {
            resolve({
                valor: num,
                resultado: Math.sqrt(num),
            });
        }, 4000);
    });
};

async function raizAsincrona() {
    let raizDeUno = await raizPromesa(4).then((res) => {
        return raizPromesa(res.resultado);
    });

    console.log(raizDeUno.resultado);
}

// raizAsincrona();

const factorialPromise = (num, currentFactorial) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== "number") {
            reject("el parametro no es un numero");
        }

        setTimeout(() => {
            // let resultado = num * (num - 1);
            // let currentFactorial2 = resultado * (num - 1);
            resolve({
                valor: num,
                siguiente: num - 1,
                resultado: num * (num - 1),
                currentFactorial,
            });
        }, 100);
    });
};

const factorialAsincrono = async () => {
    let factorialDeCinco = await factorialPromise(5);
    let factorialDeCinco2 = await factorialPromise(5).then((res) => {
        return factorialPromise(res.siguiente);
    });
    let factorialDeCinco3 = await factorialPromise(5)
        .then((res) => {
            return factorialPromise(res.siguiente);
        })
        .then((res) => {
            return factorialPromise(res.siguiente);
        });
    // .then((res) => console.log(res));
    console.log(factorialDeCinco);
    console.log(factorialDeCinco2);
    console.log(factorialDeCinco3);
};

factorialAsincrono();
