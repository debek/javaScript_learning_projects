import React, { Component } from "react";
import { Redirect} from 'react-router-dom';

class DodajKontakt extends Component{

    state = {
        redirect : false
    }
    
    dodajKontakt = () =>{

        let kontakt = {
            imie : document.querySelector("#imie").value,
            nazwisko : document.querySelector("#nazwisko").value,
            telefon : document.querySelector("#telefon").value,
            email : document.querySelector("#email").value
        }

        let dane = localStorage.getItem("KT");

        if(dane == null){
            dane = [];
        }
        else{
            dane = JSON.parse(dane);
        }

        dane.push(kontakt);
        localStorage.setItem("KT", JSON.stringify(dane));
        
        // SetState uruchamia tez ponizsza funkcje rander
        this.setState({redirect : true});
    }

    anuluj = () =>{
        this.setState({redirect : true});
    }


  render(){

    if(this.state.redirect === true){
        return <Redirect to="/" />
    }

    return(
      <div
        style={{
        border: "2px solid green",
        }}
      >
        
        <p>
            Imię:<br/>
            <input type="text" name="imie" id="imie" />
        </p>
        <p>
            Nazwisko:<br/>
            <input type="text" name="nazwisko" id="nazwisko" />
        </p>
        <p>
            Telefon:<br/>
            <input type="text" name="telefon" id="telefon" />
        </p>
        <p>
            Email:<br/>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <button onClick={this.dodajKontakt}>Zapisz nowe dane</button>
            <button onClick={this.anuluj}>Anuluj</button>
        </p>

      </div>
    );

  }
}

export default DodajKontakt;