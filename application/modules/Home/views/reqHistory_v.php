<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Requisition History</h2>
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
                                              <th>Item</th>
                                              <th>Qty</th>
                                              <th>Request Date</th>
                                              <th>Response Date</th>
                                              <th>Status</th>
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
                                                $getUserRequisitions = json_decode($getUserRequisitions);
                                                foreach ($getUserRequisitions as $key => $value){
                                                    $row = "";
                                                    $value = (array)$value;
                                                    $i++;
                                                    //Format the new dates
                                                    $newFromDate = split_on($value['requestdate'],4);
                                                    $year = $newFromDate[0];
                                                    $dayMonth = split_on($newFromDate[1],2);
                                                    $month = $dayMonth[0];
                                                    $day = $dayMonth[1];
                                                    $humanReadableRequestDate = $day."-".$month."-".$year;

                                                    $newToDate = split_on($value['approvalDate'],4);
                                                    $year = $newToDate[0];
                                                    $dayMonth = split_on($newToDate[1],2);
                                                    $month = $dayMonth[0];
                                                    $day = $dayMonth[1];
                                                    $humanReadableApprovalDate = $day."-".$month."-".$year;
                                                    //Format the new dates

                                                    $row .= "<tr>";
                                                    $row .= "<td scope='row'>".$i."</td>";
                                                    $row .= "<td>".$value['item']."</td>";
                                                    $row .= "<td>".$value['qty']."</td>";
                                                    $row .= "<td>".$humanReadableRequestDate."</td>";
                                                    $row .= "<td>".$humanReadableApprovalDate."</td>";
                                                    $row .= "<td>".$value['status']."</td>";
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



    