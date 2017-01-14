$(document).ready(function(){
	window.getholidayRowID = function($rowID){
		$holidayName = $('#internalHolidaysTable tr:eq('+$rowID+') td:eq(1)').text();
		$holidayDate = $('#internalHolidaysTable tr:eq('+$rowID+') td:eq(2)').text();

		$("#holidayDate").html($holidayDate);
		$("#holidayName").html($holidayName);
		$("#masterHolidayName").val($holidayName);
	}	

	$("#deleteHoliday").click(function(){
        var r = confirm("Are you sure you want to delete this holiday from the calendar?");
        if (r == true) {
            $.ajax({
                url:$deleteHolidayURL,
                data:{'holidayName':$holidayName},
                type:'POST',
                success:function($resp,status){
                    if($resp == "Deleted"){
                        location.reload();
                    }else{
                        alert("Error deleting");
                    }
                }
            });
        }
	});

	$("#updateWorkCalendar").click(function(){
        var d = new Date();
        var n = d.getFullYear();
        var newYear = prompt("Provide new year", n);

        if (newYear != null) {
            $.ajax({
                url:$updatePublicHolidayURL,
                data:{'newYear':newYear},
                type:'POST',
                success:function($resp,status){
                    console.log($resp);
                    if($resp === "Updated"){
                        console.log("Successfully updated");
                        location.reload();
                    }else{
                        console.log("Error Updating");
                    }
                }
            });
        }
	});
});
