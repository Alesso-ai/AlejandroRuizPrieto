//Alejandro Ruiz Prieto
//


document.getElementById('comprobarBtn').addEventListener('click', function() {
    const numeroInput = document.getElementById('numeroInput').value;
    const numero = parseInt(numeroInput);

    if (!isNaN(numero)) {
        if (numero === 0) {
            alert('El número es cero');
        } else if (numero > 0) {
            alert('El número es positivo');
        } else {
            alert('El número es negativo');
        }
    } else {
        alert('Mete un número');
    }
});