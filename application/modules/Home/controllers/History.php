<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class History extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();
		$data['userLeaveApplications']= $this->getUserLeaveHistory();
		$data['pendingRequests'] = $this->getPendingRequests();
		$data['content_view'] = "Home/history_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

}
?>