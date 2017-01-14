<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Vacancydetails extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();

		// $data['userLeaveApplications']= $this->getUserLeaveApplications();
		// $data['causeOfAbsence'] = $this->getCauseOfAbsence();
		// $data['pendingRequests'] = $this->getPendingRequests();
		// $data['PayslipPeriods'] = $this->getPayslipPeriods();
		$data['content_view'] = "jobs/vacancydetails_v";
		$this->load->view('template/templateRecruit_v.php',$data);
	}
}
