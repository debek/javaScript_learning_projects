<?php

	if (isset($_POST)){
	
		$liczba1 = $_POST['liczba1'];
		$znak = $_POST['znak'];
		$liczba2 = $_POST['liczba2'];
		
		if ($znak == "+"){
			$wynik = $liczba1 + $liczba2;
		}
		else if ($znak == "-"){
			$wynik = $liczba1 - $liczba2;
		}
		else if ($znak == "*"){
			$wynik = $liczba1 * $liczba2;
		}
		else if ($znak == "/"){
			$wynik = $liczba1 / $liczba2;
		}
		else{
			$wynik = "Nierozpoznany znak";
		}
	
	
		echo json_encode($wynik);
	}

?>