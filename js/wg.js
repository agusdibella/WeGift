function totalExperiencia(precioPorPersona, cantPersonas) {
    return precioPorPersona * cantPersonas;
}

function precioEnCuotas(valorTotal, cantCuotas) {
    return valorTotal / cantCuotas;
}

function valor() {
    let opcionExperiencia = prompt('Bienvenido a WeGift, ¿qué experiencia desea disfrutar? \n 1) Cena en Rooftop $40000 por persona \n 2) Merienda en el Hotel Duhau $15000 por persona \n 3) Almuerzo con vista al Río $30000 por persona\n\nIngrese la opción deseada');
    if (opcionExperiencia === '1') {
        let precioPorPersona = 40000;
        let cantPersonas = parseInt(prompt('Por favor ingrese la cantidad de personas que desea'))
        let valorTotal = totalExperiencia(precioPorPersona, cantPersonas);
        let cantCuotas = parseInt(prompt('La compra se puede realizar en 1 , 3 y 6 Cuotas sin interes \n Ingrese en cuantas cuotas desea realizar la compra'));
        if (cantCuotas === 1) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en una cuota de $${valorEnCuotas}`);
        } else if (cantCuotas === 3 || cantCuotas === 6) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en ${cantCuotas} cuotas de $${valorEnCuotas}`);
        }
        else {
            alert('La cantidad de cuotas es inválida')
        }


    } else if (opcionExperiencia === '2') {
        let precioPorPersona = 15000;
        let cantPersonas = parseInt(prompt('Por favor ingrese la cantidad de personas que desea'))
        let valorTotal = totalExperiencia(precioPorPersona, cantPersonas);
        let cantCuotas = parseInt(prompt('La compra se puede realizar en 1 , 3 y 6 Cuotas sin interes \n Ingrese en cuantas cuotas desea realizar la compra'));
        if (cantCuotas === 1) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en una cuota de $${valorEnCuotas}`);
        } else if (cantCuotas === 3 || cantCuotas === 6) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en ${cantCuotas} cuotas de $${valorEnCuotas}`);
        }
        else {
            alert('La cantidad de cuotas es inválida')
        }


    } else if (opcionExperiencia === '3') {
        let precioPorPersona = 30000;
        let cantPersonas = parseInt(prompt('Por favor ingrese la cantidad de personas que desea'))
        let valorTotal = totalExperiencia(precioPorPersona, cantPersonas);
        let cantCuotas = parseInt(prompt('La compra se puede realizar en 1 , 3 y 6 Cuotas sin interes \n Ingrese en cuantas cuotas desea realizar la compra'));
        if (cantCuotas === 1) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en una cuota de $${valorEnCuotas}`);
        } else if (cantCuotas === 3 || cantCuotas === 6) {
            let valorEnCuotas = precioEnCuotas(valorTotal, cantCuotas);
            alert(`el Valor total de la Experiencia es de $${valorTotal}, lo abonaras en ${cantCuotas} cuotas de $${valorEnCuotas}`);
        }
        else {
            alert('La cantidad de cuotas es inválida')
        }
    }

    else {
        (opcionExperiencia === '' || NaN || opcionExperiencia < 4 || opcionExperiencia === 'undifined')
        alert('Elija una opción valida');
      }
}

valor()


