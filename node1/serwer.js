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


app.get("/", function(req, res) {
    res.render("home", {nazwa: "ALX"});

})

app.get("/galeria", function(req, res) {
    res.render("galeria", );
    
})