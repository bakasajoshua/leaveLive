<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Leave Approvals</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_title">
                                    <h2><small>You have</small> <?php echo sizeof(json_decode($Requisitions)); ?> pending <small> approval(s)</small></h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                    <!-- <input type="button" value="Enable Bulk Action" class="btn btn-primary pull-right" id="apploveReqisitionBulkAction" > -->
                                    <table class="table table-bordered table-hover" style="font-size:80%;" id="approveRequisitionTable">
                                        <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Emp. No.</th>
                                              <th>Name</th>
                                              <th>Title</th>
                                              <th>Item</th>
                                              <th>Qty</th>
                                              <th>Request Date</th>
                                              <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                $Requisitions = json_decode($Requisitions);
                                                $i=0;
                                                foreach ($Requisitions as $key => $value) {
                                                    $row = "";
                                                    $i++;
                                                    $value = (array)$value;
                                                    
                                                    //Format the new dates
                                                    $year = substr($value['RequestDate'],0,4);
                                                    $month = substr($value['RequestDate'],6);
                                                    $day = substr($value['RequestDate'],4,2);
                                                    $humanReadableRequestDate = $day."-".$month."-".$year;
                                                    
                                                    $row = "<tr onclick='getRequisitionID(".$value['RequisitionID'].")'>";
                                                    $row .= "<td>".$i."</td>";
                                                    //$row .= "<td><input type='checkbox' class='checkbox' name='table_records' title='Click on bulk action to enable'></td>";
                                                    $row .= "<td class='empNO'>".strtoupper($value['EmployeeID'])."</td>";
                                                    $row .= "<td>".$value['FName']." ".$value['MName']." ".$value['LName']."</td>";
                                                    $row .= "<td>".$value['Title']."</td>";
                                                    $row .= "<td class='itemName'>".$value['ItemName']."</td>";
                                                    $row .= "<td class='qty'>".$value['Qty']."</td>";
                                                    $row .= "<td class='requestDate'>".$humanReadableRequestDate."</td>";
                                                    $row .= '<td onclick="actOnRequisition('.$value['RequisitionID'].')" data-toggle="modal" data-target=".bs-example-modal-sm" style="cursor:pointer;" id="actionBox"><center><i class="fa fa-gavel"></i></center></td>';
                                                    // $row .= "<td onclick='approveLeave(".$value['RequestID'].")'>Approve</td>";
                                                    // $row .= "<td onclick='rejectApplication(".$value['RequestID'].")')>Reject</td>";
                                                    $row .= "</tr>";
                                                    echo $row;
                                                }
                                            ?>
                                        </tbody>
                                    </table>
                                    
                                    <!-- <input type="button" value="Make Bulk Action" class="btn btn-primary pull-right" id="apploveReqisitionBulkAction" > -->

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
                                                    <h4>Approve/Deny</h4>
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
                                                        <input type="hidden" name="requisitionID" id="requisitionID" value="">
                                                        <input type="hidden" name="requestersID" id="requestersID" value="">
                                                        <span>Item</span><br/> 
                                                        <input type="text" name="requestedItem" id="requestedItem" value="" disabled="true"><br/>
                                                        <span>Qty</span><br/> 
                                                        <input type="text" name="qtyrequested" id="qtyrequested" value="" disabled="true"><br/>
                                                        <span>Date Requested</span> <br/>
                                                        <input type="text" name="dateRequested" id="dateRequested" value="" disabled="true"><br/>
                                                        <span>Comment</span><br/>
                                                        <textarea rows="4" cols="50" id="comment">
                                                        
                                                        </textarea>
                                                </div>
                                                <div class="modal-footer">
                                                  <button type="button" class="btn btn-primary" id="approveRequisition">Approve</button>
                                                  <button type="button" class="btn btn-primary" id="rejectRequisition">Deny</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div class="x_content">

                                  <p>Add class <code>bulk_action</code> to table for bulk actions options on row select</p>

                                  <div class="table-responsive">
                                    <table class="table table-striped jambo_table bulk_action">
                                      <thead>
                                        <tr class="headings">
                                          <th>
                                            <input type="checkbox" id="check-all" class="flat">
                                          </th>
                                          <th class="column-title">#</th>
                                          <th class="column-title">Emp. No.</th>
                                          <th class="column-title">Name </th>
                                          <th class="column-title">Title</th>
                                          <th class="column-title">Item </th>
                                          <th class="column-title">Qty </th>
                                          <th class="column-title no-link last"><span class="nobr">Action</span>
                                          </th>
                                          <th class="bulk-actions" colspan="7">
                                            <a class="antoo" style="color:#fff; font-weight:500;">Bulk Actions ( <span class="action-cnt"> </span> ) <i class="fa fa-chevron-down"></i></a>
                                          </th>
                                        </tr>
                                      </thead>

                                      <tbody>
                                        <tr class="even pointer">
                                          <td class="a-center ">
                                            <input type="checkbox" class="flat" name="table_records">
                                          </td>
                                          <td class=" ">1</td>
                                          <td class=" ">May 23, 2014 11:47:56 PM </td>
                                          <td class=" ">121000210 </td>
                                          <td class=" ">John Blank L</td>
                                          <td class=" ">Paid</td>
                                          <td class="">$7.45</td>
                                          <td class=" last">
                                            <a href="#">View</a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>



