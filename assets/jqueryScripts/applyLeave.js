//does not subtract holidays
// $(document).ready(function(){
//   //plugin for start Date
//   $('#startDate').daterangepicker({
//     singleDatePicker: true,
//     calender_style: "picker_4",
//     // minDate: new Date(),
//     isInvalidDate: function(date){
//       /*
//       validates the following dates
//       1) 1st Jan- 2nd Jan
//       2) 1st May
//       3) 25th Dec - 31st Dec
//       4) 1st June
//       5) 20th Oct
//       6) 12th Dec
//       */

//       if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
//         // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || 
//         return true; 
//       }else{
//         return false;
//       }
//     },
//   }, function(start, end, label) {
//     //console.log(start.toISOString(), end.toISOString(), label);
//   });
//   //plugin for start date
  
//   //plugin for end date
//   $('#endDate').daterangepicker({
//     singleDatePicker: true,
//     calender_style: "picker_4",
//     // minDate: new Date(),
//     isInvalidDate: function(date){
//       /*
//       validates the following dates
//       1) 1st Jan- 2nd Jan
//       2) 1st May
//       3) 25th Dec - 31st Dec
//       4) 1st June
//       5) 20th Oct
//       6) 12th Dec
//       */

//       if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
//         // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') 
//         return true; 
//       }else{
//         return false;
//       }
//     },
//   }, function(start, end, label) {
//     //console.log(start.toISOString(), end.toISOString(), label);
//   });
//   //plugin for end date

  
//   $('#startDate').prop('disabled',true);
//   $('#endDate').prop('disabled',true);
//   $('#daysAvaliable').prop('disabled', true);
//   $('#daysToApply').prop('disabled', true);
//   $('#daysRemaining').prop('disabled', true);
//   $('#returnDate').prop('disabled', true);
//   $("#applyLeave").prop('disabled', true);

//   $("#startDate").change(function(){
//     $('#endDate').val('');
//     $('#daysToApply').val('');
//     $('#daysRemaining').val('');
//     $('#returnDate').val('');
//     $("#applyLeave").prop('disabled', true);

//     $daysNID = $("#absenceReason").val();

//     $daysNID = $daysNID.split("k"); 
//     $leavedays = Math.ceil($daysNID[0]);
//     $leaveTypeID = $daysNID[1];
//     console.log($leaveTypeID);

//     if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
//       console.log("disable entry of end date");

//       $startDate = $('#startDate').val();
//       $endDate = $('#endDate').val();
//       //format date
//       $dateValue = $startDate.split('/');
//       $year = $dateValue[2];
//       $month = $dateValue[0];
//       $dayofWeek = $dateValue[1];
//       $startDate = $month+'/'+$dayofWeek+'/'+$year;
//       // format date

//       $expectedReturnDate = getReturnDateIncludingWeekends($startDate,$leavedays);
//       // console.log("getReturnDateIncludingWeekends has run "+getReturnDateIncludingWeekends($startDate,$leavedays));
//       $endAndReturnDate = $expectedReturnDate.split('k');
//       $("#daysToApply").val($leavedays);
//       $("#returnDate").val($endAndReturnDate[0]);
//       $("#endDate").val($endAndReturnDate[1]);
//       $('#daysRemaining').val(0);
//       $("#applyLeave").prop('disabled', false);
//     }else{
//       $("#endDate").prop('disabled', false);
//       $days = $("#daysToApply").val();
//       if($days == null || $days  == undefined || $days == ""){
//         // console.log("undefined");
//       }else{
//         $startDate = $('#startDate').val();
//         //format date
//         $dateValue = $startDate.split('/');
//         $year = $dateValue[2];
//         $month = $dateValue[0];
//         $dayofWeek = $dateValue[1];
//         $newDate = $month+'/'+$dayofWeek+'/'+$year;

//         //format date
//         $expectedReturnDate = getDateFromStartDateLeaveDays($newDate,$days);
//         $expectedReturnDate = $expectedReturnDate.split("k");
//         $("#returnDate").val($expectedReturnDate[0]);
//         //sex
//         //$("#endDate").val($expectedReturnDate[1]);
//       }
//     }
//   });

//   //apply leave
//     //auto populates the number of days field during leave application
//   $("#absenceReason").change(function(){
//       $('#startDate').prop('disabled',false);
//       $('#endDate').prop('disabled',true);
//       $('#endDate').val('');
//       $('#startDate').val('');
//       $('#daysToApply').val('');
//       $('#daysRemaining').val('');
//       $('#daysAvaliable').val('');
//       $('#returnDate').val('');
//       $("#applyLeave").prop('disabled', true);

//       $daysNID = $("#absenceReason").val();

//       $daysNID = $daysNID.split("k"); 
//       $leavedays = Math.ceil($daysNID[0]);
//       $leaveTypeID = $daysNID[1];
//       $("#daysAvaliable").val($leavedays);
//       if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
//           $("#daysToApply").prop('disabled', true);
//           $('#endDate').prop('disabled', true);

//           $startDate = $('#startDate').val();
          
//           //format date
//           $dateValue = $startDate.split('/');
//           $year = $dateValue[2];
//           $month = $dateValue[0];
//           $dayofWeek = $dateValue[1];
//           $startDate = $month+'/'+$dayofWeek+'/'+$year;
//           // format date
//           if($startDate === '/undefined/undefined' || $startDate === '/undefined/undefined' || $startDate === '/undefined/undefined'){
//           }else{
//             $expectedReturnDate = getDateFromStartDateLeaveDays($startDate,$leavedays);
//             $endAndReturnDate = $expectedReturnDate.split('k');
//             console.log(" End and return Date "+$endAndReturnDate);
//             $("#returnDate").val($endAndReturnDate[0]);
//             $("#endDate").val($endAndReturnDate[1]);
//             $("#applyLeave").prop('disabled', false);
//           }
//       }else{
//           $('#daysToApply').attr('max', $leavedays);
//           $('#daysToApply').attr('min', parseInt(0));
//        // $("#daysToApply").prop('disabled', false);
//       }
//   });
//   //auto populates the number of days field during leave application

//   window.getNumberOfHolidaysWithinDateRange = function(){
//         //ADJUSTS FOR HOLIDAYS
//     //get the holidays
//     //check to see if holidays fall within the date range applied
//     //do necessary adjustements
//     $holidaysWithinRange = 0;
//     $startDate = $("#startDate").val();
//     $endDate = $("#endDate").val();

//     $startDateArray = $startDate.split("/");
//     $endDateArray = $endDate.split("/");

//     $currentYear = new Date().getFullYear();
//     $k = 0;
//     while($k < $holidays.length){
//         //loop through holidays to check if any falls within range
//         $holidayDate = $holidays[$k]['holidayDate'];//compare this to the start date end date range provided
//         $holidayYear = $holidays[$k]['year'];
//         console.log("$holidayDate "+$holidayDate);
//         $holidayDateArray = $holidayDate.split("-");

//         // console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
//         // console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
//         // console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
//         //FromDate >=  @startDate AND ToDate <=  @endDate
//         var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
//         var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
//         var check = new Date($holidayYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

        
//         //check if this datae falls on weekedn, if not it is okay increament else don't increament
//         console.log("From "+from+" Check "+check+" To "+to);
//         if(check > from && check < to){
//             console.log("Value of K "+$k+"  "+check);
//             //if it falls on range increase days buy 1
//             console.log("falls in range ");
//             // console.log("From: "+from);
//             // console.log("To: "+to);
//             // console.log("Check: "+check);
//             // console.log("DOW "+$dayOfWeek);
//             //(check > from && check < to) && ($dayOfWeek == 6 || $dayOfWeek == 0)
//             $dayOfWeek = check.getDay();
//             $dayOfWeek = parseInt($dayOfWeek);
//             if($dayOfWeek == 6 || $dayOfWeek == 0){
//                 console.log("falls in range but is a weekend dont count");
//             }else{
//                 console.log("falls in range but is a weekday count");
//                 $holidaysWithinRange++;
//             }
//         }else{
//             //if it doesn't fall in range DO NOTHINg
//             console.log("not in range");
//             // console.log("From: "+from);
//             // console.log("To: "+to);
//             // console.log("Check: "+check);
//         }

//         // if($holidayDate >= $startDateDnM && $holidayDate <= $endDateDnM){//if the 
//         //   
//         // }else{
//         //   
//         // }
//         $k++;
//     }
//     //ADJUSTS FOR HOLIDAYS
//     return $holidaysWithinRange;
//   }
//   //gets the holidays set in the system
//   window.getHolidays = function(){
//       $.ajax({
//         url:$getHolidays,
//         data:{},
//         type:'POST',
//         success:function($resp,status){
//           console.log($resp);
//           $holidays = JSON.parse($resp);
//           // console.log($holidays[0]['holidayName']);
//           return $holidays;
//         }
//       });
//   }   
//   getHolidays();//this is called to pre-popuate the holidays variable
//   //gets the holidays set in the system
//   function getReturnDateIncludingWeekends($startDate,$leavedays){
//       //compute return date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays));
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var returnDate = mm + '/' + dd + '/' + y;
//       //compute return date

//       //compute end date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays)-1);
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var leaveEndDate = mm + '/' + dd + '/' + y;
//       //compute end date

//      // console.log('getReturnDateIncludingWeekends '+returnDate+'leave end date'+leaveEndDate);
//       return returnDate+'k'+leaveEndDate;
//   }

//   function getDateFromStartDateLeaveDays($startDate,$leavedays){
//     //get the number weeks add the weeks
//     var date = new Date($startDate);
//     var newdate = new Date(date);
//     $k = 0;

//     $("#totalDaysApplied").val($leavedays);//hidden field
//     // $totalDaysApplied = $leavedays + $totalWeekendDaysOnLeave;
//     while($k < $leavedays){
//       //add the number of days
//       // $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//       // newdate.setDate($newdayvalue);
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       $t = new Date(y,(mm-1),dd);
//       $dayOfWeek = $t.getDay();
//       $dayOfWeek = parseInt($dayOfWeek);
//       // console.log("DOW "+$dayOfWeek);
//       if($dayOfWeek == 6 || $dayOfWeek == 0){
//         // console.log("weekend");
//         $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//         newdate.setDate($newdayvalue);
//         console.log(newdate);
//         $k--;
//       }else{  
//         // console.log("not weekend");
//         $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//         newdate.setDate($newdayvalue);
//         console.log(newdate);
//       }
//       $k++;
//     }
//     var leaveEndDate = mm + '/' + dd + '/' + y;

//     $newdayvalue = parseInt(newdate.getDate());
//     newdate.setDate($newdayvalue);  
//     var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//     var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//     var y = newdate.getFullYear();

//     // console.log("return date"+dd+" "+mm+" "+y);
//     $t = new Date(y,(mm-1),dd);
//     // console.log("return date"+$t);

//     $dayOfWeek = $t.getDay();
//     $dayOfWeek = parseInt($dayOfWeek);
//     // console.log('ODW '+$dayOfWeek);
//     if($dayOfWeek == 6){//saturday
//       var $newDate = mm + '/' + dd + '/' + y;
//       var date = new Date($newDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt(newdate.getDate()) + parseInt((2));
//       newdate.setDate($newdayvalue);  
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       // dd = parseInt(dd)+2;
//     }else if($dayOfWeek == 0){//sunday
//       var $newDate = mm + '/' + dd + '/' + y;
//       var date = new Date($newDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//       newdate.setDate($newdayvalue);  
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       // dd = parseInt(dd)+1;
//     }else{}

//     var returnDate = mm + '/' + dd + '/' + y;
//     return returnDate+'k'+leaveEndDate;
//     // return JSON.stringify('{"leavedays":'+someFormattedDate+',"totalDays":'+someFormattedDate+'}'); 
//   }
//   //get expected return date

//   window.computeLeaveDetails = function(a,b){
//     $leavDaysArray = JSON.parse(workingDaysBetweenDates(a,b));//gets you the working days and total leave days applied.
    
//     $leavedays = $leavDaysArray['leavedays'];

//     var date = new Date(a);
//     var newdate = new Date(date);    

//     //if start date plus days applied covers weekend skip weekend
//       $k = 1;
//       $workingDays = 0;
//       $leavedays = $leavDaysArray['totalDays']+1;
//       while($k < $leavedays){
//         //startDate broken down
//         var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//         var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//         var y = newdate.getFullYear();
//         //startDate broken down

//         //put the broken up date together to get the day you applied. monday-sunday
//         $t = new Date(y,(mm-1),dd);
//         $dayOfWeek = $t.getDay();
//         $dayOfWeek = parseInt($dayOfWeek);
//         //put the broken up date together to get the day you applied. monday-sunday
//         // console.log('Day of week sun-mon '+$dayOfWeek);
//         if($dayOfWeek == 0 || $dayOfWeek == 6){
//           $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//           newdate.setDate($newdayvalue);  
//         }else{
//           //increase day by one
//           $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//           newdate.setDate($newdayvalue);  
//           $workingDays++;
//           // console.log("Working Days "+$workingDays+" Day of week "+$workingDays);
//           // console.log(newdate);
//           //increase day by one
//         }
//         //startDate broken down
//         var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//         var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//         var y = newdate.getFullYear();
//         //startDate broken down
//         // console.log("New Date after adding 1 "+mm+"/"+dd+"/"+y);
//         $k++;
//       }

//       $daysEntitled = $("#daysAvaliable").val();
      
//       if($workingDays > $daysEntitled){
//           $("#startDate").val("");
//           $("#absenceReason").val("");
//           $("#daysAvaliable").val("");
//           $("#daysToApply").val("");
//           $("#daysRemaining").val("");
//           $("#returnDate").val("");
//           $("#endDate").val("");
//           $('#startDate').prop('disabled',true);
//           $('#endDate').prop('disabled',true);

//           var element = document.getElementById("applyLeave")
//           element.setAttribute('disabled','disabled')
          
//           $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//           hideLoginErrorBox(); 

//       }else{  
//           //display working days
//           $("#daysToApply").val($workingDays);
//           //display working days

//           //get expected return date
//           //sex
//           $expectedReturnDate = getDateFromStartDateLeaveDays($('#startDate').val(),$leavDaysArray['totalDays']);
//           $expectedReturnDate = $expectedReturnDate.split("k");
//           $("#returnDate").val($expectedReturnDate[0]);
//           //get expected return date

//           //compute remaining days
//           $daysApplied = parseInt($("#daysToApply").val());
//           $availableDays = parseInt($("#daysAvaliable").val());
//           console.log($daysApplied+" "+$availableDays);
//           $remaingDays = $availableDays - $daysApplied;
//           console.log($daysApplied);

