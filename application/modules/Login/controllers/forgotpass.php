<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class forgotpass extends MX_Controller {

	public function index()
	{	
		$data['content_view'] = "Login/forgotpass";
		$this->load->view('template/loginTemplate_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function reset(){		
		// $DOB = $_POST['DOB'];
		// $email = $_POST['email'];
		$empNo = $_POST['empNo'];

		$tempPass = mt_rand(1000,1000000);
		//alternative to validateing the user input for changing password
		//check if the employeeID and email match those in our DB

		$existenceInNav = $this->checkUniqueUserNAV($empNo);
		$existenceInNav = json_decode($existenceInNav);
		$userEmail = $existenceInNav[0]->Email;

		$existenceINESSDB = $this->checkExistenceInESSDB($empNo);
		$existenceINESSDB = json_decode($existenceINESSDB);

		foreach ($existenceINESSDB as $key => $value) {
			$result = (array)$value;
			$existenceINESSDB = $result["ResponseID"];
		}
		if($existenceINESSDB == 0){
			//you exist in DB thus you can change Password
			$resp = $this->savetempPass($empNo, $tempPass);
			if($resp != "Inserted"){
				$response['message'] = "Error occured. Please try again later.";
	    		$response['status'] = '0';
			}else{
				$resp = $this->sendpassresetmail($tempPass,$userEmail);
				$resp = json_decode($resp);
				// echo "<pre>";print_r($resp->status);die();
				$status = $resp->status;
				if($status == 0){
					$response['message'] = "A reset code has been sent to your email. Kindly Check your email account.";
	   			  	$response['status'] = '1';
				}else{
					$response['message'] = "Passowrd has been changed. An error occured while sending you an email. <br/> Please consult your system admin.";
	   			  	$response['status'] = '1';
				}
	   //  		$response['tempPass'] = $tempPass;
	   //  		$response['email'] = $userEmail;
			}
			// print_r($response);
		}else{
			$response['message'] = "You do not have an account. Please register.";
	    	$response['status'] = '0';
		}
		echo json_encode($response);
	}

	public function savetempPass($personID, $tempPass){
		$navInterfaceURL = navInterfaceURL;	
		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }
	    // Get cURL resource
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => $navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'saveTempPass',
		        'personID' => $personID,
		        'tempPass' => $tempPass
		    )
		));
		// Send the request & save response to $resp
		$result = curl_exec($curl);
		// Close request to clear up some resources
		curl_close($curl);
		return $result;
	}

	public function sendpassresetmail($tempPass=null,$userEmail=null){
		$tempPass = $tempPass;
		$email = $userEmail;
		// echo $tempPass." ".$email;

		$emailContent = $this->getSpecificEmailTemplate(2);//get registration email from DB
		
		$emailContent = json_decode($emailContent);
		foreach ($emailContent as $key => $value) {
		    $row = "";
		    $i++;
		    $value = (array)$value;
		    
		    $emailID = $value['emailID'];
		    $reasonForSending = $value['reasonForSending'];
		    $emailContent = $value['emailContent'];
		    $emailContent = str_replace('"','',$emailContent);
		    $subject = $value['subject'];
		}

		$FName = "KIPPRA ESS";
		$LName = "User";
		$Message = "
		Reset code is: ".$tempPass."<br/><br/>
		<i>If this email was wrongly sent to you please ignore it.</i><br/>
		Regards,<br/>
		KIPPRA ESS PORTAL.";
		echo "<pre>";print_r($emailContent);die();
		$finalEmail = $emailContent.$Message;

		$From = "kipprahr@kippra.or.ke";
		$to = $email;

		$resp = $this->phpMailerSendMail($FName, $LName, $subject, $finalEmail, $From, $to);
		return $resp;
	}	
}