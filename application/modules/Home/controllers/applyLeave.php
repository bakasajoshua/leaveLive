<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ApplyLeave extends MX_Controller {

	public function index()
	{	
		// echo "<pre>";
		// print_r($this->session->userdata);die;

		$this->isLoggedIN();

		$data['causeOfAbsence'] = $this->getEntitlements();//$this->getCausesOfAbsence($this->session->userdata('PersonID'));	
		// $data['holidays'] = $this->getHolidaysInMnD();
		$data['pendingRequests'] = $this->getPendingRequests();
		$data['content_view'] = "Home/ApplyLeave_v";
		$this->load->view('template/template_v.php',$data);
	}
	public function logoutHome(){
		$this->logout();
	}


	public function apply(){
		$startDate = trim($_POST["startDate"]);
		$absenceReason = trim($_POST["absenceReason"]);
		$daysToApply = trim($_POST["daysApplied"]);
		$daysAvaliable = trim($_POST['daysAvaliable']);
		// $comment = $_POST["comment"];
		$daysRemaining = $daysAvaliable - $daysToApply;
		$ApproverPersonID = $this->session->userdata("ApproverPersonID");
		$FinalApproversPersonID = $this->session->userdata("FinalApproversID");
		$leaveGroupCode = $this->session->userdata('LeaveGroupCode');
		
		$returnDate = trim($_POST['returnDate']);
		$endDate = trim($_POST['endDate']);


		$totalDaysApplied = trim($_POST['totalDaysApplied']);
		$personID = $this->session->userdata('PersonID');
		$fname = $this->session->userdata('FirstName');
		$lname = $this->session->userdata('LastName');
		$FromDate = str_replace("/","",$startDate);
		$ToDate = str_replace("/","",$endDate);
		$returnDate = str_replace("/","",$returnDate);

		if($ApproverPersonID == $FinalApproversPersonID){
			$status = "PENDING FINAL APPROVAL";
		}else{
			$status = "LEAVE RECEIVED";
		}
		
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
			        'action' => 'SUMBITAPPLICATION',
			        'PersonID' => $personID,
			       	'FirstName'=> $fname,
			       	'LastName' => $lname,
			       	'FromDate' => $FromDate,
			       	'ToDate'=> $ToDate,
			       	'CauseOfAbsence' => $absenceReason,
			       	'NoOfDays' => $daysToApply,
			       	// 'Comment' => $comment,
			       	'ApproversPersonID'=> $ApproverPersonID,
			       	'FinalApproversPersonID' => $FinalApproversPersonID,
			       	'year' => date('Y'),
			       	'daysRemaining'=>$daysRemaining,
			       	'leaveGroupCode' => $leaveGroupCode,
			       	'status' => $status,
			       	'totalDaysApplied' =>$totalDaysApplied
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}				
		// print_r($result);die;
		if($result == "Inserted"){
			$this->session->set_userdata('AppliersFName', $fname);
			$this->session->set_userdata('AppliersLName', $lname);
			$this->session->set_userdata('AppliersAbsenceReason', $absenceReason);
			$this->session->set_userdata('Appliersdasytoapply', $daysToApply);
			$this->session->set_userdata('startDate', $FromDate);
			$this->session->set_userdata('endDate', $ToDate);
			$this->session->set_userdata('returnDate', $returnDate);

			$resp = $this->sendLeaveApplyemail();
			$resp = json_decode($resp);
			$resp = (array)$resp;
			
			if($resp['status'] == 0){
				$response['message'] = 'Your application has been submitted';
				$response['status'] = 0;
			}else{
				$response['message'] = "An error occured when sending your supervisor a notification email. <br/> Your application was however placed successully.";
				$response['status'] = 2;
			};
		}else{
			$response['message'] = 'An error occured.';
			$response['status'] = 1;
		}
		echo json_encode($response);
	} 

	public function getEntitlements(){
		$personID = $this->session->userdata('PersonID');
		$LeaveGroupCode = $this->session->userdata('LeaveGroupCode');
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
			        'action' => 'GETENTITLEMENTS',
			        'PersonID' => $personID,
			       	'LeaveGroupCode'=> $LeaveGroupCode
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}
		return(json_encode($result));
	}

	public function validateStartDate(){
		$startDate = $_POST['startDate'];
		$personID = $this->session->userdata('PersonID');
		$year = date('Y');
		$endDate = $_POST['endDate'];

		$startDate = explode("/", $startDate);
		$startDate = $startDate[2]."-".$startDate[0]."-".$startDate[1];
		$endDate = explode("/", $endDate);
		$endDate = $endDate[2]."-".$endDate[0]."-".$endDate[1];

		$startDate = str_replace("-","",$startDate);
		$endDate = str_replace("-","",$endDate);
		
		
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
			        'action' => 'VALIDATESTARTDATE',
			        'startDate' => $startDate,
			        'PersonID' => $personID,
			        'Year' => $year,
			        'endDate' => $endDate
			    )
			));
			// Send the request & save response to $resp
			$result = curl_exec($curl);
			
			// Close request to clear up some resources
			curl_close($curl);
		}
		$rowcount = json_decode($result);
		if($rowcount[0]->rowCount > 0){
			$resp['message'] = "You have already applied for leave within the date range.";
			$resp['status'] = 1;
		}else{
			$resp['message'] = "Valid date range";
			$resp['status'] = 0;
		}
		echo json_encode($resp);
	}

	public function sendLeaveApplyemail(){
		$ApproverPersonID = $this->session->userdata("ApproverPersonID");
		$FinalApproversPersonID = $this->session->userdata("FinalApproversID");
		//check if the first approval level equalls the second approval level.
		if($ApproverPersonID == $FinalApproversPersonID){
			//send mail to the final approver, skip the first approver
			$approversDetails = $this->getUserDetails($FinalApproversPersonID);
			$approversDetails = json_decode($approversDetails);
		}else{
			//send mail to the first approver.
			$approversDetails = $this->getUserDetails($ApproverPersonID);
			$approversDetails = json_decode($approversDetails);
		}
		//person sending email
		$FName = "KIPPRA";
		$LName = "ESS";
		//person sending email

		//get email of recipient
		$email = $approversDetails->email;
		//get email of recipient

		//get the details of the leave applied
		$AppliersFName = $this->session->userdata('AppliersFName');
		$lname = $this->session->userdata('AppliersLName');
		$absenceReason = $this->session->userdata('AppliersAbsenceReason');
		$daysToApply = $this->session->userdata('Appliersdasytoapply');
		$startDate = $this->session->userdata('startDate');
		$endDate = $this->session->userdata('endDate');
		$returnDate = $this->session->userdata('returnDate');
		//get the details of the leave applied

		//unset the fields used above
		$this->session->unset_userdata('AppliersFName');
		$this->session->unset_userdata('AppliersLName');
		$this->session->unset_userdata('AppliersAbsenceReason');
		$this->session->unset_userdata('Appliersdasytoapply');
		$this->session->unset_userdata('startDate');
		$this->session->unset_userdata('endDate');
		$this->session->unset_userdata('returnDate');
		//unset the fields used above
		

		$emailContent = $this->getSpecificEmailTemplate(3);//get registration email from DB
		$emailContent = json_decode($emailContent);		
		foreach ($emailContent as $key => $value) {
		    $row = "";
		    $i++;
		    $value = (array)$value;
		    
		    $emailID = $value['emailID'];
		    $reasonForSending = $value['reasonForSending'];
		    $emailContent = $value['emailContent'];
		    str_replace('"','',$emailContent);
		    $emailContent = str_replace('"' ,"",$emailContent);
		    $subject = $value['subject'];
		    $emailFooter = $value['emailFooter'];
		}

		$newStartDate = str_split($startDate,4);
        $year = $newStartDate[0];
        $dayMonth = str_split($newStartDate[1],2);
        $month = $dayMonth[0];
        $day = $dayMonth[1];
        $humanReadableStartDate = $day."-".$month."-".$year;

        $newEndDate = str_split($endDate,4);
        $year = $newEndDate[0];
        $dayMonth = str_split($newEndDate[1],2);
        $month = $dayMonth[0];
        $day = $dayMonth[1];
        $humanReadableEndDate = $day."-".$month."-".$year;

        $newReturnDate = str_split($returnDate,4);
        $year = $newReturnDate[0];
        $dayMonth = str_split($newReturnDate[1],2);
        $month = $dayMonth[0];
        $day = $dayMonth[1];
        $humanReadableReturnDate = $day."-".$month."-".$year;

        $Message = "<br/><br/><strong> Leave Details </strong><br/>";
		$Message .= "Name: ".$AppliersFName." ".$lname."<br/>";
		$Message .= "Leave Type: ".$absenceReason."<br/>";
		$Message .= "Leave days applied for: ".$daysToApply."<br/>";
		$Message .= "Start Date: ".$humanReadableStartDate."<br/>";
		$Message .= "End Date: ".$humanReadableEndDate."<br/>";
		$Message .= "Report Back On: ".$humanReadableReturnDate."<br/>";

		$Message .= $emailFooter;

		$finalMessage = $emailContent.$Message;

		// $From = "kipprahr@kippra.or.ke";
		$From = "kippraess@gmail.com";
		$to = $email;

		$resp = $this->phpMailerSendMail($FName, $LName, $subject, $finalMessage, $From, $to);
		return $resp;
	}

	public function getCalendarDatesToBlock(){
		$weekends = array(0,6);
		$holidays = array('01-01','01-02','12-25','12-12','12-26','12-27','12-29','12-30','12-31','06-01','10-20','05-01','12-28');

		$resp['weekends'] = $weekends;
		$resp['holidays'] = $holidays;

		echo json_encode($resp);
	}

	public function getHolidaysInMnD(){
		$holidaysAvailable = $this->getHolidays();
		echo $holidaysAvailable;
		// $holidaysAvailable = json_decode($holidaysAvailable);
		// print_r($holidaysAvailable[0]->holidayDate);
	}
}
?>