//           $("#daysRemaining").val($remaingDays);
//           //compute remaining days
//       }
//   }

//   //On End Date Change
//   // $("#endDate").change(function(){
//   //   $startDate = $('#startDate').val();
//   //   $endDate  = $('#endDate').val();
//   //   $handleHolidayFallingOnWeekend = 0;
//   //   $.ajax({
//   //     url:$validateStartDateUrl,
//   //     data:{"startDate":$startDate,"endDate":$endDate},
//   //     type:'POST',
//   //     success:function($resp,status){
//   //         $resp = JSON.parse($resp);
//   //         $status = parseInt($resp['status']);
//   //         if($status == 0){
//   //           $startDate = $startDate.split("/");
//   //           $endDate = $endDate.split("/");
//   //           if($startDate.toString() === $endDate.toString()){
//   //               //ok
//   //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //               $leaveDetails = computeLeaveDetails23(a,b);
//   //               $leaveDetails = JSON.parse($leaveDetails);
//   //               $message = $leaveDetails['message'];
//   //               $workingDays = $leaveDetails['workingDays'];
//   //               console.log($leaveDetails);
//   //               if($message === "OK"){
//   //                   $("#daysToApply").val($workingDays);
//   //                   //compute remaining days
//   //                   $daysApplied = parseInt($("#daysToApply").val());
//   //                   $availableDays = parseInt($("#daysAvaliable").val());
//   //                   console.log($daysApplied+" "+$availableDays);
//   //                   $remaingDays = $availableDays - $daysApplied;
//   //                   console.log($daysApplied);

//   //                   $("#daysRemaining").val($remaingDays);
//   //                   //compute remaining days
//   //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//   //                   $returnDateArray = $returnDate.split("k");
//   //                   $("#returnDate").val($returnDateArray[0]);
//   //               }else{
//   //                   console.log("Error computing number of working days");
//   //               }

//   //               $("#applyLeave").prop("disabled", false);
//   //               console.log("Data appears fine ");
//   //           }else{
//   //               if($endDate[0] < $startDate[0]){//if end month is less than start month
//   //                 console.log('End month is less than start year');
//   //                 //wrong throw error, except if end year is greater than start year
//   //                 if($endDate[2] > $startDate[2]){//if end year is greator than start year
//   //                   //ok
//   //                   //get remaining days till end of year
//   //                   var d = new Date($startDate[2], 11, 31);//end date of year
//   //                   var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //                   console.log(d+"current year days comutation "+c);
//   //                   $workingDaysTillEndYear = computeLeaveDetails23(c,d);
//   //                   $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
//   //                   $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
//   //                   $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
//   //                   $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//   //                   //get remaining days till end of year

//   //                   //get days between start of year and end date selected
//   //                   $endDate = $endDate.split("/");
//   //                   var e = new Date($endDate[2], 00, 01);//first day of first month of end year
//   //                   var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //                   console.log($endDate+"Year ");
//   //                   console.log(e+"new year days comutation "+f);
//   //                   $workingDaysFromYearStart = computeLeaveDetails23(e,f);
//   //                   $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
//   //                   $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
//   //                   $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
//   //                   $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//   //                   //get days between start of year and end date selected

//   //                   console.log($workingDaysFromYearStartQty+" $workingDaysTillEndYearQty "+$handleHolidayFallingOnWeekendNextYear);

//   //                   //add the two days to get total days applied
//   //                   console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
//   //                   console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//   //                   console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
//   //                   console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
//   //                   $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//   //                   //add the two days to get total days applied
//   //                   $daysAvailable =  $("#daysAvaliable").val();
//   //                   //check of days applied is more than days entitled
//   //                   if($daysAvailable < $totalDaysApplied){
//   //                       $("#startDate").val('');
//   //                       $("#endDate").val('');
//   //                       $("#daysToApply").val('');
//   //                       $("#daysRemaining").val('');
//   //                       $("#returnDate").val('');

//   //                       $("#endDate").prop("disabled", true);
//   //                       $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//   //                       hideLoginErrorBox(); 
//   //                   }else{
//   //                       console.log("End month is less than start month");

//   //                       $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                       console.log("Number of "+$NoOfHolidays+"$totalDaysApplied"+$totalDaysApplied);
//   //                       console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

//   //                       $("#daysToApply").val($totalDaysApplied);
//   //                       $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
//   //                       $("#daysRemaining").val($remaingDays);

//   //                       $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);
//   //                       $returnDateArray = $returnDate.split("k");
//   //                       $("#returnDate").val($returnDateArray[0]);
//   //                   }
//   //                 }else{
//   //                     console.log('1');
//   //                     $("#startDate").val('');
//   //                     $("#endDate").val('');
//   //                     $("#endDate").prop("disabled", true);
//   //                     $("#loginerrorBox p").html("The end date cannot be less than start date");
//   //                     hideLoginErrorBox();
//   //                 }
//   //               }else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
//   //               //validate the days of the week
//   //               if($endDate[1] < $startDate[1]){//if end day is less than start day
//   //                 //wrong
//   //                 //display error
//   //                 // console.log("The end day can't be less than start day");
//   //                 console.log('2');
//   //                 $("#startDate").val('');
//   //                 $("#endDate").val('');
//   //                 $("#endDate").prop("disabled", false);
//   //                 $("#loginerrorBox p").html("The end date cannot be less than start date");
//   //                 hideLoginErrorBox();
//   //               }else{//end day is greater than start day
//   //                 //ok
//   //                 //call function to compute end date, return date and number of days
//   //                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //                 $leaveDetails = computeLeaveDetails23(a,b);
//   //                 $leaveDetails = JSON.parse($leaveDetails);
//   //                 $message = $leaveDetails['message'];
//   //                 $workingDays = $leaveDetails['workingDays'];
//   //                 $handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

//   //                 console.log($leaveDetails);
//   //                 if($message === "OK"){
//   //                     $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                     console.log("Number of holidays"+$NoOfHolidays);
//   //                     console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//   //                     $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//   //                     console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
//   //                     $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
//   //                     $("#daysToApply").val($workingDaysApplied);//set the days applied
//   //                     //subtract from the number of days applied
//   //                     //get the number of holidays between the dates selected

//   //                     // $workingDaysApplied = parseInt($workingDaysApplied);
//   //                     $availableDays = parseInt($("#daysAvaliable").val());
//   //                     console.log($availableDays+" remaingi days"+$workingDaysApplied);
//   //                     $remaingDays = $availableDays - $workingDaysApplied;

//   //                     $("#daysRemaining").val($remaingDays);
//   //                     //compute remaining days
//   //                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//   //                     console.log($workingDays+"sdsdsd");
//   //                     console.log("Return Date info "+$returnDate);
//   //                     $returnDateArray = $returnDate.split("k");
//   //                     $returnDate = $returnDateArray[0].split("/");
//   //                     $month = $returnDate[0];
//   //                     $day = $returnDate[1];
//   //                     $combi = $month+"/"+$day;

//   //                     if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){
//   //                       $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
//   //                     }else{
//   //                       $returnDate = $returnDateArray[0];
//   //                     }

//   //                     console.log("Return Datess"+$returnDate);
//   //                     // $("#returnDate").val($returnDateArray[0]);
//   //                     $("#returnDate").val($returnDate);
//   //                 }else{
//   //                     console.log("Error computing number of working days");
//   //                 }
                
//   //                 $("#applyLeave").prop("disabled", false);
//   //                 console.log("Data appears fine ");
//   //               }
//   //             }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
//   //               //call function to compute end date and and number of days
//   //               //okconsole.log("Error");
//   //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //               $leaveDetails = computeLeaveDetails23(a,b);
//   //               $leaveDetails = JSON.parse($leaveDetails);
//   //               $message = $leaveDetails['message'];
//   //               $workingDays = $leaveDetails['workingDays'];
//   //               console.log("Just before leavedetails "+$leaveDetails['message']);

//   //               if($message === "OK"){
//   //                   console.log("Just before leavedetails");  
//   //                   //compute remaining days
//   //                   //get the number of holidays between the dates selected
//   //                   //subtract from the number of days applied
//   //                   $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                   console.log("Number of "+$NoOfHolidays);
//   //                   console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//   //                   $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//   //                   $("#daysToApply").val($workingDaysApplied);//set the days applied
//   //                   //subtract from the number of days applied
//   //                   //get the number of holidays between the dates selected

//   //                   // $workingDaysApplied = parseInt($workingDaysApplied);
//   //                   $availableDays = parseInt($("#daysAvaliable").val());
//   //                   console.log("Days applied "+$workingDaysApplied+" Days available xxx "+$availableDays);
//   //                   $remaingDays = $availableDays - $workingDaysApplied;

//   //                   $("#daysRemaining").val($remaingDays);
//   //                   //compute remaining days
//   //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//   //                   console.log("Return Date info "+$returnDate);
//   //                   $returnDateArray = $returnDate.split("k");
//   //                   $("#returnDate").val($returnDateArray[0]);
//   //               }else{
//   //                   console.log("Error computing number of working days");
//   //                   $("#startDate").val('');
//   //                   $("#endDate").val('');
//   //                   $("#endDate").prop("disabled", true);
//   //                   $("#loginerrorBox p").html($message);
//   //                   hideLoginErrorBox();
//   //               }
                
//   //               $("#applyLeave").prop("disabled", false);
//   //               console.log("End month is greater thus ok");
//   //             }else{
//   //               console.log('3');
//   //               console.log($endDate+" "+$startDate);
//   //               console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
//   //             }
//   //           }
//   //         }else{
//   //           console.log($resp['message']);
//   //           $("#startDate").val('');
//   //           $("#endDate").val('');
//   //           $("#endDate").prop("disabled", true);
//   //           $("#loginerrorBox p").html($resp['message']);
//   //           hideLoginErrorBox();
//   //         }
//   //     }
//   //   });
//   // });
//     $("#endDate").change(function(){
//     $startDate = $('#startDate').val();
//     $endDate  = $('#endDate').val();
//     $handleHolidayFallingOnWeekend = 0;
//     $.ajax({
//       url:$validateStartDateUrl,
//       data:{"startDate":$startDate,"endDate":$endDate},
//       type:'POST',
//       success:function($resp,status){
//           $resp = JSON.parse($resp);
//           $status = parseInt($resp['status']);
//           if($status == 0){
//             $startDate = $startDate.split("/");
//             $endDate = $endDate.split("/");
//             if($startDate.toString() === $endDate.toString()){
//                 //ok
//                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                 $leaveDetails = computeLeaveDetails23(a,b);
//                 $leaveDetails = JSON.parse($leaveDetails);
//                 $message = $leaveDetails['message'];
//                 $workingDays = $leaveDetails['workingDays'];
//                 console.log($leaveDetails);
//                 if($message === "OK"){
//                     $("#daysToApply").val($workingDays);
//                     //compute remaining days
//                     $daysApplied = parseInt($("#daysToApply").val());
//                     $availableDays = parseInt($("#daysAvaliable").val());
//                     console.log($daysApplied+" "+$availableDays);
//                     $remaingDays = $availableDays - $daysApplied;
//                     console.log($daysApplied);

//                     $("#daysRemaining").val($remaingDays);
//                     //compute remaining days
//                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//                     $returnDateArray = $returnDate.split("k");
//                     $("#returnDate").val($returnDateArray[0]);
//                 }else{
//                     console.log("Error computing number of working days");
//                 }

//                 $("#applyLeave").prop("disabled", false);
//                 console.log("Data appears fine ");
//             }else{
//                 if($endDate[0] < $startDate[0]){//if end month is less than start month
//                   console.log('End month is less than start year');
//                   //wrong throw error, except if end year is greater than start year
//                   if($endDate[2] > $startDate[2]){//if end year is greator than start year
//                     //ok
//                     //get remaining days till end of year
//                     var d = new Date($startDate[2], 11, 31);//end date of year
//                     var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                     console.log(d+"current year days comutation "+c);
//                     $workingDaysTillEndYear = computeLeaveDetails23(c,d);
//                     $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
//                     $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
//                     $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
//                     $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//                     //get remaining days till end of year

//                     //get days between start of year and end date selected
//                     $endDate = $endDate.split("/");
//                     var e = new Date($endDate[2], 00, 01);//first day of first month of end year
//                     var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                     console.log($endDate+"Year ");
//                     console.log(e+"new year days comutation "+f);
//                     $workingDaysFromYearStart = computeLeaveDetails23(e,f);
//                     $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
//                     $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
//                     $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
//                     $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//                     //get days between start of year and end date selected

//                     //add the two days to get total days applied
//                     console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
//                     console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//                     console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
//                     console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
//                     // $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//                     $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)
//                     //add the two days to get total days applied
//                     $daysAvailable =  $("#daysAvaliable").val();
//                     //check of days applied is more than days entitled
//                     if($daysAvailable < $totalDaysApplied){
//                         $("#startDate").val('');
//                         $("#endDate").val('');
//                         $("#daysToApply").val('');
//                         $("#daysRemaining").val('');
//                         $("#returnDate").val('');

//                         $("#endDate").prop("disabled", true);
//                         $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//                         hideLoginErrorBox(); 
//                     }else{
//                         console.log("End month is less than start month");

//                         $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                         console.log("Number of "+$NoOfHolidays);
//                         console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

//                         $("#daysToApply").val($totalDaysApplied-$NoOfHolidays);
//                         $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
//                         $("#daysRemaining").val($remaingDays);

//                         //return and end date
//                         $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);//gets return Date and leave end date
//                         $returnDateArray = $returnDate.split("k");
//                         console.log(" returnDateArray "+$returnDateArray);
//                         $("#returnDate").val($returnDateArray[0]);
//                         $("#applyLeave").prop("disabled", false);
//                         //return and end date
//                     }
//                   }else{
//                       console.log('1');
//                       $("#startDate").val('');
//                       $("#endDate").val('');
//                       $("#endDate").prop("disabled", true);
//                       $("#loginerrorBox p").html("The end date cannot be less than start date");
//                       hideLoginErrorBox();
//                   }
//               }else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
//                 //validate the days of the week
//                 if($endDate[1] < $startDate[1]){//if end day is less than start day
//                   //wrong
//                   //display error
//                   // console.log("The end day can't be less than start day");
//                   console.log('2');
//                   $("#startDate").val('');
//                   $("#endDate").val('');
//                   $("#endDate").prop("disabled", false);
//                   $("#loginerrorBox p").html("The end date cannot be less than start date");
//                   hideLoginErrorBox();
//                 }else{//end day is greater than start day
//                   //ok
//                   //call function to compute end date, return date and number of days
//                   var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                   var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                   $leaveDetails = computeLeaveDetails23(a,b);
//                   $leaveDetails = JSON.parse($leaveDetails);
//                   $message = $leaveDetails['message'];
//                   $workingDays = $leaveDetails['workingDays'];
//                   $handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

