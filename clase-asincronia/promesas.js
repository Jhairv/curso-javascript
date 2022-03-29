function promesaSuma(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("alguno de los dos parametros no es un numero");
        }
        setTimeout(() => {
            resolve({
                valores: [a, b],
                resultado: a + b,
            });
        }, 3000);
    });
}

const promesaCuadrado = (a) => {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number") {
            reject("el parametro no es un numero");
        }

        setTimeout(() => {
            resolve({
                valor: a,
                resultado: a * a,
            });
        }, 4000);
    });
};

promesaCuadrado(4)
    .then((res) => {
        console.log(res.valor);
        console.log(res.resultado);
        return promesaSuma(res.resultado, 5);
    })
    .then((res) => {
        console.log(res.resultado);
        return promesaCuadrado(res.resultado);
    })
    .then((res) => {
        console.log(res.resultado);
    })
    .catch((err) => {
        console.error(err);
    });
