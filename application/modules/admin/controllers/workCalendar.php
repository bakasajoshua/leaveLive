<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class WorkCalendar extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;
		$this->isAdminLoggedIN();
		$data['holidays'] = $this->getHolidays();
		$data['content_view'] = "admin/workCalendar_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function deleteHoliday(){
		$holidayName = $_POST['holidayName'];

		$curl = curl_init();
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'DELETEHOLIDAY',
		        'holidayName' => $holidayName
		    )
		));
		$result = curl_exec($curl);
		curl_close($curl);
		print_r($result);die;

		if($result === "Deleted"){
			$resp['message'] = "Successfully Deleted";
			$resp['status'] = 0;
		}else{
			$resp['message'] = "Delete Failed";
			$resp['status'] = 1;
		}
		echo json_encode($resp);
	}

	public function updatePublicHoliday(){
		print_r($_POST);die;
		$year =  $_POST['newYear'];
		$year = (int)$year;

		$curl = curl_init();
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'UPDATEPUBLICHOLIDAYS',
		        'year' => $year
		    )
		));
		$result = curl_exec($curl);
		curl_close($curl);
		echo($result);		
	}

	public function logoutHome(){
		$this->logout();
	}
}