//                   console.log($leaveDetails);
//                   if($message === "OK"){
//                       // $("#daysToApply").val($workingDays);
//                       // //compute remaining days
//                       // $daysApplied = parseInt($("#daysToApply").val());
//                       // $availableDays = parseInt($("#daysAvaliable").val());
//                       // console.log($daysApplied+" "+$availableDays);
//                       // $remaingDays = $availableDays - $daysApplied;
//                       // console.log($daysApplied);

//                       // $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                       // console.log("Number of "+$NoOfHolidays);
//                       // console.log("Days Less holiday = "+($daysApplied-parseInt($NoOfHolidays)));

//                       // $("#daysRemaining").val($remaingDays);
//                       // //compute remaining days
//                       // $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//                       // $returnDateArray = $returnDate.split("k");
//                       // $("#returnDate").val($returnDateArray[0]);

//                       //compute remaining days
                    
//                       //get the number of holidays between the dates selected
//                       //subtract from the number of days applied
//                       $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                       console.log("Number of holidays"+$NoOfHolidays);
//                       console.log("ze working days"+$workingDays);
//                       console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//                       $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//                       console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
//                       $("#daysToApply").val($workingDaysApplied);
//                       // $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
//                       // $("#daysToApply").val($workingDaysApplied);//set the days applied
//                       //subtract from the number of days applied
//                       //get the number of holidays between the dates selected

//                       // $workingDaysApplied = parseInt($workingDaysApplied);
//                       $availableDays = parseInt($("#daysAvaliable").val());
//                       console.log($availableDays+" remaingi days"+$workingDaysApplied);
//                       $remaingDays = $availableDays - $workingDaysApplied;

//                       $("#daysRemaining").val($remaingDays);
//                       //compute remaining days
//                       $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//                       console.log($workingDays+"sdsdsd");
//                       console.log("Return Date info "+$returnDate);
//                       $returnDateArray = $returnDate.split("k");
//                       $returnDate = $returnDateArray[0].split("/");
//                       $month = $returnDate[0];
//                       $day = $returnDate[1];
//                       $combi = $month+"/"+$day;

//                       if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){
//                         $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
//                       }else{
//                         $returnDate = $returnDateArray[0];
//                       }

//                       console.log("Return Datess"+$returnDate);
//                       // $("#returnDate").val($returnDateArray[0]);
//                       $("#returnDate").val($returnDate);
//                   }else{
//                       console.log("Error computing number of working days");
//                   }
                
//                   $("#applyLeave").prop("disabled", false);
//                   console.log("Data appears fine ");
//                 }
//               }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
//                 //call function to compute end date and and number of days
//                 //okconsole.log("Error");
//                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                 $leaveDetails = computeLeaveDetails23(a,b);
//                 $leaveDetails = JSON.parse($leaveDetails);
//                 $message = $leaveDetails['message'];
//                 $workingDays = $leaveDetails['workingDays'];
//                 console.log($leaveDetails);
//                 if($message === "OK"){
//                     //compute remaining days
                    
//                     //get the number of holidays between the dates selected
//                     //subtract from the number of days applied
//                     $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                     console.log("Number of "+$NoOfHolidays);
//                     console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//                     $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//                     $("#daysToApply").val($workingDaysApplied);//set the days applied
//                     //subtract from the number of days applied
//                     //get the number of holidays between the dates selected

//                     // $workingDaysApplied = parseInt($workingDaysApplied);
//                     $availableDays = parseInt($("#daysAvaliable").val());
//                     $remaingDays = $availableDays - $workingDaysApplied;

//                     $("#daysRemaining").val($remaingDays);
//                     //compute remaining days
//                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//                     console.log("Return Date info "+$returnDate);
//                     $returnDateArray = $returnDate.split("k");
//                     $("#returnDate").val($returnDateArray[0]);
//                 }else{
//                     console.log("Error computing number of working days");
//                     $("#startDate").val('');
//                     $("#endDate").val('');
//                     $("#endDate").prop("disabled", true);
//                     $("#loginerrorBox p").html($message);
//                     hideLoginErrorBox();
//                 }
                
//                 $("#applyLeave").prop("disabled", false);
//                 console.log("End month is greater thus ok");
//               }else{
//                 console.log('3');
//                 console.log($endDate+" "+$startDate);
//                 console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
//               }
//             }
//           }else{
//             console.log($resp['message']);
//             $("#startDate").val('');
//             $("#endDate").val('');
//             $("#endDate").prop("disabled", true);
//             $("#loginerrorBox p").html($resp['message']);
//             hideLoginErrorBox();
//           }
//       }
//     });

//   });

//   window.workingDaysBetweenDates = function(startDate, endDate) {
//       var millisecondsPerDay = 86400 * 1000; 
//       startDate.setHours(0,0,0,1);  
//       endDate.setHours(23,59,59,999);  
//       var diff = endDate - startDate;     
//       var days = Math.ceil(diff / millisecondsPerDay);
      
//       // Subtract two weekend days for every week in between
//       var weeks = Math.floor(days / 7);

//       // Handle special cases
//       var startDay = startDate.getDate();
//       var endDay = endDate.getDate();
//       if(startDay == endDay){
//         resp = '{"leavedays":1,"totalDays":1}';
//       }else{
//         workingdays = days - (weeks * 2);
//         resp = '{"leavedays":'+workingdays+',"totalDays":'+days+'}';
//       }
//       return resp;
//   }   
//   //On End Date Change

// $("#applyLeave").click(function(e){
//     e.preventDefault();
//     $daysRemaining = $("#daysRemaining").val();
//     $daysToApply = $("#daysToApply").val();

//     $endDate = $('#endDate').val();
//     $startDate = $('#startDate').val();

  
//     $.ajax({
//         url:$validateStartDateUrl,
//         data:{"startDate":$startDate,"endDate":$endDate},
//         type:'POST',
//         success:function($resp,status){
//           console.log("validate date hase run "+$resp);
//             $resp = JSON.parse($resp);

//             $status = parseInt($resp['status']);
//             if($status == 0){
//                  if($daysRemaining == "" || $daysRemaining == undefined || $daysRemaining == null || $daysToApply == null || $daysToApply == undefined || $daysToApply == ""){
//                       $("#loginerrorBox p").html("Complete the application form.");
//                       console.log("Complete the application form.");
//                       hideLoginErrorBox();
//                   }else{
//                       $(".overlay").show();
//                       $startDate = $('#startDate').val();
//                       $daysNID = $('#absenceReason').val();

//                       $daysNID = $daysNID.split("k"); 
//                       $leaveTypeID = $daysNID[1]; 

//                       $daysAvaliable = $('#daysAvaliable').val();
//                       $daysToApply = $('#daysToApply').val();
//                       $daysRemaining = $('#daysRemaining').val();
//                       $endDate = $('#endDate').val();
//                       $totalDays = $("#totalDaysApplied").val();
//                       $returnDate = $("#returnDate").val();
//                       // console.log("Return Date "+$returnDate+" End Date "+$endDate);
//                       // $comment = $('#comment').val();

//                       //format start date
//                       $dateValue = $startDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $startDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format start date
                      
//                       //format end date
//                       $dateValue = $endDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $endDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format end date

//                       //format return date
//                       $dateValue = $returnDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $returnDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format return date
//                       console.log($endDate+"endDate  StartDate"+$startDate);

//                       $confirm = confirm("Are your sure");

//                       if($confirm == true){
//                         $.post($applyLeaveUrl,{"startDate":$startDate, "totalDaysApplied":$totalDays, "endDate":$endDate,"returnDate":$returnDate,"absenceReason":$leaveTypeID, "daysApplied":$daysToApply, "daysAvaliable":$daysAvaliable},function(data, status){
//                           console.log(data);
//                           $resp = JSON.parse(data);
//                           $status =$resp['status'];
//                           if($status == 0){
//                             $(".overlay").hide();
//                             $message = $resp['message'];
//                             $("#loginSuccessBox p").html($resp['message']);
//                             hideLoginSuccessBox();
//                             setTimeout(function(){
//                                 location.reload();
//                             },10000);
//                           }else{
//                             $(".overlay").hide();
//                             $message = $resp['message'];
//                             $("#loginerrorBox p").html($resp['message']);
//                             hideLoginErrorBox();
//                           }
//                         });
//                       }else{
//                         $(".overlay").hide();
//                       }
//                   }
//             }else{
//                 console.log($resp['message']);
//                 $("#startDate").val('');
//                 $("#endDate").val('');
//                 $("#daysRemaining").val('');
//                 $("#returnDate").val('');
//                 $("#daysToApply").val('');
//                 $("#endDate").prop("disabled", true);
//                 $("#loginerrorBox p").html($resp['message']);
//                 hideLoginErrorBox();
//             }
//         }
//     });
// });
// //apply leave
// });
//does not subtract holidays



//subracts public holidays
// $(document).ready(function(){
//   //plugin for start Date
//   $('#startDate').daterangepicker({
//     singleDatePicker: true,
//     calender_style: "picker_4",
//     minDate: new Date(),
//     isInvalidDate: function(date){
//       /*
//       validates the following dates
//       1) 1st Jan- 2nd Jan
//       2) 1st May
//       3) 25th Dec - 31st Dec
//       4) 1st June
//       5) 20th Oct
//       6) 12th Dec
//       */

//       if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
//         // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || 
//         return true; 
//       }else{
//         return false;
//       }
//     },
//   }, function(start, end, label) {
//     //console.log(start.toISOString(), end.toISOString(), label);
//   });
//   //plugin for start date
  
//   //plugin for end date
//   $('#endDate').daterangepicker({
//     singleDatePicker: true,
//     calender_style: "picker_4",
//     minDate: new Date(),
//     isInvalidDate: function(date){
//       /*
//       validates the following dates
//       1) 1st Jan- 2nd Jan
//       2) 1st May
//       3) 25th Dec - 31st Dec
//       4) 1st June
//       5) 20th Oct
//       6) 12th Dec
//       */

//       if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
//         // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') 
//         return true; 
//       }else{
//         return false;
//       }
//     },
//   }, function(start, end, label) {
//     //console.log(start.toISOString(), end.toISOString(), label);
//   });
//   //plugin for end date

  
//   $('#startDate').prop('disabled',true);
//   $('#endDate').prop('disabled',true);
//   $('#daysAvaliable').prop('disabled', true);
//   $('#daysToApply').prop('disabled', true);
//   $('#daysRemaining').prop('disabled', true);
//   $('#returnDate').prop('disabled', true);
//   $("#applyLeave").prop('disabled', true);

//   $("#startDate").change(function(){
//     $('#endDate').val('');
//     $('#daysToApply').val('');
//     $('#daysRemaining').val('');
//     $('#returnDate').val('');
//     $("#applyLeave").prop('disabled', true);

//     $daysNID = $("#absenceReason").val();

//     $daysNID = $daysNID.split("k"); 
//     $leavedays = Math.ceil($daysNID[0]);
//     $leaveTypeID = $daysNID[1];
//     console.log($leaveTypeID);

//     if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
//       console.log("disable entry of end date");

//       $startDate = $('#startDate').val();
//       $endDate = $('#endDate').val();
//       //format date
//       $dateValue = $startDate.split('/');
//       $year = $dateValue[2];
//       $month = $dateValue[0];
//       $dayofWeek = $dateValue[1];
//       $startDate = $month+'/'+$dayofWeek+'/'+$year;
//       // format date

//       $expectedReturnDate = getReturnDateIncludingWeekends($startDate,$leavedays);
//       // console.log("getReturnDateIncludingWeekends has run "+getReturnDateIncludingWeekends($startDate,$leavedays));
//       $endAndReturnDate = $expectedReturnDate.split('k');
//       $("#daysToApply").val($leavedays);
//       $("#returnDate").val($endAndReturnDate[0]);
//       $("#endDate").val($endAndReturnDate[1]);
//       $('#daysRemaining').val(0);
//       $("#applyLeave").prop('disabled', false);
//     }else{
//       $("#endDate").prop('disabled', false);
//       $days = $("#daysToApply").val();
//       if($days == null || $days  == undefined || $days == ""){
//         // console.log("undefined");
//       }else{
//         $startDate = $('#startDate').val();
//         //format date
//         $dateValue = $startDate.split('/');
//         $year = $dateValue[2];
//         $month = $dateValue[0];
//         $dayofWeek = $dateValue[1];
//         $newDate = $month+'/'+$dayofWeek+'/'+$year;

//         //format date
//         $expectedReturnDate = getDateFromStartDateLeaveDays($newDate,$days);
//         $expectedReturnDate = $expectedReturnDate.split("k");
//         $("#returnDate").val($expectedReturnDate[0]);
//         //sex
//         //$("#endDate").val($expectedReturnDate[1]);
//       }
//     }
//   });

//   //apply leave
//     //auto populates the number of days field during leave application
//   $("#absenceReason").change(function(){
//       $('#startDate').prop('disabled',false);
//       $('#endDate').prop('disabled',true);
//       $('#endDate').val('');
//       $('#startDate').val('');
//       $('#daysToApply').val('');
//       $('#daysRemaining').val('');
//       $('#daysAvaliable').val('');
//       $('#returnDate').val('');
//       $("#applyLeave").prop('disabled', true);

//       $daysNID = $("#absenceReason").val();

//       $daysNID = $daysNID.split("k"); 
//       $leavedays = Math.ceil($daysNID[0]);
//       $leaveTypeID = $daysNID[1];
//       $("#daysAvaliable").val($leavedays);
//       if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
//           $("#daysToApply").prop('disabled', true);
//           $('#endDate').prop('disabled', true);

//           $startDate = $('#startDate').val();
          
//           //format date
//           $dateValue = $startDate.split('/');
//           $year = $dateValue[2];
//           $month = $dateValue[0];
//           $dayofWeek = $dateValue[1];
//           $startDate = $month+'/'+$dayofWeek+'/'+$year;
//           // format date
//           if($startDate === '/undefined/undefined' || $startDate === '/undefined/undefined' || $startDate === '/undefined/undefined'){
//           }else{
//             $expectedReturnDate = getDateFromStartDateLeaveDays($startDate,$leavedays);
//             $endAndReturnDate = $expectedReturnDate.split('k');
//             console.log(" End and return Date "+$endAndReturnDate);
//             $("#returnDate").val($endAndReturnDate[0]);
//             $("#endDate").val($endAndReturnDate[1]);
//             $("#applyLeave").prop('disabled', false);
//           }
//       }else{
//           $('#daysToApply').attr('max', $leavedays);
//           $('#daysToApply').attr('min', parseInt(0));
//        // $("#daysToApply").prop('disabled', false);
//       }
//   });
//   //auto populates the number of days field during leave application

