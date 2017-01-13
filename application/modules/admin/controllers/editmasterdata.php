<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Editmasterdata extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;
		$this->$this->isAdminLoggedIN();

		$data['content_view'] = "admin/edit_masterdata_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function updateMasterData(){
		$dataObjID = $_POST['dataObjID'];
		$newActiveYear = $_POST['newActiveYear'];

		if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }else{
			$curl = curl_init();
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => navInterfaceURL,
			    CURLOPT_USERAGENT => 'ESSDP',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'UPDATESPECIFICMASTERDATA',
			        'dataObjID' => $dataObjID,
			        'dataValue'=> $newActiveYear
			    )
			));
			$result = curl_exec($curl);
			curl_close($curl);
		}

		if($result == 'Updated'){
			$response['message'] = "Successfully Updated";
			$response['status'] = "0";
		}else{
			$response['message'] = "An error ocurred please alert your system admin.";
			$response['status'] = "1";
		}
		echo json_encode($response);
	}

}