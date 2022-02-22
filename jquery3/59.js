$(document).ready(function(){

    let sum = 0;
    $("img").mouseover(function(){
        sum += 1;
        $("#licznik").html(sum);
    });
});