//   window.getNumberOfHolidaysWithinDateRange = function(){
//         //ADJUSTS FOR HOLIDAYS
//     //get the holidays
//     //check to see if holidays fall within the date range applied
//     //do necessary adjustements
//     $holidaysWithinRange = 0;
//     $startDate = $("#startDate").val();
//     $endDate = $("#endDate").val();

//     $startDateArray = $startDate.split("/");
//     $endDateArray = $endDate.split("/");

//     $currentYear = new Date().getFullYear();
//     $k = 0;
//     while($k < $holidays.length){
//         //loop through holidays to check if any falls within range
//         $holidayDate = $holidays[$k]['holidayDate'];//compare this to the start date end date range provided
//         $holidayDateArray = $holidayDate.split("-");

//         console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
//         console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
//         console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
//         //FromDate >=  @startDate AND ToDate <=  @endDate
//         var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
//         var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
//         var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

//         // console.log("From "+from+" To "+to+" Check "+check);

//         if(check > from && check < to){
//             //if it falls on range increase days buy 1
//             console.log("falls in range");
//             console.log("From: "+from);
//             console.log("To: "+to);
//             console.log("Check: "+check);
//             $holidaysWithinRange++;
//         }else{
//             //if it doesn't fall in range DO NOTHINg
//             console.log("not in range");
//             console.log("From: "+from);
//             console.log("To: "+to);
//             console.log("Check: "+check);
//         }

//         // if($holidayDate >= $startDateDnM && $holidayDate <= $endDateDnM){//if the 
//         //   
//         // }else{
//         //   
//         // }
//         $k++;
//     }
//     //ADJUSTS FOR HOLIDAYS
//     return $holidaysWithinRange;
//   }
//   //gets the holidays set in the system
//   window.getHolidays = function(){
//       $.ajax({
//         url:$getHolidays,
//         data:{},
//         type:'POST',
//         success:function($resp,status){
//           console.log($resp);
//           $holidays = JSON.parse($resp);
//           // console.log($holidays[0]['holidayName']);
//           return $holidays;
//         }
//       });
//   }   
//   getHolidays();//this is called to pre-popuate the holidays variable
//   //gets the holidays set in the system
//   function getReturnDateIncludingWeekends($startDate,$leavedays){
//       //compute return date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays));
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var returnDate = mm + '/' + dd + '/' + y;
//       //compute return date

//       //compute end date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays)-1);
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var leaveEndDate = mm + '/' + dd + '/' + y;
//       //compute end date

//      // console.log('getReturnDateIncludingWeekends '+returnDate+'leave end date'+leaveEndDate);
//       return returnDate+'k'+leaveEndDate;
//   }

//   function getDateFromStartDateLeaveDays($startDate,$leavedays){
//     //get the number weeks add the weeks
//     var date = new Date($startDate);
//     var newdate = new Date(date);
//     $k = 0;

//     $("#totalDaysApplied").val($leavedays);//hidden field
//     // $totalDaysApplied = $leavedays + $totalWeekendDaysOnLeave;
//     while($k < $leavedays){
//       //add the number of days
//       // $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//       // newdate.setDate($newdayvalue);
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       $t = new Date(y,(mm-1),dd);
//       $dayOfWeek = $t.getDay();
//       $dayOfWeek = parseInt($dayOfWeek);
//       // console.log("DOW "+$dayOfWeek);
//       if($dayOfWeek == 6 || $dayOfWeek == 0){
//         // console.log("weekend");
//         $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//         newdate.setDate($newdayvalue);
//         console.log(newdate);
//         $k--;
//       }else{  
//         // console.log("not weekend");
//         $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
//         newdate.setDate($newdayvalue);
//         console.log(newdate);
//       }
//       $k++;
//     }
//     var leaveEndDate = mm + '/' + dd + '/' + y;

//     $newdayvalue = parseInt(newdate.getDate());
//     newdate.setDate($newdayvalue);  
//     var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//     var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//     var y = newdate.getFullYear();

//     // console.log("return date"+dd+" "+mm+" "+y);
//     $t = new Date(y,(mm-1),dd);
//     // console.log("return date"+$t);

//     $dayOfWeek = $t.getDay();
//     $dayOfWeek = parseInt($dayOfWeek);
//     // console.log('ODW '+$dayOfWeek);
//     if($dayOfWeek == 6){//saturday
//       var $newDate = mm + '/' + dd + '/' + y;
//       var date = new Date($newDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt(newdate.getDate()) + parseInt((2));
//       newdate.setDate($newdayvalue);  
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       // dd = parseInt(dd)+2;
//     }else if($dayOfWeek == 0){//sunday
//       var $newDate = mm + '/' + dd + '/' + y;
//       var date = new Date($newDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//       newdate.setDate($newdayvalue);  
//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();
//       // dd = parseInt(dd)+1;
//     }else{}

//     var returnDate = mm + '/' + dd + '/' + y;
//     return returnDate+'k'+leaveEndDate;
//     // return JSON.stringify('{"leavedays":'+someFormattedDate+',"totalDays":'+someFormattedDate+'}'); 
//   }
//   //get expected return date

//   window.computeLeaveDetails = function(a,b){
//     $leavDaysArray = JSON.parse(workingDaysBetweenDates(a,b));//gets you the working days and total leave days applied.
    
//     $leavedays = $leavDaysArray['leavedays'];

//     var date = new Date(a);
//     var newdate = new Date(date);    

//     //if start date plus days applied covers weekend skip weekend
//       $k = 1;
//       $workingDays = 0;
//       $leavedays = $leavDaysArray['totalDays']+1;
//       while($k < $leavedays){
//         //startDate broken down
//         var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//         var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//         var y = newdate.getFullYear();
//         //startDate broken down

//         //put the broken up date together to get the day you applied. monday-sunday
//         $t = new Date(y,(mm-1),dd);
//         $dayOfWeek = $t.getDay();
//         $dayOfWeek = parseInt($dayOfWeek);
//         //put the broken up date together to get the day you applied. monday-sunday
//         // console.log('Day of week sun-mon '+$dayOfWeek);
//         if($dayOfWeek == 0 || $dayOfWeek == 6){
//           $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//           newdate.setDate($newdayvalue);  
//         }else{
//           //increase day by one
//           $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
//           newdate.setDate($newdayvalue);  
//           $workingDays++;
//           // console.log("Working Days "+$workingDays+" Day of week "+$workingDays);
//           // console.log(newdate);
//           //increase day by one
//         }
//         //startDate broken down
//         var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//         var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//         var y = newdate.getFullYear();
//         //startDate broken down
//         // console.log("New Date after adding 1 "+mm+"/"+dd+"/"+y);
//         $k++;
//       }

//       $daysEntitled = $("#daysAvaliable").val();
      
//       if($workingDays > $daysEntitled){
//           $("#startDate").val("");
//           $("#absenceReason").val("");
//           $("#daysAvaliable").val("");
//           $("#daysToApply").val("");
//           $("#daysRemaining").val("");
//           $("#returnDate").val("");
//           $("#endDate").val("");
//           $('#startDate').prop('disabled',true);
//           $('#endDate').prop('disabled',true);

//           var element = document.getElementById("applyLeave")
//           element.setAttribute('disabled','disabled')
          
//           $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//           hideLoginErrorBox(); 

//       }else{  
//           //display working days
//           $("#daysToApply").val($workingDays);
//           //display working days

//           //get expected return date
//           //sex
//           $expectedReturnDate = getDateFromStartDateLeaveDays($('#startDate').val(),$leavDaysArray['totalDays']);
//           $expectedReturnDate = $expectedReturnDate.split("k");
//           $("#returnDate").val($expectedReturnDate[0]);
//           //get expected return date

//           //compute remaining days
//           $daysApplied = parseInt($("#daysToApply").val());
//           $availableDays = parseInt($("#daysAvaliable").val());
//           console.log($daysApplied+" "+$availableDays);
//           $remaingDays = $availableDays - $daysApplied;
//           console.log($daysApplied);

//           $("#daysRemaining").val($remaingDays);
//           //compute remaining days
//       }
//   }

//   //On End Date Change
//   // $("#endDate").change(function(){
//   //   $startDate = $('#startDate').val();
//   //   $endDate  = $('#endDate').val();
//   //   $handleHolidayFallingOnWeekend = 0;
//   //   $.ajax({
//   //     url:$validateStartDateUrl,
//   //     data:{"startDate":$startDate,"endDate":$endDate},
//   //     type:'POST',
//   //     success:function($resp,status){
//   //         $resp = JSON.parse($resp);
//   //         $status = parseInt($resp['status']);
//   //         if($status == 0){
//   //           $startDate = $startDate.split("/");
//   //           $endDate = $endDate.split("/");
//   //           if($startDate.toString() === $endDate.toString()){
//   //               //ok
//   //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //               $leaveDetails = computeLeaveDetails23(a,b);
//   //               $leaveDetails = JSON.parse($leaveDetails);
//   //               $message = $leaveDetails['message'];
//   //               $workingDays = $leaveDetails['workingDays'];
//   //               console.log($leaveDetails);
//   //               if($message === "OK"){
//   //                   $("#daysToApply").val($workingDays);
//   //                   //compute remaining days
//   //                   $daysApplied = parseInt($("#daysToApply").val());
//   //                   $availableDays = parseInt($("#daysAvaliable").val());
//   //                   console.log($daysApplied+" "+$availableDays);
//   //                   $remaingDays = $availableDays - $daysApplied;
//   //                   console.log($daysApplied);

//   //                   $("#daysRemaining").val($remaingDays);
//   //                   //compute remaining days
//   //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//   //                   $returnDateArray = $returnDate.split("k");
//   //                   $("#returnDate").val($returnDateArray[0]);
//   //               }else{
//   //                   console.log("Error computing number of working days");
//   //               }

//   //               $("#applyLeave").prop("disabled", false);
//   //               console.log("Data appears fine ");
//   //           }else{
//   //               if($endDate[0] < $startDate[0]){//if end month is less than start month
//   //                 console.log('End month is less than start year');
//   //                 //wrong throw error, except if end year is greater than start year
//   //                 if($endDate[2] > $startDate[2]){//if end year is greator than start year
//   //                   //ok
//   //                   //get remaining days till end of year
//   //                   var d = new Date($startDate[2], 11, 31);//end date of year
//   //                   var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //                   console.log(d+"current year days comutation "+c);
//   //                   $workingDaysTillEndYear = computeLeaveDetails23(c,d);
//   //                   $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
//   //                   $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
//   //                   $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
//   //                   $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//   //                   //get remaining days till end of year

//   //                   //get days between start of year and end date selected
//   //                   $endDate = $endDate.split("/");
//   //                   var e = new Date($endDate[2], 00, 01);//first day of first month of end year
//   //                   var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //                   console.log($endDate+"Year ");
//   //                   console.log(e+"new year days comutation "+f);
//   //                   $workingDaysFromYearStart = computeLeaveDetails23(e,f);
//   //                   $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
//   //                   $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
//   //                   $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
//   //                   $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//   //                   //get days between start of year and end date selected

//   //                   console.log($workingDaysFromYearStartQty+" $workingDaysTillEndYearQty "+$handleHolidayFallingOnWeekendNextYear);

//   //                   //add the two days to get total days applied
//   //                   console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
//   //                   console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//   //                   console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
//   //                   console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
//   //                   $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//   //                   //add the two days to get total days applied
//   //                   $daysAvailable =  $("#daysAvaliable").val();
//   //                   //check of days applied is more than days entitled
//   //                   if($daysAvailable < $totalDaysApplied){
//   //                       $("#startDate").val('');
//   //                       $("#endDate").val('');
//   //                       $("#daysToApply").val('');
//   //                       $("#daysRemaining").val('');
//   //                       $("#returnDate").val('');

//   //                       $("#endDate").prop("disabled", true);
//   //                       $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//   //                       hideLoginErrorBox(); 
//   //                   }else{
//   //                       console.log("End month is less than start month");

//   //                       $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                       console.log("Number of "+$NoOfHolidays+"$totalDaysApplied"+$totalDaysApplied);
//   //                       console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

//   //                       $("#daysToApply").val($totalDaysApplied);
//   //                       $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
//   //                       $("#daysRemaining").val($remaingDays);

//   //                       $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);
//   //                       $returnDateArray = $returnDate.split("k");
//   //                       $("#returnDate").val($returnDateArray[0]);
//   //                   }
//   //                 }else{
//   //                     console.log('1');
//   //                     $("#startDate").val('');
//   //                     $("#endDate").val('');
//   //                     $("#endDate").prop("disabled", true);
//   //                     $("#loginerrorBox p").html("The end date cannot be less than start date");
//   //                     hideLoginErrorBox();
//   //                 }
//   //               }else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
//   //               //validate the days of the week
//   //               if($endDate[1] < $startDate[1]){//if end day is less than start day
//   //                 //wrong
//   //                 //display error
//   //                 // console.log("The end day can't be less than start day");
//   //                 console.log('2');
//   //                 $("#startDate").val('');
//   //                 $("#endDate").val('');
//   //                 $("#endDate").prop("disabled", false);
//   //                 $("#loginerrorBox p").html("The end date cannot be less than start date");
//   //                 hideLoginErrorBox();
//   //               }else{//end day is greater than start day
//   //                 //ok
//   //                 //call function to compute end date, return date and number of days
//   //                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //                 $leaveDetails = computeLeaveDetails23(a,b);
//   //                 $leaveDetails = JSON.parse($leaveDetails);
//   //                 $message = $leaveDetails['message'];
//   //                 $workingDays = $leaveDetails['workingDays'];
//   //                 $handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

//   //                 console.log($leaveDetails);
//   //                 if($message === "OK"){
//   //                     $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                     console.log("Number of holidays"+$NoOfHolidays);
//   //                     console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//   //                     $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//   //                     console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
//   //                     $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
//   //                     $("#daysToApply").val($workingDaysApplied);//set the days applied
//   //                     //subtract from the number of days applied
//   //                     //get the number of holidays between the dates selected

//   //                     // $workingDaysApplied = parseInt($workingDaysApplied);
//   //                     $availableDays = parseInt($("#daysAvaliable").val());
//   //                     console.log($availableDays+" remaingi days"+$workingDaysApplied);
//   //                     $remaingDays = $availableDays - $workingDaysApplied;

//   //                     $("#daysRemaining").val($remaingDays);
//   //                     //compute remaining days
//   //                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//   //                     console.log($workingDays+"sdsdsd");
//   //                     console.log("Return Date info "+$returnDate);
//   //                     $returnDateArray = $returnDate.split("k");
//   //                     $returnDate = $returnDateArray[0].split("/");
//   //                     $month = $returnDate[0];
//   //                     $day = $returnDate[1];
//   //                     $combi = $month+"/"+$day;

