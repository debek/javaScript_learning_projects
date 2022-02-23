import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class EdytujKontakt extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT")),
        id : this.props.match.params.id,
        redirect : false
    }

    edytujKontakt = () =>{

        this.state.dane[this.state.id].imie = document.querySelector("#imie").value;
        this.state.dane[this.state.id].nazwisko = document.querySelector("#nazwisko").value;
        this.state.dane[this.state.id].telefon = document.querySelector("#telefon").value;
        this.state.dane[this.state.id].email = document.querySelector("#email").value;

        localStorage.setItem("KT", JSON.stringify(this.state.dane));
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
        border: "2px solid red",
        }}
      >
        
            <p>
                Imię:<br/>
                {/* Defaultvalue, dzieki ktoremu mozemy edytowac dane w imput */}
                <input type="text" name="imie" id="imie" defaultValue={this.state.dane[this.state.id].imie} />
            </p>
            <p>
                Nazwisko:<br/>
                <input type="text" name="nazwisko" id="nazwisko" defaultValue={this.state.dane[this.state.id].nazwisko} />
            </p>
            <p>
                Telefon:<br/>
                <input type="text" name="telefon" id="telefon" defaultValue={this.state.dane[this.state.id].telefon} />
            </p>
            <p>
                Email:<br/>
                <input type="text" name="email" id="email" defaultValue={this.state.dane[this.state.id].email} />
            </p>
            <p>
                <button onClick={this.edytujKontakt}>Edytuj dane</button>
                <button onClick={this.anuluj}>Anuluj</button>
            </p>

        </div>
    );

  }
}

export default EdytujKontakt;