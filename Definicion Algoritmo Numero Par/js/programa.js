document.write("Programa para determinar si un número es par:<br/>");

var num = parseInt(prompt("Proporciona un número:", 1));

if (num >= 0) {
    if(num%2 == 0){
        document.write("SI es un número par </br>");
    } else {
        document.write("NO es un número par </br>"); 
    }
} else {
    document.write("Proporciona un número positivo</br>");
}
document.write("El valor proporcionado fue: " + num);
