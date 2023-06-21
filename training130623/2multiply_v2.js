//Schreibe eine Funktion mit dem Namen multiply, die zwei Zahlen multipliziert und das Ergebnis zurückgibt. 
//Teste die Funktion mit verschiedenen Eingabewerten.

//verson und möglichkeit 2.1

x = 5;
y = 4;
z = 0.5;

function multiply([x],[y],[z])
{
    summe = x * y * z;
    return summe;   
}

console.log("Version 1: Das Ergebnis ist: "+ multiply([x],[y],[z]));


//Version und möglichkeit 2.2 ist der Zugriff auf die function 1

function multiplikation (multiply)
{
    return summe;

}

console.log("Version 2: Das Ergebnis ist " + multiplikation(multiply) + ".")
