document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#setCookies").onclick = function(){
        utwurzCiastko("NazwaCiastka", "WartoscCiastka", 50);
        utwurzCiastko("lol", "cos", 50);
        utwurzCiastko("lol2", "cos2", 50);
    }

    document.querySelector("#showCookies").onclick = function(){
        odczytajCiastko("lol");
    }

    document.querySelector("#delCookies").onclick = function(){
        utwurzCiastko("lol", "cos", -1);
    }

});

function utwurzCiastko(nazwa, wartosc, iloscDni){

    // Tworzymy obiekt z klasą Date
    let d = new Date();
    d.setTime(d.getTime()+(iloscDni*24*60*60*1000));
    // Tworzenie ciastka o okreslonej waznosci
    document.cookie = nazwa+"="+wartosc+";expires="+d.toUTCString(); 
    //console.log(d.toUTCString());

}

function odczytajCiastko(nazwa){
    let ciastka = document.cookie;
    // console.log(ciastka);
    // Robimy tablice z wczesniejszego stringa
    let ciastkaTab = ciastka.split("; ");
    // console.log(ciastkaTab);
    // Robimey petle po tablicy zeby odczytac wartosc
    for(let x of ciastkaTab){
        let xTab = x.split("=");
        // console.log(xTab);
        if(xTab[0] == nazwa){
            console.log(xTab[1]);
            break;
        }
    }
}

