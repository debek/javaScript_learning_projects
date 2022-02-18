document.addEventListener("DOMContentLoaded", function() {

	document.querySelector("input[type='button']").onclick = function(){
        wyslij();
    }
});

function wyslij(){

    console.clear();

    // Rozwiazanie roberta
    let error_pola = ["error_imie", "error_nazwisko", "error_miasto", "error_technologia", "error_stanowisko", "error_uwagi"];
	
	for(let i of error_pola){
	    document.querySelector(`#${i}`).innerHTML = "błąd";
	}

    let imie = document.querySelector("input[name='imie']").value;
    if(imie === ""){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_imie").innerHTML = "błąd";
    }
    else{
        document.querySelector("#error_imie").innerHTML = "";
        document.querySelector("#imie").innerHTML = imie;
    }
    let nazwisko = document.querySelector("input[name='nazwisko']").value;
    if(nazwisko === ""){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_nazwisko").innerHTML = "błąd";
    }
    else{
        document.querySelector("#error_nazwisko").innerHTML = "";
        document.querySelector("#nazwisko").innerHTML = nazwisko;
    }
    let miasto = document.querySelector("select[name='miasto']").value;
    if(miasto === ""){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_miasto").innerHTML = "błąd";
    }
    else{
        document.querySelector("#error_miasto").innerHTML = "";
        document.querySelector("#miasto").innerHTML = miasto;
    }

    // Tego nie jestem pewny czy nie powinienem zrobic ladniej
    let technologia = document.querySelectorAll("input[type='checkbox']");
    
    let IsChecked = false;
    for(let x in technologia){
        if(technologia[x].checked == true){
            IsChecked = true;
             break;
        }
    }

    if(IsChecked === false){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_technologia").innerHTML = "błąd";
    }
    else{
        document.querySelector("#error_technologia").innerHTML = "";
        document.querySelector("#technologie").innerHTML = "";
        for(let x in technologia){
            if(technologia[x].checked){
                document.querySelector("#technologie").innerHTML += technologia[x].value+" ";
            }
        }
    }

    // Tego nie jestem pewny czy nie powinienem zrobic ladniej
    let stanowisko = document.querySelectorAll("input[type='radio']");

    IsChecked = false;
    for(let x in stanowisko){
        if(stanowisko[x].checked){
            IsChecked = true;
             break;
        }
    }

    if(IsChecked === false){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_stanowisko").innerHTML = "błąd";
    }
    else{
        document.querySelector("#error_stanowisko").innerHTML = "";
        for(let y in stanowisko){
            if(stanowisko[y].checked){
                document.querySelector("#stanowisko").innerHTML = stanowisko[y].value;
            }
        }
    }

    let uwagi = document.querySelector("textarea[name='uwagi']").value;
    if(uwagi === ""){
        // Rozwiazanie roberta wyeliminowalo linijke nizej
        // document.querySelector("#error_uwagi").innerHTML = " błąd";
    }
    else{
        document.querySelector("#error_uwagi").innerHTML = "";
        document.querySelector("#uwagi").innerHTML = uwagi;
    }
}