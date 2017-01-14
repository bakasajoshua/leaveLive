<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Respond To Leave</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_title">
                                    <?php
                                        $pendingRequests = json_decode($pendingRequests);
                                        // echo "<pre>";
                                        // print_r($pendingRequests);die;
                                        $sizeofPendingRequests = sizeof($pendingRequests);
                                        // foreach ($pendingRequests as $key => $value) {
                                        //     $value = (array)$value;
                                        //     $finalApproversID = $value['FinalApproversID'];
                                        //     $linemanagerApproversID = $value['ApproversID'];
                                        //     $Leavestatus = $value['status'];
                                        //     $personID = $this->session->userdata('PersonID');

                                        //     if(strcasecmp($personID, $finalApproversID) == 0){
                                        //         if($Leavestatus == 'PENDING FINAL APPROVAL'){
                                        //             $i++;
                                        //         }
                                        //     }else if(strcasecmp($personID, $linemanagerApproversID) == 0){
                                        //         if($Leavestatus == 'LEAVE RECEIVED'){
                                        //             $i++;
                                        //         }
                                        //     }
                                        // }
                                    ?>
                                    <h2><small>You have</small> <?php echo $sizeofPendingRequests;//sizeof(json_decode($pendingRequests)); ?> pending <small> approval(s)</small></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">

                                    <table class="table table-bordered table-hover" style="font-size:80%;" id="approveLeaveTable">
                                        <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Request ID</th>
                                              <th>Emp. No.</th>
                                              <th>Name</th>
                                              <th>Leave Type</th>
                                              <!-- <th>Days Entitled</th> -->
                                              <th>Days Applied</th>
                                              <th>Start Date</th>
                                              <th>End Date</th>
                                              <th>Status</th>
                                              <th>Action</th>
                                            </tr>
                                        </thead>
                                        <!-- <tbody>
                                            <?php
                                                $personID = $this->session->userdata('PersonID');
                                                $i=0;
                                                $k=0;
                                                for($i = 0; $i < $sizeofPendingRequests; $i++){
                                                    $row = "";
                                                    
                                                    $value = (array)$value;

                                                    
                                                    //Format the new dates
                                                    // $newFromDate = split_on($value['FromDate'],4);
                                                    $FromDate = str_replace("/","",$pendingRequests[$i]->FromDate);
                                                    if(strlen($FromDate) < 20){
                                                        $From = str_split($FromDate,2);
                                                        $month = $From[0];
                                                        $year = $From[1];

                                                        $day = $From[1];
                                                        $day = str_split($day,1);
                                                        $actualday = $day[0];


                                                        $year = $year[1]."".$From[2]."".$From[3];
                                                        $humanReadableFromDate = $actualday."-".$month."-".$year;
                                                    }else{
                                                        $year = substr($FromDate,4,5);
                                                        $month = substr($FromDate,2,2);
                                                        $day = substr($FromDate,0,2);
                                                        $humanReadableFromDate = $day."-".$month."-".$year;
                                                    }


                                                    $ToDate = str_replace("/","",$pendingRequests[$i]->ToDate);
                                                    // print_r($ToDate);
                                                    if(strlen($ToDate) < 20){
                                                        $From = str_split($ToDate,2);
                                                        $month = $From[0];
                                                        $year = $From[1];
                                                        

                                                        $day = $From[1];
                                                        $day = str_split($day,1);
                                                        $actualday = $day[0];


                                                        $year = $year[1]."".$From[2]."".$From[3];
                                                        $humanReadableToDate = $actualday."-".$month."-".$year;
                                                        // echo $humanReadableToDate."<br/>";
                                                    }else{
                                                        $year = substr($ToDate,4,5);
                                                        $month = substr($ToDate,2,2);
                                                        $day = substr($ToDate,0,2);
                                                        $humanReadableToDate = $day."-".$month."-".$year;
                                                    }
                                                    //Format the new dates
                                                    // for($i = 0; $i < $sizeofPendingRequests; $i++){
                                                    //     $finalApproversID = $pendingRequests[0]->FinalApproversID;
                                                    //     $linemanagerApproversID = $pendingRequests[0]->ApproversID;
                                                    //     $Leavestatus = $pendingRequests[0]->status;
                                                    //     $personID = $pendingRequests[0]->PersonID;
                                                    // }
                                                    

                                                    $finalApproversID = $pendingRequests[$i]->FinalApproversID;
                                                    $linemanagerApproversID = $pendingRequests[$i]->ApproversID;
                                                    $Leavestatus = $pendingRequests[$i]->status;


                                                    // if(strcasecmp($personID, $finalApproversID) == 0){
                                                    //     echo "seses 1 ";
                                                    //     echo $Leavestatus;
                                                    //     if(strcasecmp($Leavestatus, 'PENDING FINAL APPROVAL') == 0){
                                                    //         $i++;
                                                    //         $row = "<tr>";
                                                    //         $row .= "<td>".$i."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->RequestID."</td>";
                                                    //         $row .= "<td class='empNO'>".$pendingRequests[$i]->ApplicantsPersonID."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->FirstName." ".$pendingRequests[$i]->MiddleName." ".$pendingRequests[$i]->LastName."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->AbsenceCode."</td>";
                                                    //         // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->AbsentDaysApplied."</td>";
                                                    //         $row .= "<td>".$humanReadableFromDate."</td>";
                                                    //         $row .= "<td>".$humanReadableToDate."</td>";
                                                    //         $row .= "<td class='leaveComment'>".$pendingRequests[$i]->status."</td>";
                                                    //         $row .= '<td onclick="actOnRequest('.$i.')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                                                    //         $row .= "</tr>";
                                                    //         echo "seses 3";
                                                    //     }
                                                    // }else if(strcasecmp($personID, $linemanagerApproversID) == 0){
                                                    //     echo "seses 2";
                                                    //     if($Leavestatus == 'LEAVE RECEIVED'){
                                                    //         $k++;
                                                    //         $row = "<tr>";
                                                    //         $row .= "<td>".$k."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->RequestID."</td>";
                                                    //         $row .= "<td class='empNO'>".$pendingRequests[$i]->ApplicantsPersonID."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->FirstName." ".$pendingRequests[$i]->MiddleName." ".$pendingRequests[$i]->LastName."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->AbsenceCode."</td>";
                                                    //         // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                                                    //         $row .= "<td>".$pendingRequests[$i]->AbsentDaysApplied."</td>";
                                                    //         $row .= "<td>".$humanReadableFromDate."</td>";
                                                    //         $row .= "<td>".$humanReadableToDate."</td>";
                                                    //         $row .= "<td class='leaveComment'>".$pendingRequests[$i]->status."</td>";
                                                    //         $row .= '<td onclick="actOnRequest('.$k.')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                                                    //         $row .= "</tr>";
                                                    //         echo "seses";
                                                    //     }
                                                    // }

                                                    echo $row;
                                                }

                                            ?>
                                        </tbody> -->
                                        <tbody>
                                            <?php
                                                $personID = $this->session->userdata('PersonID');
                                                $i=0;
                                                $k=0;
                                                foreach ($pendingRequests as $key => $value) {
                                                    $row = "";
                                                    
                                                    $value = (array)$value;                                                    
                                                    //FROM DATE
                                                    $FromDate = explode(" ", $value['FromDate']);
                                                    $FromDate = $FromDate[0];
                                                    $humanReadableToDate = str_replace("/","-",$FromDate);
                                                    //FROM DATE
                                                    //TO DATE
                                                    $ToDate = explode(" ", $value['ToDate']);
                                                    $ToDate = $ToDate[0];
                                                    $humanReadableToDate = str_replace("/","-",$ToDate);
                                                    //TO DATE

                                                    $finalApproversID = $value['FinalApproversID'];
                                                    $linemanagerApproversID = $value['ApproversID'];
                                                    $Leavestatus = $value['status'];

                                                    // if(strcasecmp($personID, $finalApproversID) == 0){
                                                    //     if($Leavestatus == 'PENDING FINAL APPROVAL'){
                                                    //         $i++;
                                                    //         $row = "<tr>";
                                                    //         $row .= "<td>".$i."</td>";
                                                    //         $row .= "<td>".$value['RequestID']."</td>";
                                                    //         $row .= "<td class='empNO'>".$value['ApplicantsPersonID']."</td>";
                                                    //         $row .= "<td>".$value['FirstName']." ".$value['MiddleName']." ".$value['LastName']."</td>";
                                                    //         $row .= "<td>".$value['AbsenceCode']."</td>";
                                                    //         // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                                                    //         $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                                                    //         $row .= "<td>".$humanReadableFromDate."</td>";
                                                    //         $row .= "<td>".$humanReadableToDate."</td>";
                                                    //         $row .= "<td class='leaveComment'>".$value['status']."</td>";
                                                    //         $row .= '<td onclick="actOnRequest('.$i.')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                                                    //         $row .= "</tr>";
                                                    //     }
                                                    // }else if(strcasecmp($personID, $linemanagerApproversID) == 0){
                                                    //     if($Leavestatus == 'LEAVE RECEIVED'){
                                                    //         $k++;
                                                    //         $row = "<tr>";
                                                    //         $row .= "<td>".$k."</td>";
                                                    //         $row .= "<td>".$value['RequestID']."</td>";
                                                    //         $row .= "<td class='empNO'>".$value['ApplicantsPersonID']."</td>";
                                                    //         $row .= "<td>".$value['FirstName']." ".$value['MiddleName']." ".$value['LastName']."</td>";
                                                    //         $row .= "<td>".$value['AbsenceCode']."</td>";
                                                    //         // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                                                    //         $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                                                    //         $row .= "<td>".$humanReadableFromDate."</td>";
                                                    //         $row .= "<td>".$humanReadableToDate."</td>";
                                                    //         $row .= "<td class='leaveComment'>".$value['status']."</td>";
                                                    //         $row .= '<td onclick="actOnRequest('.$k.')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                                                    //         $row .= "</tr>";
                                                    //     }
                                                    // }
                                                    $i++;
                                                    $row = "<tr>";
                                                    $row .= "<td>".$i."</td>";
                                                    $row .= "<td>".$value['RequestID']."</td>";
                                                    $row .= "<td class='empNO'>".$value['ApplicantsPersonID']."</td>";
                                                    $row .= "<td>".$value['FirstName']." ".$value['MiddleName']." ".$value['LastName']."</td>";
                                                    $row .= "<td>".$value['AbsenceCode']."</td>";
                                                    // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                                                    $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                                                    $row .= "<td>".$humanReadableFromDate."</td>";
                                                    $row .= "<td>".$humanReadableToDate."</td>";
                                                    $row .= "<td class='leaveComment'>".$value['status']."</td>";
                                                    $row .= '<td onclick="actOnRequest('.$i.')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                                                    $row .= "</tr>";
                                                    
                                                    echo $row;
                                                    
                                                }

                                            ?>
                                        </tbody>
                                    </table>


                                    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-sm">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel2">Action</h4>
                                                </div>
                                                <div class="modal-body">
                                                    <!-- <p id="empName">Name:</p>
                                                    <p id="leaveStartDate">Start Date:</p>
                                                    <p id="leaveEndate">End Date:</p>
                                                    <p id="totalDays">Total Days:</p>  -->
                                                    <h4>Provide Comment(optional)</h4>
                                                        <div class="alert alert-danger" role="alert" id="loginerrorBox">
                                                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                                            <span class="sr-only">Error:</span>
                                                            <p></p>
                                                        </div>

                                                        <div class="alert alert-success" role="alert" id="loginSuccessBox">
                                                            <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                                                            <span class="sr-only">Success:</span>
                                                            <p></p>
                                                        </div>
                                                    <textarea id="respMessage" required="required" class="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.." data-parsley-validation-threshold="10"></textarea>
                                                    <input type="hidden" name="leaveRequestID" id="leaveRequestID" value="">
                                                    <input type="hidden" name="leaveAppliersID" id="leaveAppliersID" value="">
                                                    <input type="hidden" name="leaveComment" id="leaveComment" value="">
                                                </div>
                                                <div class="modal-footer">
                                                  <button type="button" class="btn btn-primary" id="approveLeave">Approve Leave</button>
                                                  <button type="button" class="btn btn-primary" id="rejectLeave">Deny Leave</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>



    