//   //                     if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){
//   //                       $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
//   //                     }else{
//   //                       $returnDate = $returnDateArray[0];
//   //                     }

//   //                     console.log("Return Datess"+$returnDate);
//   //                     // $("#returnDate").val($returnDateArray[0]);
//   //                     $("#returnDate").val($returnDate);
//   //                 }else{
//   //                     console.log("Error computing number of working days");
//   //                 }
                
//   //                 $("#applyLeave").prop("disabled", false);
//   //                 console.log("Data appears fine ");
//   //               }
//   //             }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
//   //               //call function to compute end date and and number of days
//   //               //okconsole.log("Error");
//   //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//   //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//   //               $leaveDetails = computeLeaveDetails23(a,b);
//   //               $leaveDetails = JSON.parse($leaveDetails);
//   //               $message = $leaveDetails['message'];
//   //               $workingDays = $leaveDetails['workingDays'];
//   //               console.log("Just before leavedetails "+$leaveDetails['message']);

//   //               if($message === "OK"){
//   //                   console.log("Just before leavedetails");  
//   //                   //compute remaining days
//   //                   //get the number of holidays between the dates selected
//   //                   //subtract from the number of days applied
//   //                   $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//   //                   console.log("Number of "+$NoOfHolidays);
//   //                   console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//   //                   $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//   //                   $("#daysToApply").val($workingDaysApplied);//set the days applied
//   //                   //subtract from the number of days applied
//   //                   //get the number of holidays between the dates selected

//   //                   // $workingDaysApplied = parseInt($workingDaysApplied);
//   //                   $availableDays = parseInt($("#daysAvaliable").val());
//   //                   console.log("Days applied "+$workingDaysApplied+" Days available xxx "+$availableDays);
//   //                   $remaingDays = $availableDays - $workingDaysApplied;

//   //                   $("#daysRemaining").val($remaingDays);
//   //                   //compute remaining days
//   //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//   //                   console.log("Return Date info "+$returnDate);
//   //                   $returnDateArray = $returnDate.split("k");
//   //                   $("#returnDate").val($returnDateArray[0]);
//   //               }else{
//   //                   console.log("Error computing number of working days");
//   //                   $("#startDate").val('');
//   //                   $("#endDate").val('');
//   //                   $("#endDate").prop("disabled", true);
//   //                   $("#loginerrorBox p").html($message);
//   //                   hideLoginErrorBox();
//   //               }
                
//   //               $("#applyLeave").prop("disabled", false);
//   //               console.log("End month is greater thus ok");
//   //             }else{
//   //               console.log('3');
//   //               console.log($endDate+" "+$startDate);
//   //               console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
//   //             }
//   //           }
//   //         }else{
//   //           console.log($resp['message']);
//   //           $("#startDate").val('');
//   //           $("#endDate").val('');
//   //           $("#endDate").prop("disabled", true);
//   //           $("#loginerrorBox p").html($resp['message']);
//   //           hideLoginErrorBox();
//   //         }
//   //     }
//   //   });
//   // });
//     $("#endDate").change(function(){
//     $startDate = $('#startDate').val();
//     $endDate  = $('#endDate').val();
//     $handleHolidayFallingOnWeekend = 0;
//     $.ajax({
//       url:$validateStartDateUrl,
//       data:{"startDate":$startDate,"endDate":$endDate},
//       type:'POST',
//       success:function($resp,status){
//           $resp = JSON.parse($resp);
//           $status = parseInt($resp['status']);
//           if($status == 0){
//             $startDate = $startDate.split("/");
//             $endDate = $endDate.split("/");
//             if($startDate.toString() === $endDate.toString()){
//                 //ok
//                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                 $leaveDetails = computeLeaveDetails23(a,b);
//                 $leaveDetails = JSON.parse($leaveDetails);
//                 $message = $leaveDetails['message'];
//                 $workingDays = $leaveDetails['workingDays'];
//                 console.log($leaveDetails);
//                 if($message === "OK"){
//                     $("#daysToApply").val($workingDays);
//                     //compute remaining days
//                     $daysApplied = parseInt($("#daysToApply").val());
//                     $availableDays = parseInt($("#daysAvaliable").val());
//                     console.log($daysApplied+" "+$availableDays);
//                     $remaingDays = $availableDays - $daysApplied;
//                     console.log($daysApplied);

//                     $("#daysRemaining").val($remaingDays);
//                     //compute remaining days
//                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//                     $returnDateArray = $returnDate.split("k");
//                     $("#returnDate").val($returnDateArray[0]);
//                 }else{
//                     console.log("Error computing number of working days");
//                 }

//                 $("#applyLeave").prop("disabled", false);
//                 console.log("Data appears fine ");
//             }else{
//                 if($endDate[0] < $startDate[0]){//if end month is less than start month
//                   console.log('End month is less than start year');
//                   //wrong throw error, except if end year is greater than start year
//                   if($endDate[2] > $startDate[2]){//if end year is greator than start year
//                     //ok
//                     //get remaining days till end of year
//                     var d = new Date($startDate[2], 11, 31);//end date of year
//                     var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                     console.log(d+"current year days comutation "+c);
//                     $workingDaysTillEndYear = computeLeaveDetails23(c,d);
//                     $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
//                     $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
//                     $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
//                     $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//                     //get remaining days till end of year

//                     //get days between start of year and end date selected
//                     $endDate = $endDate.split("/");
//                     var e = new Date($endDate[2], 00, 01);//first day of first month of end year
//                     var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                     console.log($endDate+"Year ");
//                     console.log(e+"new year days comutation "+f);
//                     $workingDaysFromYearStart = computeLeaveDetails23(e,f);
//                     $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
//                     $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
//                     $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
//                     $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
//                     //get days between start of year and end date selected

//                     //add the two days to get total days applied
//                     console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
//                     console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//                     console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
//                     console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
//                     // $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
//                     $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)
//                     //add the two days to get total days applied
//                     $daysAvailable =  $("#daysAvaliable").val();
//                     //check of days applied is more than days entitled
//                     if($daysAvailable < $totalDaysApplied){
//                         $("#startDate").val('');
//                         $("#endDate").val('');
//                         $("#daysToApply").val('');
//                         $("#daysRemaining").val('');
//                         $("#returnDate").val('');

//                         $("#endDate").prop("disabled", true);
//                         $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
//                         hideLoginErrorBox(); 
//                     }else{
//                         console.log("End month is less than start month");

//                         $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                         console.log("Number of "+$NoOfHolidays);
//                         console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

//                         $("#daysToApply").val($totalDaysApplied);
//                         $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
//                         $("#daysRemaining").val($remaingDays);

//                         $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);
//                         $returnDateArray = $returnDate.split("k");
//                         $("#returnDate").val($returnDateArray[0]);
//                         $("#applyLeave").prop("disabled", false);
//                     }
//                   }else{
//                       console.log('1');
//                       $("#startDate").val('');
//                       $("#endDate").val('');
//                       $("#endDate").prop("disabled", true);
//                       $("#loginerrorBox p").html("The end date cannot be less than start date");
//                       hideLoginErrorBox();
//                   }
//               }else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
//                 //validate the days of the week
//                 if($endDate[1] < $startDate[1]){//if end day is less than start day
//                   //wrong
//                   //display error
//                   // console.log("The end day can't be less than start day");
//                   console.log('2');
//                   $("#startDate").val('');
//                   $("#endDate").val('');
//                   $("#endDate").prop("disabled", false);
//                   $("#loginerrorBox p").html("The end date cannot be less than start date");
//                   hideLoginErrorBox();
//                 }else{//end day is greater than start day
//                   //ok
//                   //call function to compute end date, return date and number of days
//                   var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                   var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                   $leaveDetails = computeLeaveDetails23(a,b);
//                   $leaveDetails = JSON.parse($leaveDetails);
//                   $message = $leaveDetails['message'];
//                   $workingDays = $leaveDetails['workingDays'];
//                   $handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

//                   console.log($leaveDetails);
//                   if($message === "OK"){
//                       // $("#daysToApply").val($workingDays);
//                       // //compute remaining days
//                       // $daysApplied = parseInt($("#daysToApply").val());
//                       // $availableDays = parseInt($("#daysAvaliable").val());
//                       // console.log($daysApplied+" "+$availableDays);
//                       // $remaingDays = $availableDays - $daysApplied;
//                       // console.log($daysApplied);

//                       // $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                       // console.log("Number of "+$NoOfHolidays);
//                       // console.log("Days Less holiday = "+($daysApplied-parseInt($NoOfHolidays)));

//                       // $("#daysRemaining").val($remaingDays);
//                       // //compute remaining days
//                       // $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
//                       // $returnDateArray = $returnDate.split("k");
//                       // $("#returnDate").val($returnDateArray[0]);

//                       //compute remaining days
                    
//                       //get the number of holidays between the dates selected
//                       //subtract from the number of days applied
//                       $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                       console.log("Number of holidays"+$NoOfHolidays);
//                       console.log("ze working days"+$workingDays);
//                       console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//                       $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//                       console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
//                       $("#daysToApply").val($workingDaysApplied);
//                       // $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
//                       // $("#daysToApply").val($workingDaysApplied);//set the days applied
//                       //subtract from the number of days applied
//                       //get the number of holidays between the dates selected

//                       // $workingDaysApplied = parseInt($workingDaysApplied);
//                       $availableDays = parseInt($("#daysAvaliable").val());
//                       console.log($availableDays+" remaingi days"+$workingDaysApplied);
//                       $remaingDays = $availableDays - $workingDaysApplied;

//                       $("#daysRemaining").val($remaingDays);
//                       //compute remaining days
//                       $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//                       console.log($workingDays+"sdsdsd");
//                       console.log("Return Date info "+$returnDate);
//                       $returnDateArray = $returnDate.split("k");
//                       $returnDate = $returnDateArray[0].split("/");
//                       $month = $returnDate[0];
//                       $day = $returnDate[1];
//                       $combi = $month+"/"+$day;

//                       if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){
//                         $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
//                       }else{
//                         $returnDate = $returnDateArray[0];
//                       }

//                       console.log("Return Datess"+$returnDate);
//                       // $("#returnDate").val($returnDateArray[0]);
//                       $("#returnDate").val($returnDate);
//                   }else{
//                       console.log("Error computing number of working days");
//                   }
                
//                   $("#applyLeave").prop("disabled", false);
//                   console.log("Data appears fine ");
//                 }
//               }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
//                 //call function to compute end date and and number of days
//                 //okconsole.log("Error");
//                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
//                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
//                 $leaveDetails = computeLeaveDetails23(a,b);
//                 $leaveDetails = JSON.parse($leaveDetails);
//                 $message = $leaveDetails['message'];
//                 $workingDays = $leaveDetails['workingDays'];
//                 console.log($leaveDetails);
//                 if($message === "OK"){
//                     //compute remaining days
                    
//                     //get the number of holidays between the dates selected
//                     //subtract from the number of days applied
//                     $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
//                     console.log("Number of "+$NoOfHolidays);
//                     console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
//                     $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
//                     $("#daysToApply").val($workingDaysApplied);//set the days applied
//                     //subtract from the number of days applied
//                     //get the number of holidays between the dates selected

//                     // $workingDaysApplied = parseInt($workingDaysApplied);
//                     $availableDays = parseInt($("#daysAvaliable").val());
//                     $remaingDays = $availableDays - $workingDaysApplied;

//                     $("#daysRemaining").val($remaingDays);
//                     //compute remaining days
//                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
//                     console.log("Return Date info "+$returnDate);
//                     $returnDateArray = $returnDate.split("k");
//                     $("#returnDate").val($returnDateArray[0]);
//                 }else{
//                     console.log("Error computing number of working days");
//                     $("#startDate").val('');
//                     $("#endDate").val('');
//                     $("#endDate").prop("disabled", true);
//                     $("#loginerrorBox p").html($message);
//                     hideLoginErrorBox();
//                 }
                
//                 $("#applyLeave").prop("disabled", false);
//                 console.log("End month is greater thus ok");
//               }else{
//                 console.log('3');
//                 console.log($endDate+" "+$startDate);
//                 console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
//               }
//             }
//           }else{
//             console.log($resp['message']);
//             $("#startDate").val('');
//             $("#endDate").val('');
//             $("#endDate").prop("disabled", true);
//             $("#loginerrorBox p").html($resp['message']);
//             hideLoginErrorBox();
//           }
//       }
//     });

//   });

//   window.workingDaysBetweenDates = function(startDate, endDate) {
//       var millisecondsPerDay = 86400 * 1000; 
//       startDate.setHours(0,0,0,1);  
//       endDate.setHours(23,59,59,999);  
//       var diff = endDate - startDate;     
//       var days = Math.ceil(diff / millisecondsPerDay);
      
//       // Subtract two weekend days for every week in between
//       var weeks = Math.floor(days / 7);

//       // Handle special cases
//       var startDay = startDate.getDate();
//       var endDay = endDate.getDate();
//       if(startDay == endDay){
//         resp = '{"leavedays":1,"totalDays":1}';
//       }else{
//         workingdays = days - (weeks * 2);
//         resp = '{"leavedays":'+workingdays+',"totalDays":'+days+'}';
//       }
//       return resp;
//   }   
//   //On End Date Change

// $("#applyLeave").click(function(e){
//     e.preventDefault();
//     $daysRemaining = $("#daysRemaining").val();
//     $daysToApply = $("#daysToApply").val();

//     $endDate = $('#endDate').val();
//     $startDate = $('#startDate').val();

  
//     $.ajax({
//         url:$validateStartDateUrl,
//         data:{"startDate":$startDate,"endDate":$endDate},
//         type:'POST',
//         success:function($resp,status){
//           console.log("validate date hase run "+$resp);
//             $resp = JSON.parse($resp);

//             $status = parseInt($resp['status']);
//             if($status == 0){
//                  if($daysRemaining == "" || $daysRemaining == undefined || $daysRemaining == null || $daysToApply == null || $daysToApply == undefined || $daysToApply == ""){
//                       $("#loginerrorBox p").html("Complete the application form.");
//                       console.log("Complete the application form.");
//                       hideLoginErrorBox();
//                   }else{
//                       $(".overlay").show();
//                       $startDate = $('#startDate').val();
//                       $daysNID = $('#absenceReason').val();

//                       $daysNID = $daysNID.split("k"); 
//                       $leaveTypeID = $daysNID[1]; 

