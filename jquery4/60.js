$(document).ready(function(){

    $("input").keyup(function(){
        let wartosc = $("input").val();
        $("#klon").html(wartosc);
    });
});
