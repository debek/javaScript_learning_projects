import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import DodajKontakt from "./components/DodajKontakt";
import ListaKontaktow from "./components/ListaKontaktow";
import EdytujKontakt from "./components/EdytujKontakt";
import UsunKontakt from "./components/UsunKontakt";

class App extends Component{

  render(){

    return(
      <div
        style={{
          border: "5px solid black",
        }}
      >
        
        <h1>Książka telefoniczna</h1>

        <BrowserRouter>
        
          <ul>
            <li>
              <Link to="/">Lista kontaktow</Link>
            </li>
            <li>
              <Link to="/dodaj">Dodaj nowy kontakt</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={ListaKontaktow} />
            <Route path="/dodaj" component={DodajKontakt} />
            <Route path="/edytuj/:id" component={EdytujKontakt} />
            <Route path="/usun/:id" component={UsunKontakt} />
          </Switch>
        
        </BrowserRouter>

      </div>
    );

  }
}

export default App;