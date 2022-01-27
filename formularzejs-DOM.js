document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("button").onclick = function(){
        
        // let imie = document.querySelector("input[name='imie']").value;
        let imie = document.querySelector("#imie").value;
        console.log(imie);

        // let kolor = document.querySelectorAll("input[name='kolor']");
        // let zaznaczono = false;
        // for(let x of kolor){
        //     if(x.checked){
        //         zaznaczono = true;
        //         console.log(x.value);
        //         break;
        //     }
        // }

        // if(zaznaczono == false){
        //     console.log("Niezaznaczono koloru");
        // }

        let kolor = document.querySelectorAll("input[name='kolor']");
        let indexKolor = -1;
        for(let x in kolor){
            if(kolor[x].checked){
                indexKolor = x
                break;
            }
        }

        if(indexKolor == -1){
            console.log("Niezaznaczono koloru");
        }
        else{
            console.log(kolor[indexKolor].value);
        }


        let danie = document.querySelectorAll("input[type='checkbox']");
        for(let x of danie){
            if(x.checked){
                console.log(x.value);
            }
        }

        let miasto = document.querySelector("select[name='miasto']").value;
        console.log(miasto);

        let opis = document.querySelector("#opis").value;
        console.log(opis);

    }

 

});