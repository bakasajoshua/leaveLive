<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Masterdata extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isAdminLoggedIN();

		$data['masterData'] = $this->getmasterData();
		$data['content_view'] = "admin/masterdata_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function getSpecificmasterData(){
		$ID = $_POST['ID'];		
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
			        'action' => 'GETSPECIFICMASTERDATA',
			        'dataID' => $ID
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}
		print_r($result);
	}

	public function editmasterdata($ID){
		if($ID == null || $ID == undefined){
			$data['masterData'] = $this->getmasterData();
			$data['content_view'] = "admin/masterdata_v";
			$this->load->view('template/template_v.php',$data);
		}else{
			$result = $this->getSpecificmasterData2($ID);//found in CONTROLLER

			$data['content_view'] = "admin/edit_masterdata_v";
			$data['specificMasterData'] = $result;
			$this->load->view('template/template_v.php',$data);
		}
	}
}