/*alert('calcul');
do
var n = parseInt(prompt('Saisir un nombre'));
while(isNaN(n)) 


do
var c = parseInt(prompt('Saisir un deuxieme nombre'));
while(isNaN(c))

 
do
var s = prompt('saisir un signe parmis : +, -, *, /')
while(!(s != '+' || s != '-' || s != '*' || s != '/'))*/



/*var s = prompt('Saisir un signe parmis +, -, *, /');
if(c != 0)
{
switch (s)
{   
  case "+" :
     alert("choix +");  
     break; 

  case "-" : 
  alert("choix -"); 
  break;   

  case "*" :
    alert("choix *");  
    
     break;  

  case "/" :
    alert("choix /");  

     break;

  default: 
     alert("ne figure pas ...");
} 
}

else if(c = 0)
{
    switch (s)
    {   
      case "+" :
         alert("choix +");  
         break; 
    
      case "-" : 
      alert("choix -"); 
      break;   
    
      case "*" :
        alert("choix *");  
        
         break;  
    
      default: 
         alert("ne figure pas ...");
    }  
}


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
     window.alert('error div 0 impossible');
}*/

/*var n = 0;
var saisi;

do {
  n++;
  saisi =prompt('Saisissez le prénom' +n);
console.log(n);
console.log(saisi);

}  
while(saisi!= "");

var N = 0

while (true) {
  console.log(N);

  if(n == N) {
      break;
    }
    
    N++
}*/



/*var numb;
var somme = 0;
var all = Array();
var entier = 15;
do {
  numb = entier--;
    //document.write(' nombre ' , numb, ' ');
    //emp++;
    all.push(numb);
    console.log(all);
}
while (numb != 0)

var taille = 0
var somme;

do {
  somme = somme + all[taille];
  taille++; 
}
while(taille < 16 )

document.write('Somme = ' ,somme);
document.write(' moyenne : ' ,somme/16);*/

/*var N = 5;
var X = 7;
var mul = 1


do { 
  document.write('7x',mul ,'=' ,X * mul,' ');
  mul++;
}
while(N >= mul)*/


/*
var lettre = prompt('écrire un mot')
var tableau = [];
var y;
var nb = lettre.length;
//alert(nb);
var i = 0;
for(i=0; i<nb; i++)
{
  var one = lettre.substr(i,1);
  
  //alert(one);
  
  if(y = one.match(/[aeiou]/g));
   {
     if (y != null) {
      console.log('-1');
      tableau.push(y);
     }
  }
  
  console.log(tableau);

 }
 document.write('nombre de voyelle : ' ,tableau.length); */

var chemin=prompt("chemin ");




 function maFonction(x) 
    {

      var ton_chemin=x;

      alert("voici ton chemin : " +ton_chemin );

     var plop1 = 123;       
       return plop1;
    }

    function maFonction2() 
    {
       plop2 = 456;     
    }

    maFonction(chemin);





    plop1 = maFonction();

    console.log("fonction 1 / plop1 : "+plop1);

    maFonction2();

    console.log("mafonction2 > plop2 : "+plop2);