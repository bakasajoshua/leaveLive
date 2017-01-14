<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Leave History</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_content">

                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Leave Type</th>
                                              <th>Days Applied</th>
                                              <th>Start Date</th>
                                              <th>End Date</th>
                                              <th>Request Status</th>
                                              <th>Comment</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <?php
                                                function split_on($string, $num) {
                                                    $length = strlen($string);
                                                    $output[0] = substr($string, 0, $num);
                                                    $output[1] = substr($string, $num, $length );
                                                    return $output;
                                                }
                                                $i = 0;
                                                $userLeaveApplications = json_decode($userLeaveApplications);
                                                // print_r($userLeaveApplications);die;
                                                // pendingRequests
                                                foreach ($userLeaveApplications as $key => $value){
                                                    $row = "";
                                                    $value = (array)$value;
                                                    $i++;
                                                    //format to date
                                                    $to = substr($value['ToDate'], 0, strpos($value['ToDate'], " "));
                                                    $to = explode("/", $to);
                                                    $humanReadableToDate = $to[1]."-".$to[0]."-".$to[2];
                                                    //format to date

                                                    //format from date
                                                    $from = substr($value['FromDate'], 0, strpos($value['FromDate'], " "));
                                                    $from = explode("/", $from);
                                                    $humanReadableFromDate = $from[1]."-".$from[0]."-".$from[2];
                                                    //format from date

                                                    $row .= "<tr>";
                                                    $row .= "<td scope='row'>".$i."</td>";
                                                    $row .= "<td>".$value['AbsenceCode']."</td>";
                                                    $row .= "<td>".$value['AbsentDaysApplied']."</td>";
                                                    $row .= "<td>".$humanReadableFromDate."</td>";
                                                    $row .= "<td>".$humanReadableToDate."</td>";
                                                    $row .= "<td>".$value['status']."</td>";
                                                    if($value['Comment'] == ""){
                                                        $row .= "<td>Awaiting response</td>";
                                                    }else{
                                                        $row .= "<td>".$value['Comment']."</td>";
                                                    }
                                                    $row .= "</tr>";
                                                    echo $row;
                                                }
                                            ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>



    