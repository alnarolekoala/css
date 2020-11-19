/*var a = window.prompt("écrire un nombre");


if(a%2 == 0)
{
    document.write("nombre pair")
}
else
{
    document.write("nompre impair");
} 

var c
var b = window.prompt("quelle est votre année de naissance?");
parseInt(b);
c = 2020 - b;
window.alert('vous avez :' +c+'ans');
if(c >=18){
    window.alert('vous êtes majeur')
}
else {
    window.alert('vous êtes mineur')
}*/
var r
var n = parseInt(prompt('Saisir un nombre'));
var s = prompt('Saisir un signe parmis (+, -, *, /) ');
var c = parseInt(prompt('Saisir un deuxieme nombre'));


if(s == "+") {
    window.alert(n + c);
}

else if(s == '-') {
    window.alert(n - c);
}

else if(s == '*') {
    window.alert(n * c);
}

else if(s == '/'&& c != 0) {
    window.alert(n / c);
}
else {
    window.alert('error');
}




