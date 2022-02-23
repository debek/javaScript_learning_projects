import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class UsunKontakt extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT")),
        id : this.props.match.params.id,
        redirect : false
    }

    usunKontakt = () => {
        this.state.dane.splice(this.state.id, 1);
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
        border: "2px solid purple",
        }}
      >
            <p>Czy napewno usunac poniższy kontakt ?</p>
            <p>
                Imię: {this.state.dane[this.state.id].imie}
                <br/>
                Nazwisko: {this.state.dane[this.state.id].nazwisko}

            </p>
            <p>
                <button onClick={this.anuluj}>Anuluj</button>
                <button onClick={this.usunKontakt}>Tak</button>
            </p>
        </div>
    );

  }
}

export default UsunKontakt;