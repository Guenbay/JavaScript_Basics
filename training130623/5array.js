// Erstelle ein Array mit den Zahlen 1, 2, 3, 4, 5. 
// Schreibe eine Schleife, die die Summe aller Zahlen im Array berechnet und das Ergebnis in der Konsole ausgibt.

const array = [1,2,3,4,5];
var summe = 0;

for (i = 0; i < array.length; i++)
{
    summe += array[i];
}
console.log("Die Summe aller Zahlen im Array: " + summe);
console.log("Inhalt-Ausgabe des Array: " + array);
console.log("Insgesamte Anzahl des Arrays: " + array.length);

//var array = [1, 2, 3, 4, 5];
//var summe = 0;
//for (var i = 0; i < zahlenArray.length; i++) {
//    summe += array[i];
//  }
//console.log("Die Summe aller Zahlen im Array beträgt: " + summe);