<?php
	//$serviceURL = "http://169.239.252.31:8080/essDp1/assets/service/sqlServerInterface.php";//local development URL
	$serviceURL = "127.0.0.1:8080/essDp1Test/assets/service/sqlServerInterface.php";//on server development

if(isset($_POST['action'])){
		$action = $_POST['action'];
		if($action == "LOGIN_USER"){

			$personID = $_POST['personID'];
			$essUser = $_POST['essUser'];
			$password = sha1($_POST['password']);

			$curl = curl_init();
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => $serviceURL,
			    CURLOPT_USERAGENT => 'ESSDPMobile',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'LOGIN_USER',
			        'essUser' =>  $essUser,
			        'personID' => $personID,
			        'password' => $password
			    )
			));
			$result = curl_exec($curl);
			curl_close($curl);
			echo $result;

		}else if($action == "REGISTERUSER"){
			$empID = $_POST["empID"];
			$username = $_POST["username"];
			$password = sha1($_POST['password']);
		
			$existenceInNav = checkUniqueUserNAV($empID);
	    	$existenceINESSDB = checkExistenceInESSDB($empID);
	    	
	    	if($existenceInNav != 0){
	    		$response['message'] = "You're ID is not recognized by the system.";
	    		$response['status'] = '1';
	    	}else if($existenceINESSDB == 0){
	    		$response['message'] = "You are a registered user. Proceed to Login.";
	    		$response['status'] = '0';
	    	}else{
				$curl = curl_init();
				curl_setopt_array($curl, array(
				    CURLOPT_RETURNTRANSFER => 1,
				    CURLOPT_URL => $serviceURL,
				    CURLOPT_USERAGENT => 'ESSDPMobile',
				    CURLOPT_POST => 1,
				    CURLOPT_POSTFIELDS => array(
				        'action' => 'REGISTER_USER',
				        'essUser' =>  $username ,
				        'personID' => $empID,
				        'password' => $password
				    )
				));
				$response = curl_exec($curl);
				curl_close($curl);
	    	}
	    	echo json_encode($response);	 
		}else if($action == "getPayslip"){
			$employeeID = $_POST['employeeID'];
			$period = $_POST['period'];

			$curl = curl_init();
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => $serviceURL,
			    CURLOPT_USERAGENT => 'ESSDPMobile',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'GETPAYSLIP',
			        'PersonID' =>  $employeeID,
			        'period' => $period
			    )
			));
			$result = curl_exec($curl);
			curl_close($curl);
			echo $result;

		}else if($action == "downloadPaylsip"){
			$PersonID = $_POST['PersonID'];
			$period = $_POST['period'];

			downloadPaylsip($PersonID,$period);
		}
		else{}
	}else{
		echo "Invalid Action";
	}

	function checkUniqueUserNAV($personID){
		// echo $personID;die;
		$curl = curl_init();
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => "http://127.0.0.1:8080/essDp1Test/assets/service/sqlServerInterface.php",
		    CURLOPT_USERAGENT => 'ESSDPMobile',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'checkUniqueUserNAV',
		        'personID' => $personID
		    )
		));
		$result = curl_exec($curl);
		curl_close($curl);
		// echo "checkUniqueUserNAV ".$result;
		return $result;
	}

	function checkExistenceInESSDB($personID){
		$curl = curl_init();
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => "http://127.0.0.1:8080/essDp1Test/assets/service/sqlServerInterface.php",
		    CURLOPT_USERAGENT => 'ESSDPMobile',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'checkExistenceInESSDB',
		        'personID' => $personID
		    )
		));
		$result = curl_exec($curl);
		curl_close($curl);
		return $result;
	}
?>