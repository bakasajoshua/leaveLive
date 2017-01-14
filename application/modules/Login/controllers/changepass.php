<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Changepass extends MX_Controller {

	public function index()
	{	
		$data['content_view'] = "Login/changepass_v";
		$this->load->view('template/loginTemplate_v.php',$data);
	}

	public function updatepass(){
		$empNo = $_POST['empNo'];
		$resetCode = $_POST['resetCode'];
		$pass = $_POST['pass'];
		$pass = sha1($pass);

		//check if emp ID exists
		$existenceINESSDB = $this->checkExistenceInESSDB($empNo);
		if($existenceINESSDB == 0){
			//check if reset code matches reset code in DB
			$navInterfaceURL = navInterfaceURL;
			if (!function_exists('curl_init')){
		        die('Sorry cURL is not installed!');
		    }else{
			    // Get cURL resource
				$curl = curl_init();
				// Set some options - we are passing in a useragent too here
				curl_setopt_array($curl, array(
				    CURLOPT_RETURNTRANSFER => 1,
				    CURLOPT_URL => $navInterfaceURL,
				    CURLOPT_USERAGENT => 'ESSDP',
				    CURLOPT_POST => 1,
				    CURLOPT_POSTFIELDS => array(
				        'action' => 'CHECKRESETCODE',
				        'empNo' => $empNo,
				        'resetCode' => $resetCode
				    )
				));
				// Send the request & save response to $resp

				$result = curl_exec($curl);
				// print_r($result);die;
				// Close request to clear up some resources
				curl_close($curl);
			}
			$status = json_decode($result);

			$resetCodeStatus = $status[0]->status;
			if($resetCodeStatus === "Match found"){
				//update the password field in DB and reset tempPass field
				// Get cURL resource
				$curl = curl_init();
				// Set some options - we are passing in a useragent too here
				curl_setopt_array($curl, array(
				    CURLOPT_RETURNTRANSFER => 1,
				    CURLOPT_URL => $navInterfaceURL,
				    CURLOPT_USERAGENT => 'ESSDP',
				    CURLOPT_POST => 1,
				    CURLOPT_POSTFIELDS => array(
				        'action' => 'UPDATENEWPASS',
				        'empNo' => $empNo,
				        'newpass' => $pass
				    )
				));
				// Send the request & save response to $resp

				$result = curl_exec($curl);
				// print_r($result);die;
				// Close request to clear up some resources
				curl_close($curl);
				if($result === "Updated"){
					$response['message'] = "Your password has been successfully reset";
	    			$response['status'] = '0';
				}else{
					$response['message'] = "An error occured. Please consult your system admin.";
	    			$response['status'] = '1';
				}
			}else{
				$response['message'] = "Your reset code or employee number is wrong.";
	    		$response['status'] = '2';
			}
		}else{
			$response['message'] = "Your employee ID is not recognized. Please register.";
	    	$response['status'] = '3';
		}
		
		//if match then reset with new pass

		echo json_encode($response);
	}
	
}