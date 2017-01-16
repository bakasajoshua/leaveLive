$(document).ready(function(){
        $('#h1').daterangepicker({
          singleDatePicker: true,
          calender_style: "picker_4",
          // minDate: new Date(),
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

            // if((date.day() == 0 )|| (date.day() == 6)||(date.format('MM-DD') === '01-01') || (date.format('MM-DD') === '01-02') || (date.format('MM-DD') === '12-25')|| (date.format('MM-DD') === '12-12') || (date.format('MM-DD') === '12-26') || (date.format('MM-DD') === '12-31')|| (date.format('MM-DD') === '05-01')|| (date.format('MM-DD') === '06-01') || (date.format('MM-DD') === '10-20')){
            //   // || (date.format('MM-DD') === '12-27') || (date.format('MM-DD') === '12-28')|| (date.format('MM-DD') === '12-29')|| (date.format('MM-DD') === '12-30') || 
            //   return true; 
            // }else{
            //   return false;
            // }
          },
        }, function(start, end, label) {
          //console.log(start.toISOString(), end.toISOString(), label);
        });        

        $("#InsertHoliday").click(function(){
            $holidayDate = $("#h1").val();
            $holidayName = $("#h1name").val();

            if($holidayDate == '' || $holidayDate == null || $holidayDate == undefined || $holidayName == null || $holidayName == '' || $holidayName == undefined){
                console.log("Provide values");
            }else{
                $holidayDate = $("#insertHolidayForm").serializeArray();
                $.ajax({
                    url:$insertHolidayURL,
                    data:{'holidays':$holidayDate},
                    type:'POST',
                    success:function($resp,status){
                        console.log($resp);
                        if($resp === "Successfully inserted"){
                            location.reload();
                        }else{
                            console.log("Error inserting");                            
                        }
                    }
                });
            }
        });
});
