<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Requisitions extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();

		// $data['userLeaveApplications']= $this->getUserLeaveApplications();
		// $data['causeOfAbsence'] = $this->getCauseOfAbsence();
		// $data['pendingRequests'] = $this->getPendingRequests();
		// $data['PayslipPeriods'] = $this->getPayslipPeriods();
		$data['Requisitions'] = $this->getRequisitions();
		$data['itemList'] = $this->getItemList();
		$data['content_view'] = "Home/requsitions_v";
		$this->load->view('template/template_v.php',$data);

	}

	public function logoutHome(){
		$this->logout();
	}


	public function makerequisition(){
		$items = $_POST['items'];		
		//get the item requested for
		$collection = array();
		$collectionArray = array();
		foreach ($items as $key => $value) {
			$collection['itemName'] = $value[0];
			$collection['qty'] = $value[1];
			array_push($collectionArray, $collection);
		}
		$itemsList = json_encode($collectionArray);
		// $items = json_encode($items);

		$empID = $this->session->userdata("PersonID");
		$ApproverPersonID = $this->session->userdata("ApproverPersonID");
		$qty = $_POST['qty'];
		$year = date('Y');
		$month = date('m');
		$day = date('d');
		$requestDate = $year.$day.$month;

		// foreach($items as $key)
		// { 
		// 	print_r($key[0]);die;
		// }
		//save the request
		$navInterfaceURL = navInterfaceURL;
		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }
	    // Get cURL resource
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => $navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'MAKEREQUISITION',
		        'items' => $itemsList,
		        'qty' => $qty,
		        'empID'=>$empID,
		        'ApproverPersonID' =>$ApproverPersonID,
		        'requestDate'=>$requestDate
		    )
		));
		// Send the request & save response to $resp
		$result = curl_exec($curl);
		// Close request to clear up some resources
		curl_close($curl);

		if($result == "Inserted"){
			$resp = $this->sendSupervisorAlert($ApproverPersonID,$items);	
			$resp = json_decode($resp);
			if($resp['status'] == 0){
				$response['message'] = "Requisition has been successfully made.";
				$response['status'] = 0;
			}else{
				$response['message'] = "An error occured when sending your supervisor a notification email. <br/> Your requisition was however placed successully.";
				$response['status'] = 2;
			}
		}else{
			$response['message'] = "Error, occured please try again.";
			$response['status'] = 1;
		}
		echo json_encode($response);
		//print_r($result);
		

		//alert the supervisor of the request
		
		//identify supervisor and get their email		
	}

	public function sendSupervisorAlert($ApproverPersonID,$items){
		// print_r($items);die;
		// $items = json_decode($items);
		$approversDetails = $this->getUserDetails($ApproverPersonID);
		$approversDetails = json_decode($approversDetails );
	
		$email = $approversDetails->email;

		$FName = "KIPPRA";
		$LName = "ESS";

		$requestList = "<table>";
		$requestList .= "<tr>";
		$requestList .= "<td>Item</td>";
		$requestList .= "<td>Quantity</td>";
		$requestList .= "<tr>";

		foreach ($items as $key => $value) {
			for($i = 0; $i <sizeof($value); $i++){
				$itemName =  $value[$i];
				$i++;
				$itemqty = $value[$i];
				
				$requestList .=  "<tr>";				
				$requestList .= "<td>".$itemName."</td>";
				$requestList .= "<td>".$itemqty."</td>";
				$requestList .= "</tr>";
			}
		}
		$requestList .= "<table>";
// print_r($requestList);die;
		$empFname = $this->session->userdata('FirstName');
		$empLname = $this->session->userdata('LastName');

		$Message = "Hi, <br/><br/>
		This email was automatically to notify you of a requisition request from <strong>".$empFname." ".$empLname."</strong>. Login to the employee's portal to act on the request. Details of the request are as follows: <br/><br/>
		".$requestList."
			<br/>
		<i>If this email was wrongly sent to you please ignore it.</i><br/>
		Regards,<br/>
		KIPPRA ESS PORTAL.";

		$From = "theconsultanthub@gmail.com";
		$to = $email;

		$this->phpMailerSendMail($FName, $LName, $subject='Employee Requisitions', $Message, $From, $to);
	}


	public function getItemList(){
		$navInterfaceURL = navInterfaceURL;
		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }
	    // Get cURL resource
		$curl = curl_init();
		// Set some options - we are passing in a useragent too here
		curl_setopt_array($curl, array(
		    CURLOPT_RETURNTRANSFER => 1,
		    CURLOPT_URL => $navInterfaceURL,
		    CURLOPT_USERAGENT => 'ESSDP',
		    CURLOPT_POST => 1,
		    CURLOPT_POSTFIELDS => array(
		        'action' => 'GETITEMLIST'
		    )
		));
		// Send the request & save response to $resp
		$result = curl_exec($curl);
		// Close request to clear up some resources
		curl_close($curl);

		return $result;
	}
}