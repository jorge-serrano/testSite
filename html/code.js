 function sumar( a,b)
{
    return  parseFloat(a)+parseFloat(b);
}
function mostrarSuma()
{
    var i= document.getElementById("a").value;
    var j= document.getElementById("b").value;
    var valorSuma = sumar(i,j);
    document.getElementById("suma").innerHTML  = valorSuma;
}