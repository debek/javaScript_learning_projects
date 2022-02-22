$(document).ready(function(){

    $("button").click(function(){
        test();
    })

})

function test(){

    $.ajax({

        type:"POST",
        dataType: "json",
        url: "01.php",
        data: {
            "imie":$("#imie").val()
        },

        success: function(data){
            console.log(data);
        },
        beforeSend: function(){
            $("#preloader").css("display", "block");
        },
        complete: function(){
            $("#preloader").css("display", "none");
        },
        error: function(xhr){
            console.log(xhr.responseText);
        }

    })

}