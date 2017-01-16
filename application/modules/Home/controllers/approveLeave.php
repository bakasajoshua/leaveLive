<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ApproveLeave extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		//check if user is logged in
		$this->isLoggedIN();

		$data['pendingRequests'] = $this->getPendingRequests();
		$data['content_view'] = "Home/approveLeave_v.php";
		$this->load->view('template/template_v.php',$data);
	}

	public function logoutHome(){
		$this->logout();
	}


	public function approveRequest(){
		$RequestID = trim($_POST['RequestID']);
		$leaveStatus = trim($_POST['leaveComment']);
		
		//checks if a comment was made
		if(isset($_POST['respMessage']) && $_POST['respMessage'] != null){
			$comment = $_POST['respMessage'];
		}else{
			if($leaveStatus === "LEAVE RECEIVED"){
				$comment = "Approved by line manager";
			}else if($leaveStatus === "PENDING FINAL APPROVAL"){
				$comment = "LEAVE APPROVED";
			}else{
			}	
		}
		//checks if a comment was made
		
		//check the status of the request
		$pendingRequests = $this->getPendingRequests();
		$pendingRequests = json_decode($pendingRequests);

		foreach ($pendingRequests as $key => $value) {
            $row = "";
            $i++;
            $value = (array)$value;
            $RQID = $value['RequestID'];

            if($RQID == $RequestID){
            	$status = $value['status'];
            	if($status == "LEAVE RECEIVED"){
            		//level one of approval
            		//$approversID = $value['ApproversID'];
            		$approversID = $value['FinalApproversID'];
            		$this->session->set_userdata('FinalApproversPersonID',$approversID);
            		$status = "PENDING FINAL APPROVAL";
            		break;
            	}else if($status == "PENDING FINAL APPROVAL"){
            		//level two of approval
            		$approversID = $value['ApproversID'];
            		$this->session->set_userdata('ApproversPersonID',$approversID);//used to notify the aprover
            		$status = "APPROVED";
            		break;
            	}else{}
            	break;
            }
        }
        // print_r($status." status ".$approversID." ".$comment." ".$RequestID);die;
		//check the status of the request

		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }else{
	    	// Get cURL resource
			$curl = curl_init();
			// Set some options - we are passing in a useragent too here
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => navInterfaceURL,
			    CURLOPT_USERAGENT => 'ESSDP',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'APPROVEREQUEST',
			        'RequestID' => $RequestID,
			        'comment'=>$comment,
			        'status'=>$status
			    )
			));
			// Send the request & save response to $resp
			$resp = curl_exec($curl);
			// Close request to clear up some resources
			curl_close($curl);
	    }
	    if($resp == 'Updated'){
	    	//email update is triggered by jquery
			$response['message'] = 'You successfuly responded to the leave request. Please wait as we send the employee an email.';
			$response['status'] = 0;
	    }else{
	    	$response['message'] = "Error Occured";
	    	$response['status'] = 1;
	    }
	    echo json_encode($response);
	}

	public function denyRequest(){
		$RequestID = $_POST['RequestID'];

		//check if comment was given
		if(isset($_POST['respMessage']) && $_POST['respMessage'] != null){
			$comment = $_POST['respMessage'];
		}else{
			$comment = "Leave request has been denied.";
		}
		//check if comment was given

		//check the status of the request
		$pendingRequests = $this->getPendingRequests();
		$pendingRequests = json_decode($pendingRequests);
		foreach ($pendingRequests as $key => $value) {
            $row = "";
            $i++;
            $value = (array)$value;
            $RQID = $value['RequestID'];

            if($RQID == $RequestID){
            	$status = $value['status'];
            	if($status == "LEAVE RECEIVED"){
            		//level one of approval
            		//$approversID = $value['ApproversID'];
            		$approversID = $value['FinalApproversID'];
            		$this->session->set_userdata('FinalApproversPersonID',$approversID);
            		$status = "PENDING FINAL APPROVAL";
            		break;
            	}else if($status == "PENDING FINAL APPROVAL"){
            		//level two of approval
            		$approversID = $value['ApproversID'];
            		$this->session->set_userdata('ApproversPersonID',$approversID);//used to notify the aprover
            		$status = "APPROVED";
            		break;
            	}else{}
            	break;
            }
        }
        //check the status of the request

		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }else{
	    	// Get cURL resource
			$curl = curl_init();
			// Set some options - we are passing in a useragent too here
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => navInterfaceURL,
			    CURLOPT_USERAGENT => 'ESSDP',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'DENYREQUEST',
			        'RequestID' => $RequestID,
			        'rejectReason' => $comment
			    )
			));
			// Send the request & save response to $resp
			$resp = curl_exec($curl);
			// Close request to clear up some resources
			curl_close($curl);
	    }
		if($resp == 'Updated'){
			//response email is triggered by jquery
			$response['message'] = 'You successfuly responded to the leave request. Please wait as we send the employee an email.';
			$response['status'] = 0;
	    }else{
	    	$response['message'] = "Error Occured";
	    	$response['status'] = 1;
	    }
	    echo json_encode($response);
	}

	public function getLeaveDetails($RequestID){
		//GETLEAVEAPPLICATIONDETAILS
		// is cURL installed yet?
	    if (!function_exists('curl_init')){
	        die('Sorry cURL is not installed!');
	    }else{
	    	// Get cURL resource
			$curl = curl_init();
			// Set some options - we are passing in a useragent too here
			curl_setopt_array($curl, array(
			    CURLOPT_RETURNTRANSFER => 1,
			    CURLOPT_URL => navInterfaceURL,
			    CURLOPT_USERAGENT => 'ESSDP',
			    CURLOPT_POST => 1,
			    CURLOPT_POSTFIELDS => array(
			        'action' => 'GETLEAVEAPPLICATIONDETAILS',
			        'RequestID' => $RequestID
			    )
			));
			// Send the request & save response to $resp
			$resp = curl_exec($curl);
			// Close request to clear up some resources
			curl_close($curl);
	    }
		$resp = json_decode($resp);

		$causeOfAbsence = $resp[0]->CauseOfAbsence;
		$from = $resp[0]->FromDate;
		$AbsentDaysApplied = $resp[0]->AbsentDaysApplied;
		$to = $resp[0]->ToDate;
		$comment = $resp[0]->Comment;

		$this->session->set_userdata('COA',$causeOfAbsence);		
		$this->session->set_userdata('startDate',$from);
		$this->session->set_userdata('endDate',$to);
		$this->session->set_userdata('daysApplied',$AbsentDaysApplied);
		$this->session->set_userdata('comment',$comment);
		//GETLEAVEAPPLICATIONDETAILS
	}

	public function sendLeaveResponseEmail(){
		$leaveAppliersID = $_POST['empNo'];
		$templateID = $_POST['templateID'];
		$RequestID = $_POST['RequestID'];
		$action = $_POST['action'];

		if($action == 'reject'){
			//since we are rejecting this email we don't need to get the final approvers details
			//simply get the employee details and send them a notification 
			$appliersDetails = $this->getUserDetails($leaveAppliersID);
			$appliersDetails = json_decode($appliersDetails);

			$approversID = $this->session->userdata('ApproversPersonID');//for notification puropses
			$appliersDetails = $this->getUserDetails($approversID);
			$appliersDetails = json_decode($appliersDetails);
			$Approveremail = $appliersDetails->email;//this email belongs to the firstlevel Approver

			$appliersDetails = $this->getUserDetails($leaveAppliersID);
			$appliersDetails = json_decode($appliersDetails);
			$Applieremail = $appliersDetails->email;//this email belongs to the person applying for the leave.

			$email['approver']= $Approveremail;
			$email['applier'] = $Applieremail;
			//$email = $appliersDetails->email;//this email belongs to the person applying for the leave.

		}else if($action == 'approve'){
			if(null !== $this->session->userdata('FinalApproversPersonID')){
				$approverPersonID = $this->session->userdata('FinalApproversPersonID');	
				//get recepient email address
				$recepientDetails = $this->getUserDetails($approverPersonID);
				$recepientDetails = json_decode($recepientDetails);
				$email = $recepientDetails->email;
				//get recepient email address
			}else{
				//level two aaproval
				//because we don't have a finalApproversPersonID when the final approver is approving a leave
				$approversID = $this->session->userdata('ApproversPersonID');//for notification puropses
				$appliersDetails = $this->getUserDetails($approversID);
				$appliersDetails = json_decode($appliersDetails);
				$Approveremail = $appliersDetails->email;//this email belongs to the person applying for the leave.

				$appliersDetails = $this->getUserDetails($leaveAppliersID);
				$appliersDetails = json_decode($appliersDetails);
				$Applieremail = $appliersDetails->email;//this email belongs to the person applying for the leave.

				$email['approver']= $Approveremail;
				$email['applier'] = $Applieremail;
			}
		}else{
			//DO nothing
		}
		//get leave details and set them as session varriables
		$this->getLeaveDetails($RequestID);	
		//get leave details and set them as session varriables

		//get details of the person applying for leave
		$appliersDetails = $this->getUserDetails($leaveAppliersID);
		$appliersDetails = json_decode($appliersDetails);
		$appliersFname = $appliersDetails->fname;
		$applierLname = $appliersDetails->lname;
		//get details of the person applying for leave

		//details of sender
		$FName = "KIPPRA";
		$LName = "ESS";
		//details of sender

		//get email template to use
		$emailContent = $this->getSpecificEmailTemplate($templateID);//get registration email from DB
		$emailContent = json_decode($emailContent);
		$emailContentDB = "";
		foreach ($emailContent as $key => $value) {
		    $row = "";
		    $i++;
		    $value = (array)$value;
		    
		    $emailID = $value['emailID'];
		    $reasonForSending = $value['reasonForSending'];
		    $emailContentDB = $value['emailContent'];
		    $emailContentDB = str_replace('"','',$emailContentDB);
		    $emailContent = str_replace('"' ,'',$emailContent);
		    $emailFooter = $value['emailFooter'];
		    $subject = $value['subject'];
		}
		//get email template to use

		if($action == "approve"){
			$causeOfAbsence = $this->session->userdata('COA');
			$from = $this->session->userdata('startDate');
			$AbsentDaysApplied = $this->session->userdata('daysApplied');
			$to = $this->session->userdata('endDate');
			$comment = $this->session->userdata('comment');
            
			//FROM DATE
	        $FromDate = substr($from, 0, strpos($from, " "));
	        $FromDate = explode("/", $FromDate);
	        $humanReadableFromDate = $FromDate[1]."-".$FromDate[0]."-".$FromDate[2];
	        //FROM DATE
	        //TO DATE
	        $ToDate = substr($to, 0, strpos($to, " "));
	        $ToDate = explode("/", $ToDate);
	        $humanReadableToDate = $ToDate[1]."-".$ToDate[0]."-".$ToDate[2];
	        //TO DATE
		}else{
			$humanReadableToDate = 'N/A';
			$humanReadableFromDate = 'N/A';
			$causeOfAbsence = $this->session->userdata('COA');
			$AbsentDaysApplied = $this->session->userdata('daysApplied');
			$comment = $this->session->userdata('comment');
		}
		//content of email to be sent
        $Message = "<i>".date("l jS \of F Y h:i:s A")."</i> <br/><br/>";	
		$Message .= "<strong>LEAVE DETAILS</strong> <br/>";
		$Message .= "<strong> Employee: ".$appliersFname." ".$applierLname ."</strong><br/>";
		$Message .= "<strong> Comment: ".$comment."</strong><br/>";
		$Message .= "Leave Type: ".$causeOfAbsence."<br/>";
		$Message .= "Start Date: ".$humanReadableFromDate."<br/>";
		$Message.= "Days Applied: ".$AbsentDaysApplied."<br/>";
		$Message .= "End Date: ".$humanReadableToDate."<br/><br/>";

		$finalMessage = $emailContentDB.$Message.$emailFooter;
		//content of email to be sent

		$From = "kipprahr@kippra.or.ke";
		$to = $email;
		
		$sendMailresp = $this->phpMailerSendMail($FName, $LName, $subject, $finalMessage, $From, $to);
		
		$sendMailresp = json_decode($sendMailresp);
		// print_r($sendMailresp);die;
		
		if($sendMailresp->status == 0){
			$resp['message'] = "The leave request has been forwarded to the individual responsible. Please wait as we refresh this page.";
			$resp['status']  = 0;
		}else{
			$resp['message'] = "An error occured while escalating the leave requet. Please alert the employee and alert your system admin of this error.";
			$resp['status']  = 1;
		}
		echo json_encode($resp);
	}
}
?>
