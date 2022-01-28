document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("input[type='button']").onclick = function(){
        wyslij();
    }


});

function wyslij(){

    // Tutaj pobieramy dane z input
    let imie = document.querySelector("input[name='imie']").value;
    // Tutaj wstrzykujemy w kod zawartosc za pomocą innerHTML w miejscu gdzie jest classs imie
    document.querySelector("#imie").innerHTML = imie;

    let nazwisko = document.querySelector("input[name='nazwisko']").value;
    document.querySelector("#nazwisko").innerHTML = nazwisko;

    let miasto = document.querySelector("select[name='miasto']").value;
    document.querySelector("#miasto").innerHTML = miasto;

    let technologie = document.querySelectorAll("input[type='checkbox']");
    // Tutaj robimy clear
    document.querySelector("#technologie").innerHTML ="";
    for(let x in technologie){
        if(technologie[x].checked){
            // Tutaj jest konkatynacja i znak += dodaje kolejny tring do output
            document.querySelector("#technologie").innerHTML += technologie[x].value+" ";
        }
    }

    let stanowisko = document.querySelectorAll("input[type='radio']");
    for(let x in stanowisko){
        if(stanowisko[x].checked){
            document.querySelector("#stanowisko").innerHTML = stanowisko[x].value;
        }
    }

    let text = document.querySelector("textarea[name='uwagi']").value;
    document.querySelector("#uwagi").innerHTML = text;

}
