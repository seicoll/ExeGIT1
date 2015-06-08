

document.addEventListener("DOMContentLoaded", function(event) { 
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var numeros = "1234567890".split("");
    var frase = prompt("Introdueix una frase");
    var numLletres = 0;
	var numNumeros = 0;
    
    for (i=0; i < frase.length; i++)
    {
        //document.write(i + "-" + frase[i] +"<br>");
        
        if (alphabet.indexOf(frase[i]) != -1)   //Si  es troba la lletra a l'array alphabet
        {
			//Augmentem el numero de lletres
            numLletres++
        }
		
		if (numeros.indexOf(frase[i]) != -1)   //Si  es troba el caracter a l'array numeros
        {
            numNumeros++
        }
    }
    
    //document.write("<p>S'han trobat " + numLletres +" lletres en la frase introduïda.</p>")
    document.getElementsByTagName("p")[0].innerHTML = "S'han trobat " + numLletres +" lletres i "+ numNumeros+ " números en la frase introduïda."
});