//                       $daysAvaliable = $('#daysAvaliable').val();
//                       $daysToApply = $('#daysToApply').val();
//                       $daysRemaining = $('#daysRemaining').val();
//                       $endDate = $('#endDate').val();
//                       $totalDays = $("#totalDaysApplied").val();
//                       $returnDate = $("#returnDate").val();
//                       // console.log("Return Date "+$returnDate+" End Date "+$endDate);
//                       // $comment = $('#comment').val();

//                       //format start date
//                       $dateValue = $startDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $startDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format start date
                      
//                       //format end date
//                       $dateValue = $endDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $endDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format end date

//                       //format return date
//                       $dateValue = $returnDate.split('/');
//                       $year = $dateValue[2];
//                       $month = $dateValue[0];
//                       $dayofWeek = $dateValue[1];
//                       $returnDate = $year+'/'+$month+'/'+$dayofWeek;
//                       //format return date
//                       console.log($endDate+"endDate  StartDate"+$startDate);

//                       $confirm = confirm("Are your sure");

//                       if($confirm == true){
//                         $.post($applyLeaveUrl,{"startDate":$startDate, "totalDaysApplied":$totalDays, "endDate":$endDate,"returnDate":$returnDate,"absenceReason":$leaveTypeID, "daysApplied":$daysToApply, "daysAvaliable":$daysAvaliable},function(data, status){
//                           console.log(data);
//                           $resp = JSON.parse(data);
//                           $status =$resp['status'];
//                           if($status == 0){
//                             $(".overlay").hide();
//                             $message = $resp['message'];
//                             $("#loginSuccessBox p").html($resp['message']);
//                             hideLoginSuccessBox();
//                             setTimeout(function(){
//                                 location.reload();
//                             },10000);
//                           }else{
//                             $(".overlay").hide();
//                             $message = $resp['message'];
//                             $("#loginerrorBox p").html($resp['message']);
//                             hideLoginErrorBox();
//                           }
//                         });
//                       }else{
//                         $(".overlay").hide();
//                       }
//                   }
//             }else{
//                 console.log($resp['message']);
//                 $("#startDate").val('');
//                 $("#endDate").val('');
//                 $("#daysRemaining").val('');
//                 $("#returnDate").val('');
//                 $("#daysToApply").val('');
//                 $("#endDate").prop("disabled", true);
//                 $("#loginerrorBox p").html($resp['message']);
//                 hideLoginErrorBox();
//             }
//         }
//     });
// });
// //apply leave
// });
//subracts public holidays


//live at kippra
$(document).ready(function(){
  //plugin for start Date
  $('#startDate').daterangepicker({
    singleDatePicker: true,
    calender_style: "picker_4",
    minDate: new Date(),
    isInvalidDate: function(date){
      /*
      validates the following dates
      1) 1st Jan- 2nd Jan
      2) 1st May
      3) 25th Dec - 31st Dec
      4) 1st June
      5) 20th Oct
      6) 12th Dec
      */

      if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
        // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || 
        return true; 
      }else{
        return false;
      }
    },
  }, function(start, end, label) {
    //console.log(start.toISOString(), end.toISOString(), label);
  });
  //plugin for start date
  
  //plugin for end date
  $('#endDate').daterangepicker({
    singleDatePicker: true,
    calender_style: "picker_4",
    minDate: new Date(),
    isInvalidDate: function(date){
      /*
      validates the following dates
      1) 1st Jan- 2nd Jan
      2) 1st May
      3) 25th Dec - 31st Dec
      4) 1st June
      5) 20th Oct
      6) 12th Dec
      */

      if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
        // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') 
        return true; 
      }else{
        return false;
      }
    },
  }, function(start, end, label) {
    //console.log(start.toISOString(), end.toISOString(), label);
  });
  //plugin for end date

  
  $('#startDate').prop('disabled',true);
  $('#endDate').prop('disabled',true);
  $('#daysAvaliable').prop('disabled', true);
  $('#daysToApply').prop('disabled', true);
  $('#daysRemaining').prop('disabled', true);
  $('#returnDate').prop('disabled', true);
  $("#applyLeave").prop('disabled', true);

  $("#startDate").change(function(){
    $('#endDate').val('');
    $('#daysToApply').val('');
    $('#daysRemaining').val('');
    $('#returnDate').val('');
    $("#applyLeave").prop('disabled', true);

    $daysNID = $("#absenceReason").val();

    $daysNID = $daysNID.split("k"); 
    $leavedays = Math.ceil($daysNID[0]);
    $leaveTypeID = $daysNID[1];
    console.log($leaveTypeID);

    if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
      console.log("disable entry of end date");

      $startDate = $('#startDate').val();
      $endDate = $('#endDate').val();
      //format date
      $dateValue = $startDate.split('/');
      $year = $dateValue[2];
      $month = $dateValue[0];
      $dayofWeek = $dateValue[1];
      $startDate = $month+'/'+$dayofWeek+'/'+$year;
      // format date

      $expectedReturnDate = getReturnDateIncludingWeekends($startDate,$leavedays);
      // console.log("getReturnDateIncludingWeekends has run "+getReturnDateIncludingWeekends($startDate,$leavedays));
      $endAndReturnDate = $expectedReturnDate.split('k');
      $("#daysToApply").val($leavedays);
      $("#returnDate").val($endAndReturnDate[0]);
      $("#endDate").val($endAndReturnDate[1]);
      $('#daysRemaining').val(0);
      $("#applyLeave").prop('disabled', false);
    }else{
      $("#endDate").prop('disabled', false);
      $days = $("#daysToApply").val();
      if($days == null || $days  == undefined || $days == ""){
        // console.log("undefined");
      }else{
        $startDate = $('#startDate').val();
        //format date
        $dateValue = $startDate.split('/');
        $year = $dateValue[2];
        $month = $dateValue[0];
        $dayofWeek = $dateValue[1];
        $newDate = $month+'/'+$dayofWeek+'/'+$year;

        //format date
        $expectedReturnDate = getDateFromStartDateLeaveDays($newDate,$days);
        $expectedReturnDate = $expectedReturnDate.split("k");
        $("#returnDate").val($expectedReturnDate[0]);
        //sex
        //$("#endDate").val($expectedReturnDate[1]);
      }
    }
  });

  //apply leave
    //auto populates the number of days field during leave application
  $("#absenceReason").change(function(){
      $('#startDate').prop('disabled',false);
      $('#endDate').prop('disabled',true);
      $('#endDate').val('');
      $('#startDate').val('');
      $('#daysToApply').val('');
      $('#daysRemaining').val('');
      $('#daysAvaliable').val('');
      $('#returnDate').val('');
      $("#applyLeave").prop('disabled', true);

      $daysNID = $("#absenceReason").val();

      $daysNID = $daysNID.split("k"); 
      $leavedays = Math.ceil($daysNID[0]);
      $leaveTypeID = $daysNID[1];
      $("#daysAvaliable").val($leavedays);
      if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
          $("#daysToApply").prop('disabled', true);
          $('#endDate').prop('disabled', true);

          $startDate = $('#startDate').val();
          
          //format date
          $dateValue = $startDate.split('/');
          $year = $dateValue[2];
          $month = $dateValue[0];
          $dayofWeek = $dateValue[1];
          $startDate = $month+'/'+$dayofWeek+'/'+$year;
          // format date
          if($startDate === '/undefined/undefined' || $startDate === '/undefined/undefined' || $startDate === '/undefined/undefined'){
          }else{
            $expectedReturnDate = getDateFromStartDateLeaveDays($startDate,$leavedays);
            $endAndReturnDate = $expectedReturnDate.split('k');
            console.log(" End and return Date "+$endAndReturnDate);
            $("#returnDate").val($endAndReturnDate[0]);
            $("#endDate").val($endAndReturnDate[1]);
            $("#applyLeave").prop('disabled', false);
          }
      }else{
// <<<<<<< HEAD
//           $('#daysToApply').attr('max', $leavedays);
//           $('#daysToApply').attr('min', parseInt(0));
//        // $("#daysToApply").prop('disabled', false);
// =======
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
      }
  });
  //auto populates the number of days field during leave application

  window.getNumberOfHolidaysWithinDateRange = function(){
// <<<<<<< HEAD
//         //ADJUSTS FOR HOLIDAYS
//     //get the holidays
//     //check to see if holidays fall within the date range applied
//     //do necessary adjustements
//     $holidaysWithinRange = 0;
// =======
    //ADJUSTS FOR HOLIDAYS
    //get the holidays
    //check to see if holidays fall within the date range applied
    //do necessary adjustements
    $holidayCounter = 0;
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
    $startDate = $("#startDate").val();
    $endDate = $("#endDate").val();

    $startDateArray = $startDate.split("/");
    $endDateArray = $endDate.split("/");

    $currentYear = new Date().getFullYear();
// <<<<<<< HEAD
//     $k = 0;
//     while($k < $holidays.length){
//         //loop through holidays to check if any falls within range
//         $holidayDate = $holidays[$k]['holidayDate'];//compare this to the start date end date range provided
//         $holidayDateArray = $holidayDate.split("-");

//         // console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
//         // console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
//         // console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
//         //FromDate >=  @startDate AND ToDate <=  @endDate
//         var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
//         var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
//         var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

//         // console.log("From "+from+" To "+to+" Check "+check);
//         //check if this datae falls on weekedn, if not it is okay increament else don't increament
//         $dayOfWeek = check.getDay();
//         $dayOfWeek = parseInt($dayOfWeek);
//         if((check > from && check < to) && ($dayOfWeek == 6 || $dayOfWeek == 0)){
//             //if it falls on range increase days buy 1
//             console.log("falls in range");
//             // console.log("From: "+from);
//             // console.log("To: "+to);
//             // console.log("Check: "+check);
//             // console.log("DOW "+$dayOfWeek);
//             $holidaysWithinRange++;
//         }else{
//             //if it doesn't fall in range DO NOTHINg
//             console.log("not in range");
//             // console.log("From: "+from);
//             // console.log("To: "+to);
//             // console.log("Check: "+check);
//         }

//         // if($holidayDate >= $startDateDnM && $holidayDate <= $endDateDnM){//if the 
//         //   
//         // }else{
//         //   
//         // }
//         $k++;
//     }
//     //ADJUSTS FOR HOLIDAYS
//     return $holidaysWithinRange;
//   }
//   //gets the holidays set in the system
//   window.getHolidays = function(){
//       $.ajax({
//         url:$getHolidays,
//         data:{},
//         type:'POST',
//         success:function($resp,status){
//           console.log($resp);
//           $holidays = JSON.parse($resp);
//           // console.log($holidays[0]['holidayName']);
//           return $holidays;
//         }
//       });
//   }   
//   getHolidays();//this is called to pre-popuate the holidays variable
//   //gets the holidays set in the system
//   function getReturnDateIncludingWeekends($startDate,$leavedays){
//       //compute return date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays));
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var returnDate = mm + '/' + dd + '/' + y;
//       //compute return date

//       //compute end date
//       var date = new Date($startDate);
//       var newdate = new Date(date);

//       $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays)-1);
//       newdate.setDate($newdayvalue);

//       var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
//       var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
//       var y = newdate.getFullYear();

//       var leaveEndDate = mm + '/' + dd + '/' + y;
//       //compute end date

//      // console.log('getReturnDateIncludingWeekends '+returnDate+'leave end date'+leaveEndDate);
//       return returnDate+'k'+leaveEndDate;
// =======
    $kl = 0;
    // while($k < $holidays.length){
    //     //loop through holidays to check if any falls within range
    //     $holidayDate = $holidays[$k][1];//compare this to the start date end date range provided
    //     $holidayDateArray = $holidayDate.split("-");

    //     // console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
    //     // console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
    //     // console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
    //     //FromDate >=  @startDate AND ToDate <=  @endDate
    //     var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
    //     var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
    //     var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

    //     // console.log("From "+from+" To "+to+" Check "+check);
    //     //check if this datae falls on weekedn, if not it is okay increament else don't increament
    //     $dayOfWeek = check.getDay();
    //     $dayOfWeek = parseInt($dayOfWeek);
    //     if((check > from && check < to) && ($dayOfWeek == 6 || $dayOfWeek == 0)){
    //         //if it falls on range increase days buy 1
    //         console.log("falls in range");
    //         // console.log("From: "+from);
    //         // console.log("To: "+to);
    //         // console.log("Check: "+check);
    //         // console.log("DOW "+$dayOfWeek);
    //         $holidaysWithinRange++;
    //     }else{
    //         //if it doesn't fall in range DO NOTHINg
    //         console.log("not in range");
    //         // console.log("From: "+from);
    //         // console.log("To: "+to);
    //         // console.log("Check: "+check);
    //     }

    //     // if($holidayDate >= $startDateDnM && $holidayDate <= $endDateDnM){//if the 
    //     //   
    //     // }else{
    //     //   
    //     // }
    //     $k++;
    // }
     while($kl < $holidays.length){//loop through the holidays 
          //loop through holidays to check if any falls within range
          $holidayDate = $holidays[$kl][1];//compare this to the start date end date range provided
          $holidayDateArray = $holidayDate.split("-");

          // console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
          // console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
          // console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
          
          var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
          var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
          var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);//make date out of the value Holiday datearray

          // console.log("From "+from+" To "+to+" Check "+check);
          if(check >= from && check <= to){//does the holiday fall between the start and end date
              //if it falls on range increase days buy 1
              $holidayCounter++;//give the number of holidays that fall between these two dates                      
              console.log($holidayCounter+"counting");
              //remove the holiday from the $holiday array to avoid recounting holiday
              $arr = $.grep($holidays, function(val, index){
                // console.log(val);
                  console.log($holidayDate+" holiday date");
                return val[1] != $holidayDate;
              });
             // console.log($arr);
             //remove the holiday from the $holiday array to avoid recounting holiday

              // console.log("falls in range");
              // console.log("From: "+from);
              // console.log("To: "+to);
              // console.log("Check: "+check);
          }else{
              //if it doesn't fall in range DO NOTHINg
              // console.log("not in range");
              // console.log("From: "+from);
              // console.log("To: "+to);
              // console.log("Check: "+check);
          }
          $kl++;     
    }
    //ADJUSTS FOR HOLIDAYS
    return $holidayCounter;
  }

  function getReturnDateIncludingWeekends($startDate,$leavedays){
  		//compute return date
	    var date = new Date($startDate);
	    var newdate = new Date(date);

	    $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays));
	    newdate.setDate($newdayvalue);

	    var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
	    var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
	    var y = newdate.getFullYear();

	    var returnDate = mm + '/' + dd + '/' + y;
	    //compute return date

	    //compute end date
	    var date = new Date($startDate);
	    var newdate = new Date(date);

	    $newdayvalue = parseInt((newdate.getDate()) + parseInt($leavedays)-1);
	    newdate.setDate($newdayvalue);

	    var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
	    var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
	    var y = newdate.getFullYear();
        var leaveEndDate = mm + '/' + dd + '/' + y;
	    //compute end date

	    // console.log('getReturnDateIncludingWeekends '+returnDate+'leave end date'+leaveEndDate);
	    return returnDate+'k'+leaveEndDate;
