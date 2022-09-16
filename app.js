var importowanie = localStorage.getItem('licznik')
if(importowanie != 0 || importowanie != null){
    var licznik = importowanie
}
else{
    licznik = 0
}

function Cookie_Clicked(){
    document.getElementById("Cookie").id = "Cookie-Clicked"
    setTimeout(Cookie_Repair, 75)
    licznik_ciastek()
}
function Cookie_Repair(){
    document.getElementById("Cookie-Clicked").id = "Cookie"
}
function licznik_ciastek(){
    var licznik_skr = 0
    licznik++
    localStorage.setItem('licznik', licznik)
    zmianaTextu()
}
function zmianaTextu(){
    if(licznik<1000){
        document.getElementById("licznik").innerHTML = licznik
    }
    if(licznik>=1000){
        licznik_skr = licznik / 1000
        document.getElementById("licznik").innerHTML = licznik_skr.toFixed(2) + "k"
    }
    if(licznik>=1000000){
        licznik_skr = licznik / 1000000
        document.getElementById("licznik").innerHTML = licznik_skr.toFixed(2) + "mln"
    }
    if(licznik>=1000000000){
        licznik_skr = licznik / 1000000000
        document.getElementById("licznik").innerHTML = licznik_skr.toFixed(2) + "mld"
    }
}

function reset(){
    licznik = 0
    localStorage.setItem('licznik', licznik)
    document.getElementById("licznik").innerHTML = licznik
}

function Spadajace_ciastka(){
    licznik = 0
    localStorage.setItem('licznik', licznik)
    document.getElementById("licznik").innerHTML = licznik
}

function Auto_Cookie(){
    setTimeout(Cookie_Clicked, 3000)
    setTimeout(Auto_Cookie, 5000)
}

function start(){
    zmianaTextu()
    Auto_Cookie()
}


var cookies = {
    set(liczba) {
        licznik = liczba
        localStorage.setItem('licznik', licznik)
        zmianaTextu()
        console.log("Ustawiono");
    },
    add(liczba) {
        licznik += liczba
        localStorage.setItem('licznik', licznik)
        zmianaTextu()
        console.log("Dodano");
    },
    reset() {
        licznik = 0
        localStorage.setItem('licznik', licznik)
        zmianaTextu()
        console.log("Zresetowano");
    },
};