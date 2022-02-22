$(document).ready(function(){
	
	$("#oblicz").click(function(){
        oblicz();
    })
	
});

function oblicz(){

    $.ajax({

        type:"POST",
        dataType: "json",
        url: "01.php",
        data: {
            "liczba1":$("#liczba1").val(),
            "liczba2":$("#liczba2").val(),
            "znak":$("#znak").val(),
        },
        success: function(data){
            console.log(data);
            $("span").html(data);
        },
        error: function(xhr){
            console.log(xhr.responseText);
        }

    })

}