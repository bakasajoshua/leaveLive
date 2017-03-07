<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>ESS</title>

    <!--text editor-->
    <link href="<?php echo base_url('assets/textEditor/editor.css'); ?>" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="<?php echo base_url('assets/bootstrap/dist/css/bootstrap.min.css'); ?>" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="<?php echo base_url('assets/font-awesome/css/font-awesome.min.css'); ?>" rel="stylesheet">
    <!-- NProgress -->
    <link href="<?php echo base_url('assets/nprogress/nprogress.css');?>" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="<?php echo base_url('assets/build/css/custom.css'); ?>" rel="stylesheet">
    <style>
        .overlay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1000px;
          z-index: 10;
          background-color: rgba(0,0,0,0.5); /*dim the background*/
        }
    </style>
  </head>

  <body class="nav-md">
    <div class="overlay">
        <img src="<?php echo base_url('assets/images/clientSpecific/ring-alt.gif');?>" style=" display:block;margin:auto; padding-top: 25%;">
    </div>
    <div style="width:100%; height:5px; background-color:#9e1f64;"></div>
    <div class="container body">
      <div class="main_container">
        <div class="col-md-3 left_col">
          <div class="left_col scroll-view" style="background-color: #3f3f3f;">
            <div class="navbar nav_title" style="height:3em; background-color: #3f3f3f;" id="site_titleDiv">
              <a href="index.html" class="site_title" style="height:3em; background-color: #3f3f3f;" >
              <h3>Employee Card</h3>
                <!-- <img src="<?php //echo base_url('assets/images/clientSpecific/logo.png'); ?>" >     -->
              </a>
            </div>
              <!-- menu profile quick info -->
              <!-- <div class="profile">
                <div class="profile_pic">
                <a href="<?php echo base_url("home"); ?>">
                  <img src="data:image/jpeg;base64,<?php echo $this->session->userdata('picture'); ?>" class="img-circle profile_img">
                </a>
                </div>
              </div> -->
              <!-- /menu profile quick info -->
            <div class="clearfix"></div>
            <br />

            <!-- sidebar menu -->
            <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
              <div class="menu_section">
              <?php
              if (strpos($content_view, 'admin') !== false) {
              ?>
              <!-- ADMIN MENU -->
                <ul class="nav side-menu">
                  <li>
                    <a> <strong> NAME: </strong> 
                    <span id="leftColTitle" class="wordwrap"><?php echo $this->session->userdata('FirstName').' '.$this->session->userdata('username').' '.$this->session->userdata('LastName'); ?></span>
                    </a>
                  </li>
                  <li>
                    <a> <strong> JOB TITLE: </strong> <span id="leftColTitle" class="wordwrap"><?php echo $this->session->userdata('Title'); ?></span> 
                    </a>
                  </li>
                 
                  <hr/>
                
                  <!-- <li>
                    <a href=""><i class="fa fa-desktop"></i> Emails <span class="fa fa-chevron-right"></span></a>
                  </li>-->
                  <li>
                    <a><i class="fa fa-edit"></i> Email Management <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="<?php echo base_url('admin/adminDash'); ?>">List</a></li>
                    </ul>
                  </li>

                  <li>
                    <a href="<?php echo base_url('admin/masterdata'); ?>"><i class="fa fa-edit"></i> Master Data <span class="fa fa-chevron-down"></span></a>
                  </li>

                  <li>
                    <a href="<?php echo base_url('admin/workCalendar'); ?>"><i class="fa fa-edit"></i> Work Calendar <span class="fa fa-chevron-down"></span></a>
                  </li>
                </ul>
              <!-- ADMIN MENU -->
              <?php
              }else{
              ?>
              <!-- NORMAL USER LOGIN -->
                <ul class="nav side-menu">
                  <li>
                    <a> <strong> NAME: </strong> 
                    <span id="leftColTitle" class="wordwrap"><?php echo $this->session->userdata('FirstName').' '.$this->session->userdata('username').' '.$this->session->userdata('LastName'); ?></span>
                    </a>
                  </li>
                  <li>
                    <a> <strong> JOB TITLE: </strong> <span id="leftColTitle" class="wordwrap"><?php echo $this->session->userdata('Title'); ?></span> 
                    </a>
                  </li>
                                  

                  <hr/>
                
                  <li>
                    <a href="<?php echo base_url('home'); ?>"><i class="fa fa-desktop"></i> Dashboard <span class="fa fa-chevron-right"></span></a>
                  </li>

                  <li>
                    <a href="<?php echo base_url('home/payslip'); ?>"><i class="fa fa-clone"></i> Payslip <span class="fa fa-chevron-right"></span></a>
                 </li>

                 <li>
                  <a><i class="fa fa-edit"></i> Leave Management <span class="fa fa-chevron-down"></span></a>
                  <ul class="nav child_menu">
                    <li><a href="<?php echo base_url('home/applyLeave'); ?>">Apply</a></li>
                    <li><a href="<?php echo base_url('home/history'); ?>">History</a></li>
                    <?php
                        $pendingRequests = json_decode($pendingRequests);
                        $i = 0;
                        foreach ($pendingRequests as $key => $value) {
                            $value = (array)$value;
                            $finalApproversID = $value['FinalApproversID'];
                            $linemanagerApproversID = $value['ApproversID'];
                            $Leavestatus = $value['status'];
                            $personID = $this->session->userdata('PersonID');

                            if(strcasecmp($personID, $finalApproversID) == 0){
                                if($Leavestatus == 'PENDING FINAL APPROVAL'){
                                    $i++;
                                }
                            }else if(strcasecmp($personID, $linemanagerApproversID) == 0){
                                if($Leavestatus == 'LEAVE RECEIVED'){
                                    $i++;
                                }
                            }
                        }

                        if($i > 0){
                  ?>
                      <li><a href="<?php echo base_url('home/approveLeave'); ?>">Approval</a></li>
                  <?php
                        }
                    ?>

                  </ul>
                 </li>

                  <!-- <li>
                    <a><i class="fa fa-clone"></i> Requisitions <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu">
                      <li><a href="<?php //echo base_url('home/requisitions'); ?>">Place</a></li>
                      <?php
                        // sizeof(json_decode())
                      // print_r(sizeof($Requisitions));die;
                        //if(isset($Requisitions) && sizeof($Requisitions)>0){
                          // echo sizeof($Requisitions);die;
                      ?>
                      <!-- <li><a href="<?php //echo base_url('home/approveRequisition'); ?>">Approve</a></li>-->
                      <?php
                       // }else{}
                      ?>
                    <!--  <li><a href="<?php //echo base_url('home/Reqhistory'); ?>">History</a></li>
                    </ul>
                  </li>-->

                  <!-- <li>
                    <a><i class="fa fa-home"></i> Help <span class="fa fa-chevron-down"></span></a>
                    <ul class="nav child_menu"> -->
                    <?php
                      // $masterData = $this->session->userdata('masterData');
                      // $essSupportEmail = $masterData[1]['dataValue'];
                    ?>
                      <!-- li><a href="<?php echo base_url('home/help'); ?>">Email: <?php echo $essSupportEmail; ?> </a></li>
                    </ul>
                  </li> -->
                  <li>
                    <a href="<?php echo base_url('Home/logoutHome'); ?>"><i class="glyphicon glyphicon-off"></i> Logout <span class="fa fa-chevron-right"></span></a>
                  </li>
                </ul>
              <!-- NORMAL USER LOGIN -->
              <?php 
              }
              ?>
              </div>
            </div>
            <!-- /sidebar menu -->

            <!-- /menu footer buttons -->
            <div class="sidebar-footer hidden-small">
              <hr/>
              <center>
                Powered By DataposIT
              </center>
            </div>
            <!-- /menu footer buttons -->
          </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">
          <div class="nav_menu">
            <nav>
              <div class="nav toggle">
                <a id="menu_toggle"><i class="fa fa-bars"></i></a>
              </div>

              <ul class="nav navbar-nav navbar-right">
                <li role="presentation" class="dropdown">
                  <a data-toggle="tooltip" data-placement="top" href="<?php echo base_url('Home/logoutHome'); ?>">
                    <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                    Logout
                  </a>
                </li>
                <li role="presentation" class="dropdown">
                <?php
                if (strpos($content_view, 'admin') !== false) {
                ?>
                  <h3>KIPPRA <small><br/><strong>Employee Self Service  Admin Panel</strong></small></h3>
                <?php
                }else{
                ?>
                  <h3>KIPPRA <small><br/><strong>Employee Self Service</strong></small></h3>
                <?php
                }
                ?>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- /top navigation -->

        <?php $this->load->view($content_view); ?>

        <!-- footer content -->
        <footer>
          <div class="clearfix"></div>
        </footer>
        <!-- /footer content -->
      </div>
    </div>

    <!-- jQuery -->
    <script src="<?php echo base_url('assets/jquery/dist/jquery.min.js'); ?>"></script>
    <!-- text editor-->
    <script src="<?php echo base_url('assets/textEditor/editor.js'); ?>"></script>
    <!-- Bootstrap -->
    <script src="<?php echo base_url('assets/bootstrap/dist/js/bootstrap.min.js'); ?>"></script>
    <!-- FastClick -->
    <script src="<?php echo base_url('assets/fastclick/lib/fastclick.js'); ?>"></script>
    <!-- NProgress -->
    <script src="<?php echo base_url('assets/nprogress/nprogress.js'); ?>"></script>
    <!-- Chart.js -->
    <script src="<?php echo base_url('assets/Chart.js/dist/Chart.min.js'); ?>"></script>
    <!-- Flot -->
    <script src="<?php echo base_url('assets/Flot/jquery.flot.js'); ?>"></script>
    <script src="<?php echo base_url('assets/Flot/jquery.flot.pie.js'); ?>"></script>
    <script src="<?php echo base_url('assets/Flot/jquery.flot.time.js'); ?>"></script>
    <script src="<?php echo base_url('assets/Flot/jquery.flot.stack.js');?>"></script>
    <script src="<?php echo base_url('assets/Flot/jquery.flot.resize.js'); ?>"></script>
    <!-- Flot plugins -->
    <script src="<?php echo base_url('assets/flot.orderbars/js/jquery.flot.orderBars.js'); ?>"></script>
    <script src="<?php echo base_url('assets/flot-spline/js/jquery.flot.spline.min.js'); ?>"></script>
    <script src="<?php echo base_url('assets/flot.curvedlines/curvedLines.js'); ?>"></script>
    <!-- DateJS -->
    <script src="<?php echo base_url('assets/DateJS/build/date.js'); ?>"></script>
    <!-- bootstrap-daterangepicker -->
    <!-- <script src="<?php echo base_url('assets/js/moment/moment.min.js');?> "></script> -->
    <script src="<?php echo base_url('assets/js/moment/moment.js');?> "></script>
    <script src="<?php echo base_url('assets/js/datepicker/daterangepicker.js');?> "></script>

    <!-- MORRIS -->
    <script src="<?php echo base_url('assets/raphael/raphael.min.js');?>"></script>
    <script src="<?php echo base_url('assets/morris.js/morris.min.js'); ?>"></script>
    <!-- Custom Theme Scripts -->
    <script src="<?php echo base_url('assets/build/js/custom.js'); ?>"></script>




    <!-- Flot -->
    <script>
      $(document).ready(function() {
        $(".overlay").hide();
// <<<<<<< HEAD

// =======
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
        //dashboard
        $getEntitlementsURL = "<?php echo base_url('home/home/getEntitlements'); ?>";
        //dashboard


        //leave application
        $applyLeaveUrl = "<?php echo base_url('home/applyLeave/apply')?>";
        $validateStartDateUrl = "<?php echo base_url('home/applyLeave/validateStartDate'); ?>";
        $getDatesToBlockUrl = "<?php echo base_url('home/applyLeave/getCalendarDatesToBlock'); ?>";
        $getHolidays = "<?php echo base_url('home/applyLeave/getHolidaysInMnD'); ?>";
        //leave application

        //leave Approval
        $rejectLeaveUrl = "<?php echo base_url('home/approveLeave/denyRequest')?>";
        $approveLeaveUrl = "<?php echo base_url('home/approveLeave/approveRequest')?>";
        $respondToLeaveEmailUrl = "<?php echo base_url('home/approveLeave/sendLeaveResponseEmail')?>";
        $refreshApproveLeaveURL = "<?php echo base_url('home/approveLeave') ?>";
        //leave Approval

        //payslip
        $getpayslipUrl = "<?php echo base_url('Home/Payslip/getPaySlip')?>";
        //payslip

        //requisitions
        $makerequisitionUrl = "<?php echo base_url('Home/requisitions/makerequisition')?>";
        $approveRequisitionUrl = "<?php echo base_url('home/approveRequisition/approve'); ?>";
        $refreshRequisitionPageurl = "<?php echo base_url('home/approveRequisition') ?>";
        //requisitions


        //email Management
        $editTemplateURL = "<?php echo base_url("admin/editEmail/getUniqueEmailTemplate"); ?>";
        $getSpecificEmailURL = "<?php echo base_url('admin/adminDash/getSpecificEmailTemplate'); ?>";
        $updateSpecificEmailURL = "<?php echo base_url('admin/editEmail/updateSpecifiEmailTemplate'); ?>";
        $getSpecificEmailForDisplayURL = "<?php echo base_url('admin/editEmail/getUniqueEmailTemplateForDisplay'); ?>";
        $refreshEditEmailURL = "<?php echo base_url('admin/editEmail/getUniqueEmailTemplate'); ?>";
        //email Management

        //masterData
        $editMasterDataURL = "<?php echo base_url('admin/masterdata/editmasterdata'); ?>";
        $getSpecificMasterDataURl = "<?php echo base_url('admin/masterdata/getSpecificmasterData'); ?>";
          //editMasterData
          $updateMasterDataURL = "<?php echo base_url('admin/Editmasterdata/updateMasterData'); ?>";
          //editMasterData
        //masterData

        //insert holiday
        $insertHolidayURL = "<?php echo base_url('admin/internalHolidays/saveInternalHoliday'); ?>";
        $deleteHolidayURL = "<?php echo base_url('admin/workCalendar/deleteHoliday'); ?>";
        $updatePublicHolidayURL = "<?php echo base_url('admin/workCalendar/updatePublicHoliday'); ?>";
        //insert holiday

        $getDaysRemainingURL = "<?php echo base_url('home/getDaysAvailable'); ?>";
        $empName = "<?php echo $this->session->userdata('FirstName'). " ".$this->session->userdata('LastName') ?>";


        //globally used
          //get expected return date
          function getdate($newDate,$leavedays) {
              var date = new Date($newDate);
              var newdate = new Date(date);
              
              $newdayvalue = parseInt(newdate.getDate()) + parseInt(($leavedays));
              newdate.setDate($newdayvalue);  
              var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
              var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
              var y = newdate.getFullYear();    

              $t = new Date(y,(mm-1),dd);
              $dayOfWeek = $t.getDay();
              $dayOfWeek = parseInt($dayOfWeek);

              if($dayOfWeek == 6){
                $newdayvalue = parseInt(newdate.getDate()) + parseInt((2));
                newdate.setDate($newdayvalue);  
              }else if($dayOfWeek == 0){
                $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
                newdate.setDate($newdayvalue);  
              }
              var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
              var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
              var y = newdate.getFullYear();   
              $returnDate = mm+"/"+dd+"/"+y;

              
              return $returnDate;
          }
          //get expected return date

          //get working days and total days applied
          window.workingDaysBetweenDates = function(startDate, endDate) {
              var millisecondsPerDay = 86400 * 1000; 
              startDate.setHours(0,0,0,1);  
              endDate.setHours(23,59,59,999);  
              var diff = endDate - startDate;     
              var days = Math.ceil(diff / millisecondsPerDay);
              
              // Subtract two weekend days for every week in between
              var weeks = Math.floor(days / 7);

              // Handle special cases
              var startDay = startDate.getDate();
              var endDay = endDate.getDate();
              if(startDay == endDay){
                resp = '{"leavedays":0,"totalDays":0}';
              }else{
                workingdays = days - (weeks * 2);
                resp = '{"leavedays":'+workingdays+',"totalDays":'+days+'}';
              }
              return resp;
          } 
          //get working days and total days applied
          window.computeLeaveDetails23 = function(a,b){
              $leavDaysArray = workingDaysBetweenDates(a,b);
              console.log(a+"isssss"+b);
              console.log($leavDaysArray);
              $leavDaysArray = JSON.parse($leavDaysArray);//gets you the working days and total leave days applied.
              $leavedays = $leavDaysArray['leavedays'];
              var date = new Date(a);
              var newdate = new Date(date);    

              //if start date plus days applied covers weekend skip weekend
                $k = 1;
                $workingDays = 0;
                $leavedays = $leavDaysArray['totalDays']+1;
                $handleHolidayFallingOnWeekend = 0;
// <<<<<<< HEAD
//                 $holidayCounter = 0;
//                 while($k < $leavedays){
//                   //startDate broken down
//                   var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//                   var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//                   var y = newdate.getFullYear();
//                   //startDate broken down

//                   //put the broken up date together to get the day you applied. monday-sunday
//                   $t = new Date(y,(mm-1),dd);
//                   $dayOfWeek = $t.getDay();
//                   $dayOfWeek = parseInt($dayOfWeek);
//                   //put the broken up date together to get the day you applied. monday-sunday
//                   // console.log('Day of week sun-mon '+$dayOfWeek);
//                   if($dayOfWeek == 0 || $dayOfWeek == 6){
//                     $holidaysWithinRange = 0;
//                     $startDate = $("#startDate").val();
//                     $endDate = $("#endDate").val();

//                     $startDateArray = $startDate.split("/");
//                     $endDateArray = $endDate.split("/");

//                     $currentYear = new Date().getFullYear();
//                     $kl = 0;
//                     while($kl < $holidays.length){
//                           //loop through holidays to check if any falls within range
//                           $holidayDate = $holidays[$kl]['holidayDate'];//compare this to the start date end date range provided
//                           $holidayDateArray = $holidayDate.split("-");

//                           // console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
//                           // console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
//                           // console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
                          
//                           var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
//                           var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
//                           var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

//                           // console.log("From "+from+" To "+to+" Check "+check);
//                           $holidayCounter = 0;
//                           if(check >= from && check <= to){
//                               //if it falls on range increase days buy 1
//                               $holidayCounter++;                              
//                               // console.log("falls in range");
//                               // console.log("From: "+from);
//                               // console.log("To: "+to);
//                               // console.log("Check: "+check);
//                           }else{
//                               //if it doesn't fall in range DO NOTHINg
//                               // console.log("not in range");
//                               // console.log("From: "+from);
//                               // console.log("To: "+to);
//                               // console.log("Check: "+check);
//                           }
//                           $kl++;
//                           console.log("Length of holidays "+$holidays.length);
//                     }
//                       $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//                       console.log("Current value of holidayCOunter "+$handleHolidayFallingOnWeekend+" increase counter by "+$holidayCounter);
//                       $handleHolidayFallingOnWeekend = $holidayCounter + $handleHolidayFallingOnWeekend;
//                       console.log("$handleHolidayFallingOnWeekend new value"+$handleHolidayFallingOnWeekend);
//                       newdate.setDate($newdayvalue);  
//                   }else{
//                     //increase day by one
//                     $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//                     newdate.setDate($newdayvalue);  
//                     $workingDays++;
//                     // console.log("Working Days "+$workingDays+" Day of week "+$workingDays);
//                     // console.log(newdate);
//                     //increase day by one
//                   }
//                   //startDate broken down
//                   var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//                   var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//                   var y = newdate.getFullYear();
//                   //startDate broken down
//                   // console.log("New Date after adding 1 "+mm+"/"+dd+"/"+y);
//                   $k++;
//                 }

//                 $daysEntitled = $("#daysAvaliable").val();
//                 if($workingDays > $daysEntitled){
//                     $message = "You have "+$daysEntitled+" leave days only.";
//                 }else{  
//                    //display working days
//                     // $("#daysToApply").val($workingDays);
//                     //display working days

//                     //get expected return date
                    
//                     // $expectedReturnDate = getDateFromStartDateLeaveDays($('#startDate').val(),$leavDaysArray['totalDays']);
//                     // $expectedReturnDate = $expectedReturnDate.split("k");
//                     // $("#returnDate").val($expectedReturnDate[0]);
//                     // //get expected return date

//                     // //compute remaining days
//                     // $daysApplied = parseInt($("#daysToApply").val());
//                     // $availableDays = parseInt($("#daysAvaliable").val());
//                     // console.log($daysApplied+" "+$availableDays);
//                     // $remaingDays = $availableDays - $daysApplied;
//                     // console.log($daysApplied);

//                     // $("#daysRemaining").val($remaingDays);
//                     //compute remaining days
// =======
                $kl = 0;
                $holidayCounter = 0;
                $holidaysWithinRange = 0;
                $startDate = $("#startDate").val();
                $endDate = $("#endDate").val();

                $startDateArray = $startDate.split("/");
                $endDateArray = $endDate.split("/");

                $currentYear = new Date().getFullYear();
                while($k < $leavedays){//loop through the leave days 
                    //startDate broken down
                    var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
                    var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
                    var y = newdate.getFullYear();
                    //startDate broken down

                    //put the broken up date together to get the day you applied. monday-sunday
                    $t = new Date(y,(mm-1),dd);
                    $dayOfWeek = $t.getDay();
                    $dayOfWeek = parseInt($dayOfWeek);
                    //put the broken up date together to get the day you applied. monday-sunday
                    // console.log('Day of week sun-mon '+$dayOfWeek);
                    if($dayOfWeek == 0 || $dayOfWeek == 6){//if the day of the week is a weekend, check the holidays that fall on this weekend
                    
                      console.log($holidays);
                        $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
                        //console.log("Current value of holidayCOunter "+$handleHolidayFallingOnWeekend+" increase counter by "+$holidayCounter);
                        $handleHolidayFallingOnWeekend = $holidayCounter + $handleHolidayFallingOnWeekend;
                        //console.log("$handleHolidayFallingOnWeekend new value"+$handleHolidayFallingOnWeekend);
                        newdate.setDate($newdayvalue);  
                    }else{//if the day of the week is a weekday, check the holidays that fall in the course of the week
                      //increase working days by one
                      $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
                      newdate.setDate($newdayvalue);  
                      
                      $workingDays++;
                      //increase day by one
                    }
                    //startDate broken down
                    var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
                    var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
                    var y = newdate.getFullYear();
                    //startDate broken down
                    // console.log("New Date after adding 1 "+mm+"/"+dd+"/"+y);
                    $k++;
                }

                $daysEntitled = $("#daysAvaliable").val();
                // console.log($daysEntitled+" Days entitled ddd"+$workingDays);
                if($workingDays > $daysEntitled){
                    $message = "You have "+$daysEntitled+" leave days only.";
                }else{  
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
                    $message = "OK";
                }
                $workingdays = $workingDays+parseInt($handleHolidayFallingOnWeekend);
                console.log("Working days "+$workingDays+" "+$handleHolidayFallingOnWeekend);
                return '{"workingDays":'+$workingDays+',"message":"'+$message+'","handleHolidayFallingOnWeekend":"'+$handleHolidayFallingOnWeekend+'"}';
          }
            //gets the holidays set in the system
// <<<<<<< HEAD

// =======
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
            window.getHolidays = function(){
                $.ajax({
                  url:$getHolidays,
                  data:{},
                  type:'POST',
                  success:function($resp,status){
                   // console.log($resp);
                    $holidays = JSON.parse($resp);
                    // console.log($holidays[0]['holidayName']);
                    return $holidays;
                  }
                });
            }   
            getHolidays();//this is called to pre-popuate the holidays variable
            //gets the holidays set in the system
        //globally used
      });
    </script>
    <script src="<?php echo base_url('assets/jqueryScripts/applyLeave.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/approveLeave.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/payslip.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/requisition.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/admin_emailManagement.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/masterData.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/internalHolidays.js'); ?>"></script>
    <script src="<?php echo base_url('assets/jqueryScripts/workingCalendar.js'); ?>"></script>


        <?php
    if (strpos($content_view, 'Home/index_v') !== false) {
    ?>
    <script src="<?php echo base_url('assets/jqueryScripts/dashboard.js'); ?>"></script>
    <?php
    }else{
    }
    ?>
    <!-- /Flot -->

 

    
  </body>
</html>