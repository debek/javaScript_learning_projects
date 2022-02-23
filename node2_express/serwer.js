// Importujemy moduły do naszego serwera
let express = require("express");
let bodyParser = require("body-parser");

// Tworzymy obiekt modułu express (czyli serwera)
let app = express();

// Zdefiniowanie metod, których  będziemy uzywać z bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Uruchomienie obsługi szablonów ejs
app.set("view engine", "ejs");

app.listen(8080);
console.log("Serwer zostal usruchomiony na porcie 8080");


let wpisy = [];

app.get("/", function(req, res) {

    res.render("index", {dane:wpisy})
    
});

app.get("/dodaj", function(req, res) {

    res.render("dodaj")
    
});

app.post("/dodaj", function(req, res) {

    let obj = {
        tytul:req.body['tytul'],
        tresc:req.body['tresc'],
    }

    wpisy.push(obj);

    res.render("index", {dane:wpisy})
});

app.get("/edytuj/:id", function(req, res) {

    // Pobieramy ID czyli index na talbicy
    let id = req.params.id;

    res.render("edytuj", {id:id, dane:wpisy[id]})

});

app.post("/edytuj/:id", function(req, res) {

    // Pobieramy ID czyli index na tablicy
    let id = req.params.id;
    wpisy[id].tytul = req.body['tytul'];
    wpisy[id].tresc = req.body['tresc'];

    res.render("index", {dane:wpisy});
    
});

app.get("/usun/:id", function(req, res) {

    // Pobieramy ID czyli index na talbicy
    let id = req.params.id;
    wpisy.splice(id,1);

    res.render("index", {dane:wpisy});
});