// >>>>>>> 80aa3777f0b9ec647507a3e6a2992d48460fd2fb
  }

  function getDateFromStartDateLeaveDays($startDate,$leavedays){
    //get the number weeks add the weeks
    var date = new Date($startDate);
    var newdate = new Date(date);
    $k = 0;

    $("#totalDaysApplied").val($leavedays);//hidden field
    // $totalDaysApplied = $leavedays + $totalWeekendDaysOnLeave;
    while($k < $leavedays){
      //add the number of days
      // $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
      // newdate.setDate($newdayvalue);
      var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
      var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
      var y = newdate.getFullYear();
      $t = new Date(y,(mm-1),dd);
      $dayOfWeek = $t.getDay();
      $dayOfWeek = parseInt($dayOfWeek);
      // console.log("DOW "+$dayOfWeek);
      if($dayOfWeek == 6 || $dayOfWeek == 0){
        // console.log("weekend");
        $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
        newdate.setDate($newdayvalue);
        console.log(newdate);
        $k--;
      }else{  
        // console.log("not weekend");
        $newdayvalue = parseInt((newdate.getDate()) + parseInt(1));
        newdate.setDate($newdayvalue);
        console.log(newdate);
      }
      $k++;
    }
    var leaveEndDate = mm + '/' + dd + '/' + y;

    $newdayvalue = parseInt(newdate.getDate());
    newdate.setDate($newdayvalue);  
    var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
    var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
    var y = newdate.getFullYear();

    // console.log("return date"+dd+" "+mm+" "+y);
    $t = new Date(y,(mm-1),dd);
    // console.log("return date"+$t);

    $dayOfWeek = $t.getDay();
    $dayOfWeek = parseInt($dayOfWeek);
    // console.log('ODW '+$dayOfWeek);
    if($dayOfWeek == 6){//saturday
      var $newDate = mm + '/' + dd + '/' + y;
      var date = new Date($newDate);
      var newdate = new Date(date);

      $newdayvalue = parseInt(newdate.getDate()) + parseInt((2));
      newdate.setDate($newdayvalue);  
      var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
      var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
      var y = newdate.getFullYear();
      // dd = parseInt(dd)+2;
    }else if($dayOfWeek == 0){//sunday
      var $newDate = mm + '/' + dd + '/' + y;
      var date = new Date($newDate);
      var newdate = new Date(date);

      $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
      newdate.setDate($newdayvalue);  
      var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
      var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
      var y = newdate.getFullYear();
      // dd = parseInt(dd)+1;
    }else{}

    var returnDate = mm + '/' + dd + '/' + y;
    return returnDate+'k'+leaveEndDate;
    // return JSON.stringify('{"leavedays":'+someFormattedDate+',"totalDays":'+someFormattedDate+'}'); 
  }
  //get expected return date

  window.computeLeaveDetails = function(a,b){
    $leavDaysArray = JSON.parse(workingDaysBetweenDates(a,b));//gets you the working days and total leave days applied.
    
    $leavedays = $leavDaysArray['leavedays'];

    var date = new Date(a);
    var newdate = new Date(date);    

    //if start date plus days applied covers weekend skip weekend
      $k = 1;
      $workingDays = 0;
      $leavedays = $leavDaysArray['totalDays']+1;
      while($k < $leavedays){
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
        if($dayOfWeek == 0 || $dayOfWeek == 6){
          $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
          newdate.setDate($newdayvalue);  
        }else{
          //increase day by one
          $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
          newdate.setDate($newdayvalue);  
          $workingDays++;
          // console.log("Working Days "+$workingDays+" Day of week "+$workingDays);
          // console.log(newdate);
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
      
      if($workingDays > $daysEntitled){
          $("#startDate").val("");
          $("#absenceReason").val("");
          $("#daysAvaliable").val("");
          $("#daysToApply").val("");
          $("#daysRemaining").val("");
          $("#returnDate").val("");
          $("#endDate").val("");
          $('#startDate').prop('disabled',true);
          $('#endDate').prop('disabled',true);

          var element = document.getElementById("applyLeave")
          element.setAttribute('disabled','disabled')
          
          $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
          hideLoginErrorBox(); 

      }else{  
          //display working days
          $("#daysToApply").val($workingDays);
          //display working days

          //get expected return date
          //sex
          $expectedReturnDate = getDateFromStartDateLeaveDays($('#startDate').val(),$leavDaysArray['totalDays']);
          $expectedReturnDate = $expectedReturnDate.split("k");
          $("#returnDate").val($expectedReturnDate[0]);
          //get expected return date

          //compute remaining days
          $daysApplied = parseInt($("#daysToApply").val());
          $availableDays = parseInt($("#daysAvaliable").val());
          console.log($daysApplied+" "+$availableDays);
          $remaingDays = $availableDays - $daysApplied;
          console.log($daysApplied);

          $("#daysRemaining").val($remaingDays);
          //compute remaining days
      }
  }

  //On End Date Change
  // $("#endDate").change(function(){
  //   $startDate = $('#startDate').val();
  //   $endDate  = $('#endDate').val();
  //   $handleHolidayFallingOnWeekend = 0;
  //   $.ajax({
  //     url:$validateStartDateUrl,
  //     data:{"startDate":$startDate,"endDate":$endDate},
  //     type:'POST',
  //     success:function($resp,status){
  //         $resp = JSON.parse($resp);
  //         $status = parseInt($resp['status']);
  //         if($status == 0){
  //           $startDate = $startDate.split("/");
  //           $endDate = $endDate.split("/");
  //           if($startDate.toString() === $endDate.toString()){
  //               //ok
  //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
  //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
  //               $leaveDetails = computeLeaveDetails23(a,b);
  //               $leaveDetails = JSON.parse($leaveDetails);
  //               $message = $leaveDetails['message'];
  //               $workingDays = $leaveDetails['workingDays'];
  //               console.log($leaveDetails);
  //               if($message === "OK"){
  //                   $("#daysToApply").val($workingDays);
  //                   //compute remaining days
  //                   $daysApplied = parseInt($("#daysToApply").val());
  //                   $availableDays = parseInt($("#daysAvaliable").val());
  //                   console.log($daysApplied+" "+$availableDays);
  //                   $remaingDays = $availableDays - $daysApplied;
  //                   console.log($daysApplied);

  //                   $("#daysRemaining").val($remaingDays);
  //                   //compute remaining days
  //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
  //                   $returnDateArray = $returnDate.split("k");
  //                   $("#returnDate").val($returnDateArray[0]);
  //               }else{
  //                   console.log("Error computing number of working days");
  //               }

  //               $("#applyLeave").prop("disabled", false);
  //               console.log("Data appears fine ");
  //           }else{
  //               if($endDate[0] < $startDate[0]){//if end month is less than start month
  //                 console.log('End month is less than start year');
  //                 //wrong throw error, except if end year is greater than start year
  //                 if($endDate[2] > $startDate[2]){//if end year is greator than start year
  //                   //ok
  //                   //get remaining days till end of year
  //                   var d = new Date($startDate[2], 11, 31);//end date of year
  //                   var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
  //                   console.log(d+"current year days comutation "+c);
  //                   $workingDaysTillEndYear = computeLeaveDetails23(c,d);
  //                   $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
  //                   $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
  //                   $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
  //                   $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
  //                   //get remaining days till end of year

  //                   //get days between start of year and end date selected
  //                   $endDate = $endDate.split("/");
  //                   var e = new Date($endDate[2], 00, 01);//first day of first month of end year
  //                   var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
  //                   console.log($endDate+"Year ");
  //                   console.log(e+"new year days comutation "+f);
  //                   $workingDaysFromYearStart = computeLeaveDetails23(e,f);
  //                   $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
  //                   $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
  //                   $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
  //                   $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
  //                   //get days between start of year and end date selected

  //                   console.log($workingDaysFromYearStartQty+" $workingDaysTillEndYearQty "+$handleHolidayFallingOnWeekendNextYear);

  //                   //add the two days to get total days applied
  //                   console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
  //                   console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
  //                   console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
  //                   console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
  //                   $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
  //                   //add the two days to get total days applied
  //                   $daysAvailable =  $("#daysAvaliable").val();
  //                   //check of days applied is more than days entitled
  //                   if($daysAvailable < $totalDaysApplied){
  //                       $("#startDate").val('');
  //                       $("#endDate").val('');
  //                       $("#daysToApply").val('');
  //                       $("#daysRemaining").val('');
  //                       $("#returnDate").val('');

  //                       $("#endDate").prop("disabled", true);
  //                       $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
  //                       hideLoginErrorBox(); 
  //                   }else{
  //                       console.log("End month is less than start month");

  //                       $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
  //                       console.log("Number of "+$NoOfHolidays+"$totalDaysApplied"+$totalDaysApplied);
  //                       console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

  //                       $("#daysToApply").val($totalDaysApplied);
  //                       $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
  //                       $("#daysRemaining").val($remaingDays);

  //                       $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);
  //                       $returnDateArray = $returnDate.split("k");
  //                       $("#returnDate").val($returnDateArray[0]);
  //                   }
  //                 }else{
  //                     console.log('1');
  //                     $("#startDate").val('');
  //                     $("#endDate").val('');
  //                     $("#endDate").prop("disabled", true);
  //                     $("#loginerrorBox p").html("The end date cannot be less than start date");
  //                     hideLoginErrorBox();
  //                 }
  //               }else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
  //               //validate the days of the week
  //               if($endDate[1] < $startDate[1]){//if end day is less than start day
  //                 //wrong
  //                 //display error
  //                 // console.log("The end day can't be less than start day");
  //                 console.log('2');
  //                 $("#startDate").val('');
  //                 $("#endDate").val('');
  //                 $("#endDate").prop("disabled", false);
  //                 $("#loginerrorBox p").html("The end date cannot be less than start date");
  //                 hideLoginErrorBox();
  //               }else{//end day is greater than start day
  //                 //ok
  //                 //call function to compute end date, return date and number of days
  //                 var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
  //                 var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
  //                 $leaveDetails = computeLeaveDetails23(a,b);
  //                 $leaveDetails = JSON.parse($leaveDetails);
  //                 $message = $leaveDetails['message'];
  //                 $workingDays = $leaveDetails['workingDays'];
  //                 $handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

  //                 console.log($leaveDetails);
  //                 if($message === "OK"){
  //                     $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
  //                     console.log("Number of holidays"+$NoOfHolidays);
  //                     console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
  //                     $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
  //                     console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
  //                     $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
  //                     $("#daysToApply").val($workingDaysApplied);//set the days applied
  //                     //subtract from the number of days applied
  //                     //get the number of holidays between the dates selected

  //                     // $workingDaysApplied = parseInt($workingDaysApplied);
  //                     $availableDays = parseInt($("#daysAvaliable").val());
  //                     console.log($availableDays+" remaingi days"+$workingDaysApplied);
  //                     $remaingDays = $availableDays - $workingDaysApplied;

  //                     $("#daysRemaining").val($remaingDays);
  //                     //compute remaining days
  //                     $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
  //                     console.log($workingDays+"sdsdsd");
  //                     console.log("Return Date info "+$returnDate);
  //                     $returnDateArray = $returnDate.split("k");
  //                     $returnDate = $returnDateArray[0].split("/");
  //                     $month = $returnDate[0];
  //                     $day = $returnDate[1];
  //                     $combi = $month+"/"+$day;

  //                     if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){
  //                       $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
  //                     }else{
  //                       $returnDate = $returnDateArray[0];
  //                     }

  //                     console.log("Return Datess"+$returnDate);
  //                     // $("#returnDate").val($returnDateArray[0]);
  //                     $("#returnDate").val($returnDate);
  //                 }else{
  //                     console.log("Error computing number of working days");
  //                 }
                
  //                 $("#applyLeave").prop("disabled", false);
  //                 console.log("Data appears fine ");
  //               }
  //             }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
  //               //call function to compute end date and and number of days
  //               //okconsole.log("Error");
  //               var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
  //               var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
  //               $leaveDetails = computeLeaveDetails23(a,b);
  //               $leaveDetails = JSON.parse($leaveDetails);
  //               $message = $leaveDetails['message'];
  //               $workingDays = $leaveDetails['workingDays'];
  //               console.log("Just before leavedetails "+$leaveDetails['message']);

  //               if($message === "OK"){
  //                   console.log("Just before leavedetails");  
  //                   //compute remaining days
  //                   //get the number of holidays between the dates selected
  //                   //subtract from the number of days applied
  //                   $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
  //                   console.log("Number of "+$NoOfHolidays);
  //                   console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
  //                   $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
  //                   $("#daysToApply").val($workingDaysApplied);//set the days applied
  //                   //subtract from the number of days applied
  //                   //get the number of holidays between the dates selected

  //                   // $workingDaysApplied = parseInt($workingDaysApplied);
  //                   $availableDays = parseInt($("#daysAvaliable").val());
  //                   console.log("Days applied "+$workingDaysApplied+" Days available xxx "+$availableDays);
  //                   $remaingDays = $availableDays - $workingDaysApplied;

  //                   $("#daysRemaining").val($remaingDays);
  //                   //compute remaining days
  //                   $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
  //                   console.log("Return Date info "+$returnDate);
  //                   $returnDateArray = $returnDate.split("k");
  //                   $("#returnDate").val($returnDateArray[0]);
  //               }else{
  //                   console.log("Error computing number of working days");
  //                   $("#startDate").val('');
  //                   $("#endDate").val('');
  //                   $("#endDate").prop("disabled", true);
  //                   $("#loginerrorBox p").html($message);
  //                   hideLoginErrorBox();
  //               }
                
  //               $("#applyLeave").prop("disabled", false);
  //               console.log("End month is greater thus ok");
  //             }else{
  //               console.log('3');
  //               console.log($endDate+" "+$startDate);
  //               console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
  //             }
  //           }
  //         }else{
  //           console.log($resp['message']);
  //           $("#startDate").val('');
  //           $("#endDate").val('');
  //           $("#endDate").prop("disabled", true);
  //           $("#loginerrorBox p").html($resp['message']);
  //           hideLoginErrorBox();
  //         }
  //     }
  //   });
  // });
    $("#endDate").change(function(){
	    $startDate = $('#startDate').val();
	    $endDate  = $('#endDate').val();
	    $handleHolidayFallingOnWeekend = 0;
	    $.ajax({
	    	url:$validateStartDateUrl,//chcecks if the user has applied for leave within this date range
		    data:{"startDate":$startDate,"endDate":$endDate},
		    type:'POST',
		    success:function($resp,status){
		    	$resp = JSON.parse($resp);
	          	$status = parseInt($resp['status']);
          	 	if($status == 0){//the date range selected is valid
            		$startDate = $startDate.split("/");
            		$endDate = $endDate.split("/");

            		if($startDate.toString() === $endDate.toString()){//if the start and end date are equal the user wants to apply for a single leave day thus do the computations within this if else
		                //ok
		                var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
		                var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);

		                $leaveDetails = computeLeaveDetails23(a,b);//defined in the main view

		                $leaveDetails = JSON.parse($leaveDetails);
		                $message = $leaveDetails['message'];
		                $workingDays = $leaveDetails['workingDays'];
		                console.log($leaveDetails);
                		if($message === "OK"){//the days the user applied for are less than the leave days available thus OK
		                    $("#daysToApply").val($workingDays);
		                    //compute remaining days
		                    $daysApplied = parseInt($("#daysToApply").val());
		                    $availableDays = parseInt($("#daysAvaliable").val());
		                    console.log($daysApplied+" "+$availableDays);
		                    $remaingDays = $availableDays - $daysApplied;
		                    console.log($daysApplied);

		                    $("#daysRemaining").val($remaingDays);
		                    //compute remaining days
		                    $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$daysApplied);
		                    $returnDateArray = $returnDate.split("k");
		                    $("#returnDate").val($returnDateArray[0]);
                		}else{
                    		console.log("Error computing number of working days");
                		}

		                $("#applyLeave").prop("disabled", false);
		                console.log("Data appears fine ");
            		}else{
                		if($endDate[0] < $startDate[0]){//if end month is less than start month
                  		console.log('End month is less than start year');
                  		//wrong throw error, except if end year is greater than start year
                  			if($endDate[2] > $startDate[2]){//if end year is greator than start year
			                    //ok
			                    //get remaining days till end of year
			                    var d = new Date($startDate[2], 11, 31);//end date of year
			                    var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
			                    console.log(d+"current year days comutation "+c);

			                    $workingDaysTillEndYear = computeLeaveDetails23(c,d);
			                    $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
			                    $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
			                    $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
			                    $handleHolidayFallingOnWeekendCurrentYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
			                    //get remaining days till end of year

			                    //get days between start of year and end date selected
			                    $endDate = $endDate.split("/");
			                    var e = new Date($endDate[2], 00, 01);//first day of first month of end year
			                    var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
			                    console.log($endDate+"Year ");
			                    console.log(e+"new year days comutation "+f);
			                    $workingDaysFromYearStart = computeLeaveDetails23(e,f);
			                    $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
			                    $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
			                    $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
			                    $handleHolidayFallingOnWeekendNextYear = $workingDaysTillEndYear['handleHolidayFallingOnWeekend']
			                    //get days between start of year and end date selected

			                    //add the two days to get total days applied
			                    console.log("$handleHolidayFallingOnWeekendCurrentYear"+$handleHolidayFallingOnWeekendCurrentYear+"Working days"+$workingDaysTillEndYearQty);
			                    console.log($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
			                    console.log(($workingDaysFromYearStartQty + $workingDaysTillEndYearQty));
			                    console.log("$handleHolidayFallingOnWeekendNextYear"+$handleHolidayFallingOnWeekendNextYear+"Working days"+$workingDaysFromYearStartQty );
			                    // $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)-($handleHolidayFallingOnWeekendCurrentYear+$handleHolidayFallingOnWeekendNextYear);
			                    $totalDaysApplied = ($workingDaysFromYearStartQty + $workingDaysTillEndYearQty)
			                    //add the two days to get total days applied
			                    $daysAvailable =  $("#daysAvaliable").val();
			                    //check of days applied is more than days entitled
			                    if($daysAvailable < $totalDaysApplied){
			                        $("#startDate").val('');
			                        $("#endDate").val('');
			                        $("#daysToApply").val('');
			                        $("#daysRemaining").val('');
			                        $("#returnDate").val('');

			                        $("#endDate").prop("disabled", true);
			                        $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
			                        hideLoginErrorBox(); 
			                    }else{
                        			console.log("End month is less than start month");

			                        $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
			                        console.log("Number of "+$NoOfHolidays);
			                        console.log("Days Less holiday = "+($totalDaysApplied-$NoOfHolidays));

			                        $("#daysToApply").val($totalDaysApplied-$NoOfHolidays);
			                        $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
			                        $("#daysRemaining").val($remaingDays);

			                        //return and end date
			                        $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);//gets return Date and leave end date
			                        $returnDateArray = $returnDate.split("k");
			                        console.log(" returnDateArray "+$returnDateArray);
			                        $("#returnDate").val($returnDateArray[0]);
			                        $("#applyLeave").prop("disabled", false);
			                        //return and end date
                    			}
                  			}else{
		                      	console.log('1');
		                      	$("#startDate").val('');
		                      	$("#endDate").val('');
		                      	$("#endDate").prop("disabled", true);
		                      	$("#loginerrorBox p").html("The end date cannot be less than start date");
		                      	hideLoginErrorBox();
		                  	}
              			}else if($endDate[0] == $startDate[0]){//if month is equal check if dates are valid
			                //validate the days of the week
			                if($endDate[1] < $startDate[1]){//if end day is less than start day
				                //wrong
				                //display error
				                // console.log("The end day can't be less than start day");
				                console.log('2');
				                $("#startDate").val('');
				                $("#endDate").val('');
				                $("#endDate").prop("disabled", false);
				                $("#loginerrorBox p").html("The end date cannot be less than start date");
				                hideLoginErrorBox();
                			}else{//end day is greater than start day
			                  	//ok
			                  	//call function to compute end date, return date and number of days
			                  	var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
			                  	var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
			                  	$leaveDetails = computeLeaveDetails23(a,b);
			                  	$leaveDetails = JSON.parse($leaveDetails);
			                  	$message = $leaveDetails['message'];
			                  	$workingDays = $leaveDetails['workingDays'];
			                  	$handleHolidayFallingOnWeekend = $leaveDetails['handleHolidayFallingOnWeekend'];

			                  	console.log($leaveDetails);
                  				if($message === "OK"){//the days applied are less than the leave days available thus OK

			                      //compute remaining days
			                    
			                      //get the number of holidays between the dates selected
			                      //subtract from the number of days applied
			                      	$NoOfHolidays = getNumberOfHolidaysWithinDateRange();
			                      	console.log("Number of holidays"+$NoOfHolidays);
			                      	console.log("ze working days"+$workingDays);
			                      	console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
			                      	$workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
			                      	console.log($handleHolidayFallingOnWeekend+"isss"+$workingDaysApplied);
			                      	$("#daysToApply").val($workingDaysApplied);
			                      // $workingDaysApplied = parseInt($workingDaysApplied)+parseInt($handleHolidayFallingOnWeekend)
			                      // $("#daysToApply").val($workingDaysApplied);//set the days applied
			                      //subtract from the number of days applied
			                      //get the number of holidays between the dates selected

			                      // $workingDaysApplied = parseInt($workingDaysApplied);
			                      	$availableDays = parseInt($("#daysAvaliable").val());
			                      	console.log($availableDays+" remaingi days"+$workingDaysApplied);
			                      	$remaingDays = $availableDays - $workingDaysApplied;

			                      	$("#daysRemaining").val($remaingDays);
			                      //compute remaining days
			                      	$returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
			                      	console.log($workingDays+"sdsdsd");
			                      	console.log("Return Date info "+$returnDate);
			                      	$returnDateArray = $returnDate.split("k");
			                      	$returnDate = $returnDateArray[0].split("/");
			                      	$month = $returnDate[0];
			                      	$day = $returnDate[1];
			                      	$combi = $month+"/"+$day;

				                    if($combi == "12/26" || $combi == "12/27" || $combi == "12/28" || $combi == "12/29" || $combi == "12/30" || $combi == "12/31"){				                    	
				                        $returnDate = "3/01/"+(parseInt($returnDate[2])+parseInt(1));
				                    }else{
				                       	$returnDate = $returnDateArray[0];
				                    }

				                    console.log("Return Datess"+$returnDate);
				                    // $("#returnDate").val($returnDateArray[0]);
				                    $("#returnDate").val($returnDate);
                  				}else{
			                      	console.log("Error computing number of working days");
			                  	}
                
                  $("#applyLeave").prop("disabled", false);
                  console.log("Data appears fine ");
                }
              }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
                //call function to compute end date and and number of days
                //okconsole.log("Error");
                var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
                var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
                $leaveDetails = computeLeaveDetails23(a,b);
                $leaveDetails = JSON.parse($leaveDetails);
                $message = $leaveDetails['message'];
                $workingDays = $leaveDetails['workingDays'];

                if($message === "OK"){
                    //compute remaining days
                    
                    //get the number of holidays between the dates selected
                    //subtract from the number of days applied
                    $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
                    console.log("Number of "+$NoOfHolidays);
                    console.log("Days Less holiday = "+($workingDays-parseInt($NoOfHolidays)));
                    $workingDaysApplied = $workingDays-parseInt($NoOfHolidays);
                    $("#daysToApply").val($workingDaysApplied);//set the days applied
                    //subtract from the number of days applied
                    //get the number of holidays between the dates selected

                    // $workingDaysApplied = parseInt($workingDaysApplied);
                    $availableDays = parseInt($("#daysAvaliable").val());
                    $remaingDays = $availableDays - $workingDaysApplied;

                    $("#daysRemaining").val($remaingDays);
                    //compute remaining days
                    $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$workingDays);
                    console.log("Return Date info "+$returnDate);
                    $returnDateArray = $returnDate.split("k");
                    $("#returnDate").val($returnDateArray[0]);
                }else{
                    console.log("Error computing number of working days");
                    $("#startDate").val('');
                    $("#endDate").val('');
                    $("#endDate").prop("disabled", true);
                    $("#loginerrorBox p").html($message);
                    hideLoginErrorBox();
                }
                
                $("#applyLeave").prop("disabled", false);
                console.log("End month is greater thus ok");
              }else{
                console.log('3');
                console.log($endDate+" "+$startDate);
                console.log("condition not tested "+$endDate[0]+ " strat month "+$startDate[0]);
              }
            }
          }else{
            console.log($resp['message']);
            $("#startDate").val('');
            $("#endDate").val('');
            $("#endDate").prop("disabled", true);
            $("#loginerrorBox p").html($resp['message']);
            hideLoginErrorBox();
          }
      }
    });

  });

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
        resp = '{"leavedays":1,"totalDays":1}';
      }else{
        workingdays = days - (weeks * 2);
        resp = '{"leavedays":'+workingdays+',"totalDays":'+days+'}';
      }
      return resp;
  }   
  //On End Date Change

