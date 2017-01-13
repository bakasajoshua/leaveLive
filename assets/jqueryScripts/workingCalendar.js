$(document).ready(function(){
	window.getholidayRowID = function($rowID){
		$holidayName = $('#internalHolidaysTable tr:eq('+$rowID+') td:eq(1)').text();
		$holidayDate = $('#internalHolidaysTable tr:eq('+$rowID+') td:eq(2)').text();

		$("#holidayDate").html($holidayDate);
		$("#holidayName").html($holidayName);
		$("#masterHolidayName").val($holidayName);
	}	

	$("#deleteHoliday").click(function(){
		$holidayName = $("#masterHolidayName").val();
		console.log($holidayName);
		 $.ajax({
            url:$deleteHolidayURL,
            data:{'holidayName':$holidayName},
            type:'POST',
            success:function($resp,status){
                console.log($resp);
            }
        });
	});

	$("#updateWorkCalendar").click(function(){
		$.ajax({
            url:$updatePublicHolidayURL,
            data:{},
            type:'POST',
            success:function($resp,status){
                console.log($resp);
                if($resp === "Updated"){
                	console.log("Successfully updated");
                }else{
                	console.log("Error Updating");
                }
            }
        });
	});
});
