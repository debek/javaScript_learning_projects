import React, { Component } from "react";
import { Link } from "react-router-dom";

class ListaKontaktow extends Component{

    state = {
        dane : JSON.parse(localStorage.getItem("KT"))
    }

  render(){

    return(
      <div>

            <table border="1">
                <tr>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Telefon</th>
                    <th>Email</th>
                </tr>

                {this.state.dane.map((wartosc, indeks) => 
                
                    <tr>
                        <td>{wartosc.imie}</td>
                        <td>{wartosc.nazwisko}</td>
                        <td>{wartosc.telefon}</td>
                        <td>{wartosc.email}</td>
                        <td><Link to={`/usun/${indeks}`}>usuń</Link></td>
                        <td><Link to={`/edytuj/${indeks}`}>edytuj</Link></td>
                    </tr>
                
                )}

            </table>

      </div>
    );

  }
}

export default ListaKontaktow;