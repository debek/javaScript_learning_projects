$(document).ready(function(){

    $("#bold .dodaj").click(function(){
        $("#napisTestowy").addClass("bold");
    });

    $("#bold .usun").click(function(){
        $("#napisTestowy").removeClass("bold");
    });

    $("#borderBottom .dodaj").click(function(){
        $("#napisTestowy").addClass("borderBottom");
    });

    $("#borderBottom .usun").click(function(){
        $("#napisTestowy").removeClass("borderBottom");
    });

    $("#fontSize30 .dodaj").click(function(){
        $("#napisTestowy").addClass("fontSize30");
    });

    $("#fontSize30 .usun").click(function(){
        $("#napisTestowy").removeClass("fontSize30");
    });

    $("#colorRed .dodaj").click(function(){
        $("#napisTestowy").addClass("colorRed");
    });

    $("#colorRed .usun").click(function(){
        $("#napisTestowy").removeClass("colorRed");
    });

});
