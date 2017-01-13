$(document).ready(function(){
  //plugin for start Date
  $datesToBlockArray = null;
  $.post($getDatesToBlockUrl,{},function(data, status){
      $datesToBlockArray = JSON.parse(data);
  });

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
       if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
            return true; 
            console.log("Returned true");
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

      if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
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
    $daysNID = $("#absenceReason").val();

    $daysNID = $daysNID.split("k"); 
    $leavedays = Math.ceil($daysNID[0]);
    $leaveTypeID = $daysNID[1];

    if($leaveTypeID == "MATERNITY" || $leaveTypeID == "PATERNITY"){
      console.log("disable entry of end date");

      $startDate = $('#startDate').val();

      //format date
      $dateValue = $startDate.split('/');
      $year = $dateValue[2];
      $month = $dateValue[0];
      $dayofWeek = $dateValue[1];
      $startDate = $month+'/'+$dayofWeek+'/'+$year;
      // format date

      $expectedReturnDate = getDateFromStartDateLeaveDays($startDate,$leavedays);
      $endAndReturnDate = $expectedReturnDate.split('k');
      $("#returnDate").val($endAndReturnDate[0]);
      $("#endDate").val($endAndReturnDate[1]);
      $("#applyLeave").prop('disabled', false);
      $("#daysRemaining").val(0);
    }else{
      $("#endDate").prop('disabled', false);
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
  });
  //auto populates the number of days field during leave application


  //get expected return date
  // function getdate($newDate,$leavedays) {
  //     var date = new Date($newDate);
  //     var newdate = new Date(date);
      
  //     $newdayvalue = parseInt(newdate.getDate()) + parseInt(($leavedays));
  //     newdate.setDate($newdayvalue);  
  //     var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
  //     var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
  //     var y = newdate.getFullYear();    

  //     $t = new Date(y,(mm-1),dd);
  //     $dayOfWeek = $t.getDay();
  //     $dayOfWeek = parseInt($dayOfWeek);

  //     if($dayOfWeek == 6){
  //       $newdayvalue = parseInt(newdate.getDate()) + parseInt((2));
  //       newdate.setDate($newdayvalue);  
  //     }else if($dayOfWeek == 0){
  //       $newdayvalue = parseInt(newdate.getDate()) + parseInt((1));
  //       newdate.setDate($newdayvalue);  
  //     }
  //     var dd = ("0" + newdate.getDate()).slice(-2);;//newdate.getDate();
  //     var mm = ("0" + (newdate.getMonth() + 1)).slice(-2);
  //     var y = newdate.getFullYear();   
  //     $returnDate = mm+"/"+dd+"/"+y;
      
  //     return $returnDate;
  // }

  //gets the holidays set in the system
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


  function getDateFromStartDateLeaveDays($startDate,$leavedays){
    //get the number weeks add the weeks
    var date = new Date($startDate);
    var newdate = new Date(date);
    $k = 0;

    $("#daysToApply").val($leavedays);
    $("#totalDaysApplied").val($leavedays);//hidden field
    $NoOfHolidays = getNumberOfHolidaysWithinDateRange();
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

      //adjusts for weekends
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
      //adjusts for weekends
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

    //adjusts for weekends
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
    //adjusts for weekends
    var returnDate = mm + '/' + dd + '/' + y;
    return returnDate+'k'+leaveEndDate;
  }
  //get expected return date

  window.getNumberOfHolidaysWithinDateRange = function(){
        //ADJUSTS FOR HOLIDAYS
    //get the holidays
    //check to see if holidays fall within the date range applied
    //do necessary adjustements
    $holidaysWithinRange = 0;
    $startDate = $("#startDate").val();
    $endDate = $("#endDate").val();

    $startDateArray = $startDate.split("/");
    $endDateArray = $endDate.split("/");

    $currentYear = new Date().getFullYear();
    $k = 0;
    while($k < $holidays.length){
        //loop through holidays to check if any falls within range
        $holidayDate = $holidays[$k]['holidayDate'];//compare this to the start date end date range provided
        $holidayDateArray = $holidayDate.split("-");

        console.log("Start Date broken down: Year "+$startDateArray[2]+" Month "+$startDateArray[0]+" Day "+$startDateArray[1]);
        console.log("End Date broken down: Year "+$endDateArray[2]+" Month "+$endDateArray[0]+" Day "+$endDateArray[1]);
        console.log("Check year broken down: Year "+$currentYear+" Month "+$holidayDateArray[1]+" Day "+$holidayDateArray[0]);
        //FromDate >=  @startDate AND ToDate <=  @endDate
        var from = new Date($startDateArray[2], parseInt($startDateArray[0])-1, $startDateArray[1]);  // -1 because months are from 0 to 11
        var to   = new Date($endDateArray[2], parseInt($endDateArray[0])-1, $endDateArray[1]);
        var check = new Date($currentYear, parseInt($holidayDateArray[1])-1, $holidayDateArray[0]);

        // console.log("From "+from+" To "+to+" Check "+check);

        if(check > from && check < to){
            //if it falls on range increase days buy 1
            console.log("falls in range");
            console.log("From: "+from);
            console.log("To: "+to);
            console.log("Check: "+check);
            $holidaysWithinRange++;
        }else{
            //if it doesn't fall in range DO NOTHINg
            console.log("not in range");
            console.log("From: "+from);
            console.log("To: "+to);
            console.log("Check: "+check);
        }

        // if($holidayDate >= $startDateDnM && $holidayDate <= $endDateDnM){//if the 
        //   
        // }else{
        //   
        // }
        $k++;
    }
    //ADJUSTS FOR HOLIDAYS
    return $holidaysWithinRange;
  }

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
  $("#endDate").change(function(){
    $startDate = $('#startDate').val();
    $endDate  = $('#endDate').val();

    $.ajax({
      url:$validateStartDateUrl,
      data:{"startDate":$startDate,"endDate":$endDate},
      type:'POST',
      success:function($resp,status){
          $resp = JSON.parse($resp);
          $status = parseInt($resp['status']);
          if($status == 0){
            // $("#loginSuccessBox p").html($resp['message']);
            // hideLoginSuccessBox();
            // console.log($resp['message']);
            $startDate = $startDate.split("/");
            $endDate = $endDate.split("/");
            if($startDate.toString() === $endDate.toString()){

                // $("#endDate").prop("disabled", true);
                // $("#loginerrorBox p").html("Your start and end dates cannot be the same.");
                // hideLoginErrorBox();
                //ok
                var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
                var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
                computeLeaveDetails(a,b);
                $("#applyLeave").prop("disabled", false);
                console.log("Data appears fine ");
            }else{
                if($endDate[0] < $startDate[0]){//if end month is less than start month
                  //wrong throw error, except if end year is greater than start year
                  if($endDate[2] > $startDate[2]){//if end year is greator than start year
                    //ok
                    //get remaining days till end of year
                    var d = new Date($startDate[2], 11, 31);//end date of year
                    var c = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
                    $workingDaysTillEndYear = computeLeaveDetails23(c,d);
                    $workingDaysTillEndYear = JSON.parse($workingDaysTillEndYear);
                    $workingDaysTillEndYearQty = $workingDaysTillEndYear['workingDays'];
                    $workingDaysTillEndYearMsg = $workingDaysTillEndYear['message'];
                    //get remaining days till end of year

                    //get days between start of year and end date selected
                    var e = new Date($endDate[2], 00, 01);//first day of first month of end year
                    var f = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
                    $workingDaysFromYearStart = computeLeaveDetails23(e,f);
                    $workingDaysFromYearStart = JSON.parse($workingDaysFromYearStart);
                    $workingDaysFromYearStartQty = $workingDaysFromYearStart['workingDays'];
                    $workingDaysFromYearStartMsg = $workingDaysFromYearStart['message'];
                    //get days between start of year and end date selected

                    //add the two days to get total days applied
                    $totalDaysApplied = $workingDaysFromYearStartQty + $workingDaysTillEndYearQty;
                    //add the two days to get total days applied
                    $daysAvailable =  $("#daysAvaliable").val();
                    //check of days applied is more than days entitled
                    if($daysAvailable < $totalDaysApplied){
                        $("#startDate").val('');
                        $("#endDate").val('');
                        $("#endDate").prop("disabled", true);
                        $("#loginerrorBox p").html("You have "+$daysEntitled+" leave days only.");
                        hideLoginErrorBox(); 
                    }else{
                        console.log("End month is less than start month");
                        $("#daysToApply").val($totalDaysApplied);
                        $remaingDays = parseInt($("#daysAvaliable").val()) - parseInt($("#daysToApply").val());
                        $("#daysRemaining").val($remaingDays);

                        $returnDate = getDateFromStartDateLeaveDays($("#startDate").val(),$totalDaysApplied);
                        $returnDateArray = $returnDate.split("k");
                        $("#returnDate").val($returnDateArray[0]);
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
                  computeLeaveDetails(a,b);
                  $("#applyLeave").prop("disabled", false);
                  console.log("Data appears fine ");
                }
              }else if($endDate[0] > $startDate[0]){//if the end month is greater than start month
                //call function to compute end date and and number of days
                //okconsole.log("Error");
                var b = new Date($endDate[2], ($endDate[0]-1), $endDate[1]);
                var a = new Date($startDate[2], ($startDate[0]-1), $startDate[1]);
                computeLeaveDetails(a,b);
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

//   window.validateDates = function(startDate, endDate){
//     $.ajax({
//       url:$validateStartDateUrl,
//       data:{"startDate":$startDate,"endDate":$endDate},
//       type:'POST',
//       success:function(data,status){
//       }
//     });
// }
$("#applyLeave").click(function(e){
    e.preventDefault();
    $daysRemaining = $("#daysRemaining").val();
    $daysToApply = $("#daysToApply").val();


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
              // $("#startDate").val("");
              // $("#absenceReason").val("");
              // $("#daysAvaliable").val("");
              // $("#daysToApply").val("");
              // $("#daysRemaining").val("");
              // $("#returnDate").val("");
              // $("#endDate").val("");
              // $('#startDate').prop('disabled',true);
              // $('#endDate').prop('disabled',true);
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
});
//apply leave
});
