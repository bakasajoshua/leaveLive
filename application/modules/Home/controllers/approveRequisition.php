<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ApproveRequisition extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();

		// $data['userLeaveApplications']= $this->getUserLeaveApplications();
		// $data['causeOfAbsence'] = $this->getCauseOfAbsence();
		// $data['pendingRequests'] = $this->getPendingRequests();
		//$data['Requisitions'] = $this->getRequisitions();
		$data['content_view'] = "Home/approveRequisition_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}

	public function approve(){
		$item = $_POST['item'];
      	$qty = $_POST['qty'];
      	$dateRequested = $_POST['dateRequested'];
      	$requisitionID = $_POST['requisitionID'];
      	$requestersID = $_POST['requestersID'];
      	$comment = $_POST['comment'];
      	$comment = str_replace(' ', '', $comment);
      	$approvalDate = date("Ydm");
      	$action = $_POST['action'];

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
			        'action' => 'APPROVEREQUISITION',
			        'PersonID' => $requestersID,
			        'item' => $item,
			        'qty' => $qty,
			        'dateRequested'=>$dateRequested,
			        'comment'=>$comment,
			        'approvalDate'=>$approvalDate,
			        'requisitionID'=>$requisitionID
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}
		if($result == "Updated"){
			$response['message'] = "Successfully Approved";
			$response['status'] = 0;
		}else{

		}
		echo json_encode($response);
	}
}

?>