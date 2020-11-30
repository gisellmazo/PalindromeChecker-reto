/*let input = document.getElementsByClassName('.input').value;

let boton = document.querySelector('button');*/

//Creamos la función
function palindrome(str) {
    return ( //Cuando llamemos la funcion va a retornar lo siguiente
      str.replace(/[\W_]/g, "").toLowerCase() === //Remplaza cada tipo de caracter a minuscula
      str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")//Elimina los espacios en este string
        .reverse()//Invierte el nombre de los elementos
        .join("")//Une los elementos en una misma cadena
    );
  }

 /* function clickBoton(){
      console.log(`${input} es un palindromo ` + palindrome(`${input}`))
  }

  boton.addEventListener('click', clickBoton)*/
  

  console.log(`"eye" es un palindromo `+ palindrome("eye"));

  console.log(`"_eye" es un palindromo `+ palindrome("_eye"));

  console.log(`"race car" es un palindromo `+ palindrome("race car"));

  console.log(`"not a palindrome" es un palindromo `+ palindrome("not a palindrome"));

  console.log(`"A man, a plan, a canal. Panama" es un palindromo `+ palindrome("A man, a plan, a canal. Panama"));

  console.log(`"never odd or even" es un palindromo `+ palindrome("never odd or even"));

  console.log(`"nope" es un palindromo `+ palindrome("nope"));
  
  console.log(`"almostomla" es un palindromo `+ palindrome("almostomla"));

  console.log(`"My age is 0, 0 si ega ym." es un palindromo `+ palindrome("My age is 0, 0 si ega ym."));

  console.log(`"1 eye for of 1 eye." es un palindromo `+ palindrome("1 eye for of 1 eye."));
  
  console.log(`""0_0 (: /-\ :) 0-0" es un palindromo `+ palindrome("0_0 (: /-\ :) 0-0"));

  console.log(`"five|_/|four" es un palindromo `+ palindrome("five|_/|four"));