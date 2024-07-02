function totalExperiencia(precioPorPersona, cantPersonas) {
    return precioPorPersona * cantPersonas;
}

function precioEnCuotas(valorTotal, opcionCuotas) {
    return valorTotal / opcionCuotas;
}

function decimal(numero) {
    return numero.toLocaleString('es-AR', { minimunFractionDigits: 2, maximumFractionDigits: 2 });
}

function valor() {
    let opcionExperiencia = prompt('Bienvenido a WeGift, ¿qué experiencia desea disfrutar? \n 1) Cena en Rooftop $40000 por persona \n 2) Merienda en el Hotel Duhau $15000 por persona \n 3) Almuerzo con vista al Río $30000 por persona\n \n4) Para cancelar la compra \n\nIngrese la opción deseada');
    switch (opcionExperiencia) {
        case '1':
            precioPorPersona = 40000;
            break;
        case '2':
            precioPorPersona = 15000;
            break;
        case '3':
            precioPorPersona = 30000;
            break;
        case '4':
            alert('Compra cancelada. ¡Hasta luego!');
            return;
        default:
            alert('Ingrese una opción valida')
            valor();
            return;
    }

    if (opcionExperiencia === '1' || opcionExperiencia === '2' || opcionExperiencia === '3') {
        let cantPersonas = parseInt(prompt('Por favor ingrese la cantidad de personas que van a disfrutar de la experiencia'));
        let valorTotal = totalExperiencia(precioPorPersona, cantPersonas);
        let opcionCuotas = parseInt(prompt('La compra se puede realizar en 1 , 3 y 6 Cuotas sin interes \n Ingrese en cuantas cuotas desea realizar la compra'));

        if (opcionCuotas === 1 || opcionCuotas === 3 || opcionCuotas === 6) {
            let cuotas = precioEnCuotas(valorTotal, opcionCuotas);
            alert(`el Valor total de la Experiencia es de $${decimal(valorTotal)}, lo abonaras en ${opcionCuotas} cuotas de $${decimal(cuotas)}`);
        }
        else {
            alert('Ingrese una opción válida para las cuotas.');
            valor();
            return;
        }
    }

    else if (opcionExperiencia === '4') {
        alert('Compra cancelada. Lo esperamos la proxima!')
    }

    else {
        (opcionExperiencia === '' || NaN || opcionExperiencia < 4 || opcionExperiencia === 'undifined')
        alert('Elija una opción válida')
        valor();
    }
}

valor()
