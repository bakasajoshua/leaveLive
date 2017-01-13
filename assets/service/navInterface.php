<?php
include "db_connect.php";

$webServiceUrl = 'http://essservice.com:8091/Service.svc?singleWsdl'; 

if(isset($_POST['action'])){
	$action = $_POST['action'];
	
	if($action == "getSchemeElementCard"){

		$client = new SoapClient($webServiceUrl);
		try {
			$res = $client->getAllSchemeElementCards();
			// print_r($res);die;
		} catch (SoapFault $e) {
			//$res = 3;
		    $res = json_encode("Error: {$e->faultstring}");
		}
		echo json_encode($res);

	}else if(($action == "getUniqueEmployeeDetails")){

		$personID = $_POST['personID'];
		$client = new SoapClient($webServiceUrl);
		try {
			$res = $client->getUniqueEmployee(array("personID"=>$personID));
			//print_r($res);die;
		} catch (SoapFault $e) {
			//$res = 3;
		    $res = json_encode("Error: {$e->faultstring}");
		}
		echo json_encode($res);

	}else if($action == "checkUniqueUserApache"){

		$personID = $_POST['personID'];

		$sql = "SELECT * FROM users WHERE employeeID = '".$personID."' ";
		
		$result = mysqli_query($conn,$sql);					
		$rowcount = mysqli_num_rows($result);
		echo json_encode($rowcount);

	}else if($action == "createUserApache"){

		$user = $_POST['username'];
		$pass = $_POST['pass'];
		$personID = $_POST['personID'];

		$sql = "INSERT INTO users (username,password,employeeID) VALUES ('".$user."','".$pass."','".$personID."')";
		$result = mysqli_query($conn,$sql);
		echo json_encode($result);

	}else if($action == "authenticateUser"){

		$user = $_POST['user'];
		$pass = $_POST['password'];
		$personID = $_POST['personID'];

		$sql = "SELECT * FROM users WHERE username='".$user."' AND  employeeID='".$personID."' AND password='".$pass."' ";
		$result = mysqli_query($conn, $sql);
		$rowcount = mysqli_num_rows($result);
		echo json_encode($rowcount);
	}else if($action == "getPayRollSlip"){

		$postNo = $_POST["postNo"];

		$client = new SoapClient($webServiceUrl);
		try {
			$res = $client->getpayrollSlip(array("postNo"=> $postNo));
		} catch (SoapFault $e) {
		    $res = json_encode($e->faultstring);
		}
		echo $res;
		
	}else{}


}else{
	echo "Invalid Request";
}


?>