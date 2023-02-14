/* Filter for "Writing" page*/
// ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDKhzDp+tj6jRmsh2jCMKb12ma9MrLggUTESRSaJamBJspfwXhnBlfQJThA1KOOiFGNNlWbIqbmdULu01hA/TP7vP9v5I7HThvlglmbGHSSSk0PCGQsIm17VacNxsXX9apqYzYiN+ko/BWAEo+tEePpLEl38xWxdOlCDfmK3Y+Id3zr5caiAkANTX0yDOQQpZe1ATL/63n+ysCsPA3Sw3dvILEwEsKnN4NzJd5nqmHU0t+PuZ5HjIdIRylBEKK8kp/XwnzXZAVOFsft9FsxL0cpLyYedib6TDDvUvIT9sKh6zhUFU6OIZWwmSe6yR0d6y5bWTmHDERKrSK6iuF7ZWScAZ3eNnU6Lhs5EO4MwsB5IQQF3OBtfUanQD9DVmIC+lOg2g9NG4Das01EwaZqfjzCX+BOPPkJlUH+FrKOuwIZVK3DEEquYTGjSjZSgii76tm6wWtIs483pMa85LFFKXXtdheboBnU02VfuBQ73yURtEPQGXFTiJuaYX0fk+bSaHU= pi@DDAsitePi
filterBy("all") //Alle elemente erstmal anzeigen
function filterBy(cat) {
    var h, i;
    h = document.getElementsByClassName("filterCard");
    if (cat == "all") cat="";
    for(i=0; i<h.length; i++) { //Wenn i < Anzahl der Elemente (filterCard)
        removeClass(h[i], "show"); //unsichtbar machen
        if(h[i].className.indexOf(cat) > -1) addClass(h[i], "show");
    }
} 

//Gefilterte Elemente sichtbar machen
function addClass(element, name) {
    var i, array1, array2;
    array1 = element.className.split(""); //spaltet alle Teile des Elements auf und gibt als array zrück
    array2 = name.split("");
    for(i=0; i < array2.length; i++) {
        if(array1.indexOf(array2[i]) == -1) { //wenn array2[i] nicht an Stelle x in array 1 zu finden ist
            element.className += "" + array2[i]; //(x+=y -> x = x+y) zeige element / füge es zu sichtbaren hinzu
        } 
    }
}

//Ausgefilterte Elemente entfernen
function removeClass(element, name) {
    var i, array1, array2;
    array1 = element.className.split("");
    array2 = name.split("");
    for(i=0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) { //während array2[i] in array1 an einer Stelle vorkommt
            array1.splice(array1.indexOf(array2[i]), 1); //entferne 1 Element, dass als array2[i] im array1 vorkommt 
        }
    }
    element.className = array1.join(""); //array1 wieder zu element str gejoint
}

/* activer button highlighten*/
var btnContainer = document.getElementById("testBtnContainer");
var btns = btnContainer.getElementsByClassName("filterbtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}