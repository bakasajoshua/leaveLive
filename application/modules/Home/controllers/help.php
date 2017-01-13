<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Help extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();

		$data['pendingRequests'] = $this->getPendingRequests();
		$data['content_view'] = "Home/help_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function sendMail(){
		$FName = $this->session->userdata("FirstName");
		$LName = $this->session->userdata("LastName");

		$Message = $_POST['emessage'];
		$sendersEmail = $_POST['sentFrom'];
		$to = $_POST['sentTo'];
		$subject = $_POST['subject'];
		$Message = $Message."<br/> From:".$FName." ".$LName." <br/> Email: ".$sendersEmail;

		$FName = "KIPPRA";
		$LName = "ESS";

		$response = $this->phpMailerSendMail($FName, $LName, $subject, $Message, $sendersEmail, $to);
		$response = json_decode($response);
		if($response->status == 0){
			$newURL = base_url("home/help?s=1");
			header('Location: '.$newURL);
		}else{
			$newURL = base_url("home/help?s=2");
			header('Location: '.$newURL);
		}
	}
}
?>