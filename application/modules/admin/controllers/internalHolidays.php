<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class internalHolidays extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;
	}

	public function insertInternalHoliday(){
		$this->isAdminLoggedIN();

		$data['holidays'] = $this->getHolidays();
		$data['content_view'] = "admin/internalHolidays_v";
		$this->load->view('template/template_v.php',$data);
	}

	public function saveInternalHoliday(){
		// print_r($_POST['holidays'][0]['value']);

		$holidayName = $_POST['holidays'][0]['value'];
		$holidayDate = $_POST['holidays'][1]['value'];

		$holidayDate = explode('/', $holidayDate);
		// print_r($holidayDate);

		$dayNmonth = $holidayDate[1]."-".$holidayDate[0];
		$year = $holidayDate[2];
		print_r($dayNmonth." ".$year);

		$curl = curl_init();
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'INSERTHOLIDAY',
		        'holidayType' => 'Internal Holiday',
		        'Year' =>$year,
		        'dayNmonth'=> $dayNmonth,
		        'holidayName' => $holidayName
		    )
		));
		$result = curl_exec($curl);
		curl_close($curl);

		if($result === "Inserted"){
			print_r("Successfully inserted");
		}else{
			print_r("Insert failed");
		}
		
	}
}