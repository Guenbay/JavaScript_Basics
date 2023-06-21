// Schreibe eine konditionale Anweisung, die überprüft, ob eine Zahl gerade oder ungerade ist,
// und entsprechend eine Nachricht in der Konsole ausgibt.
wert = 33;

function geradeZahl(wert)
{
  if (wert % 2 == 0)
    {
      console.log("Die Zahl" + wert + "ist gerade.");
      return true;    
    }
  else
    {
      console.log("Die Zahl " + wert + "ist ungerade.");
      return false;
    }
}



//let zahl = 23;
//if (zahl % 2 === 0) {
//    console.log(zahl + " ist eine gerade Zahl.");
//} else {
//    console.log(zahl + " ist eine ungerade Zahl.");
//}