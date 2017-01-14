<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();
		$data['pendingRequests'] = $this->getPendingRequests();
		echo($this->session->userdata('PersonID'));
		// echo "<pre>";print_r($data);die();
		$data['content_view'] = "Home/index_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function getEntitlements(){
		$personID = $this->session->userdata('PersonID');
		$LeaveGroupCode = $this->session->userdata('LeaveGroupCode');

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
			        'action' => 'GETENTITLEMENTS',
			        'PersonID' => $personID,
			       	'LeaveGroupCode'=> $LeaveGroupCode
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}
		echo($result);
	}

	public function getDaysAvailable(){
		$personID = $this->session->userdata('PersonID');
		$COA = $_POST['COA'];

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
			        'action' => 'GETLEAVEREQUESTFROMNAV',
			        'personID' => $personID,
			        'COA'=>$COA
			    )
			));
			// Send the request & save response to $resp
			$daysAppliedNAV = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}

		$daysAppliedNAV = json_decode($daysAppliedNAV);
		echo ($daysAppliedNAV[0]->Quantity);
	}

}
?>