<?php
    $pendingRequests = json_decode($pendingRequests);
    $sizeofPendingRequests = sizeof($pendingRequests);
    
    $personID = $this->session->userdata('PersonID');
    $i=0;
    $k=0;
    $finalRow = '';
    foreach ($pendingRequests as $key => $value) {
        $row = "";
        $value = (array)$value;                                                    
        //FROM DATE
        $FromDate = substr($value['FromDate'], 0, strpos($value['FromDate'], " "));
        $FromDate = explode("/", $FromDate);
        $humanReadableFromDate = $FromDate[1]."-".$FromDate[0]."-".$FromDate[2];
        //FROM DATE
        //TO DATE
        $ToDate = substr($value['ToDate'], 0, strpos($value['FromDate'], " "));
        $ToDate = explode("/", $ToDate);
        $humanReadableToDate = $ToDate[1]."-".$ToDate[0]."-".$ToDate[2];
        //format from date
        //TO DATE

        $finalApproversID = $value['FinalApproversID'];
        $linemanagerApproversID = $value['ApproversID'];
        $Leavestatus = $value['status'];

        if($Leavestatus == "PENDING FINAL APPROVAL"){
            //check if this user is th final approver for this leave, therefore
            
            if(strcasecmp($finalApproversID, $this->session->userdata('PersonID')) == 0){
            //     //display this leave that is at its final approvers level
                $k++;
                $row = "<tr>";
                $row .= "<td>".$k."</td>";
                $row .= "<td>".$value['RequestID']."</td>";
                $row .= "<td class='empNO'>".$value['ApplicantsPersonID']."</td>";
                $row .= "<td>".$value['FirstName']." ".$value['MiddleName']." ".$value['LastName']."</td>";
                $row .= "<td>".$value['AbsenceCode']."</td>";
                // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                $row .= "<td>".$humanReadableFromDate."</td>";
                $row .= "<td>".$humanReadableToDate."</td>";
                $row .= "<td class='leaveComment'>".$value['status']."</td>";
                $row .= '<td onclick="actOnRequest('.($k).')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                $row .= "</tr>";
            }
        }else{
            //check if this user is the line manager for this leave therefire
            if(strcasecmp($linemanagerApproversID, $this->session->userdata('PersonID')) == 0){
                //display this leave that has this user as its line manager
                $k++;
                $row = "<tr>";
                $row .= "<td>".$k."</td>";
                $row .= "<td>".$value['RequestID']."</td>";
                $row .= "<td class='empNO'>".$value['ApplicantsPersonID']."</td>";
                $row .= "<td>".$value['FirstName']." ".$value['MiddleName']." ".$value['LastName']."</td>";
                $row .= "<td>".$value['AbsenceCode']."</td>";
                // $row .= "<td>".$value['AbsentDaysEntitlement']."</td>";
                $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                $row .= "<td>".$humanReadableFromDate."</td>";
                $row .= "<td>".$humanReadableToDate."</td>";
                $row .= "<td class='leaveComment'>".$value['status']."</td>";
                $row .= '<td onclick="actOnRequest('.($k).')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;"><center><i class="fa fa-gavel"></i></center></td>';
                $row .= "</tr>";
            }

        }
        $finalRow .= $row;
        $i++;
    }
?>
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
                                    <h2><small>You have</small> <?php echo $k;?> pending <small> approval(s)</small></h2>
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
                                              <th>Days Applied</th>
                                              <th>Start Date (ddMMYY)</th>
                                              <th>End Date (ddMMYY)</th>
                                              <th>Status</th>
                                              <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                echo $finalRow;
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



    