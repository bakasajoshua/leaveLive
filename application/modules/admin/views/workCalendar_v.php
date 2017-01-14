<div class="right_col" role="main">  
    <div class="">
        <div class="row">
        	<div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Work Calendar</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_title">

                                    <h2>View Calendar</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                <button type="button" class="btn btn-primary pull-right" id="updateWorkCalendar">Update <?php echo date('Y'); ?> Calendar</button>
                                <button type="button" class="btn btn-primary pull-right" id="saveEmailTemplate"> <a href="<?php echo base_url('admin/internalHolidays/insertInternalHoliday'); ?>" style="color:#fff; text-decoration: none;">Insert Internal Holidays </a></button>
                                    <table class="table table-bordered table-hover" style="font-size:80%;" id="internalHolidaysTable">
                                        <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Holiday</th>
                                              <th>Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php
                                                $holidays = json_decode($holidays);
                                                $i=0;
                                                foreach ($holidays as $key => $value) {
                                                    $row = "";
                                                    $i++;
                                                    $value = (array)$value;
                                                    // print_r($value);
                                                    
                                                    $holidayName = $value['holidayName'];
                                                    $date = $value['holidayDate'];

                                                    $month = explode('-', $date);
                                                    $monthNum = $month[1];

             										$monthName = date('F', mktime(0, 0, 0, $monthNum, 10)); 
             										
                                                    $ID = $value['id'];

                                                    $row = '<tr data-toggle="modal" data-target=".bs-example-modal-lg" style="cursor:pointer;" onclick="getholidayRowID('.$i.')">';
                                                    $row .= '<td>'.($i).'</td>' ;
                                                    $row .= '<td class="holidayName">'.$holidayName.'</td>';
                                                    $row .= '<td class="holidayDate">'.$month[0].'  '.$monthName.'  '.$value['year'].'</td>';
                                                    $row .= '</tr>';
                                                    echo $row;
                                                }
                                            ?>
                                        </tbody>
                                    </table>

                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel2">View</h4>
                                                </div>
                                                <div class="modal-body">
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
                                                    <center>
									                	<form class="form-horizontal form-label-left" style="max-width: 70%;">
										                  	<div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Holiday Name</label>
										                    	<span id="holidayName" style="width:80%;"></span>
										                	  </div>
										                	  <div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Holiday Date</label>
                                                                <span id="holidayDate" style="width:80%;"></span>
										                	  </div>
										                	  <input type="hidden" value="" id="masterHolidayName">
										                	  <button type="button" class="btn btn-primary pull-right" id="deleteHoliday">Delete?</button>
										                </form>
									                </center>
                                                </div>
                                                <div class="modal-footer">
                                                 
                                                  
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