$("#applyLeave").click(function(e){
    e.preventDefault();
    $daysRemaining = $("#daysRemaining").val();
    $daysToApply = $("#daysToApply").val();

    $endDate = $('#endDate').val();
    $startDate = $('#startDate').val();

  
    $.ajax({
        url:$validateStartDateUrl,
        data:{"startDate":$startDate,"endDate":$endDate},
        type:'POST',
        success:function($resp,status){
          console.log("validate date hase run "+$resp);
            $resp = JSON.parse($resp);

            $status = parseInt($resp['status']);
            if($status == 0){
                 if($daysRemaining == "" || $daysRemaining == undefined || $daysRemaining == null || $daysToApply == null || $daysToApply == undefined || $daysToApply == ""){
                      $("#loginerrorBox p").html("Complete the application form.");
                      console.log("Complete the application form.");
                      hideLoginErrorBox();
                  }else{
                      $(".overlay").show();
                      $startDate = $('#startDate').val();
                      $daysNID = $('#absenceReason').val();

                      $daysNID = $daysNID.split("k"); 
                      $leaveTypeID = $daysNID[1]; 

                      $daysAvaliable = $('#daysAvaliable').val();
                      $daysToApply = $('#daysToApply').val();
                      $daysRemaining = $('#daysRemaining').val();
                      $endDate = $('#endDate').val();
                      $totalDays = $("#totalDaysApplied").val();
                      $returnDate = $("#returnDate").val();
                      // console.log("Return Date "+$returnDate+" End Date "+$endDate);
                      // $comment = $('#comment').val();

                      //format start date
                      $dateValue = $startDate.split('/');
                      $year = $dateValue[2];
                      $month = $dateValue[0];
                      $dayofWeek = $dateValue[1];
                      $startDate = $year+'/'+$month+'/'+$dayofWeek;
                      //format start date
                      
                      //format end date
                      $dateValue = $endDate.split('/');
                      $year = $dateValue[2];
                      $month = $dateValue[0];
                      $dayofWeek = $dateValue[1];
                      $endDate = $year+'/'+$month+'/'+$dayofWeek;
                      //format end date

                      //format return date
                      $dateValue = $returnDate.split('/');
                      $year = $dateValue[2];
                      $month = $dateValue[0];
                      $dayofWeek = $dateValue[1];
                      $returnDate = $year+'/'+$month+'/'+$dayofWeek;
                      //format return date
                      console.log($endDate+"endDate  StartDate"+$startDate);

                      $confirm = confirm("Are your sure");

                      if($confirm == true){
                        $.post($applyLeaveUrl,{"startDate":$startDate, "totalDaysApplied":$totalDays, "endDate":$endDate,"returnDate":$returnDate,"absenceReason":$leaveTypeID, "daysApplied":$daysToApply, "daysAvaliable":$daysAvaliable},function(data, status){
                          console.log(data);
                          $resp = JSON.parse(data);
                          $status =$resp['status'];
                          if($status == 0){
                            $(".overlay").hide();
                            $message = $resp['message'];
                            $("#loginSuccessBox p").html($resp['message']);
                            hideLoginSuccessBox();
                            setTimeout(function(){
                                location.reload();
                            },10000);
                          }else{
                            $(".overlay").hide();
                            $message = $resp['message'];
                            $("#loginerrorBox p").html($resp['message']);
                            hideLoginErrorBox();
                          }
                        });
                      }else{
                        $(".overlay").hide();
                      }
                  }
            }else{
                console.log($resp['message']);
                $("#startDate").val('');
                $("#endDate").val('');
                $("#daysRemaining").val('');
                $("#returnDate").val('');
                $("#daysToApply").val('');
                $("#endDate").prop("disabled", true);
                $("#loginerrorBox p").html($resp['message']);
                hideLoginErrorBox();
            }
        }
    });
});
//apply leave
});
//live at kippra