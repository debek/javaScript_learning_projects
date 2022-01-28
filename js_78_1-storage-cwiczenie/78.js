document.addEventListener("DOMContentLoaded", function() {
    // Ta funkcje  zdefiniowalismy ponizej. Ona wyswietla teksty na stronie
    showUsers();
    document.querySelector("#addUser").onclick = function(){
        // alert(123);
        addUser();
    };
    document.querySelector("#delAll").onclick = function(){
        delAll();
    };  
});

class Kontakt{

    constructor(imie, nazwisko, telefon){
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}

addUser = () => {
    // alert(123);
    let imie = document.querySelector("#imie").value;
    let nazwisko = document.querySelector("#nazwisko").value;
    let telefon = document.querySelector("#telefon").value;

    if(imie != "" && nazwisko != "" &&  telefon != ""){

        let kontakt = new Kontakt(imie, nazwisko, telefon);

        // Pobieramy obecny klucz z storage o nazwie KT. Byc moze bedzie pusty czyli null lub beda jakies dane
        let daneJSON = localStorage.getItem("KT");
        // console.log(daneJSON);

        // Opcja jesli pobieramy pusta liste czyli za pierwszym razem
        if(daneJSON == null){
            let dane = [];
            dane.push(kontakt);
            localStorage.setItem("KT", JSON.stringify(dane));
        }
        // Pobieramy obecny storage, dodajemy kontakt i znowy pushujemy jako json
        else{
            let daneTab = JSON.parse(daneJSON);
            daneTab.push(kontakt);
            localStorage.setItem("KT", JSON.stringify(daneTab));
        }
        // Czyscimy pola po dodaniu
        document.querySelector("#imie").value = "";
        document.querySelector("#nazwisko").value = "";
        document.querySelector("#telefon").value = "";
    }

    // Ta funkcje  zdefiniowalismy ponizej. Ona wyswietla teksty na stronie
    showUsers();
}

// Wyswietlanie na stronie danych
showUsers = () => {
    // Pobieramy dane z storage
    let daneJSON = localStorage.getItem("KT");
    // Robimy tablice i przerabiamy to znowu na obiekty w tablicy
    let daneTab = JSON.parse(daneJSON);

    // Dodajemy w divie ul i li i tam pomiedzy dane. ul i li dodajemy do zmiannej html jako string.
    let html= "";

    if(daneTab != null){

        html += "<ul>";
        for(let x of daneTab){
            html += "<li>";
            html += x.imie+" "+x.nazwisko+" "+x.telefon;
            html += "</li>";
        }
        html += "</ul>";
    }
    // Tutaj wstrzykujemy dane z zmiennej
    document.querySelector("#showUser").innerHTML = html;
}

delAll = () => {
    localStorage.removeItem("KT");
    showUsers();
}
