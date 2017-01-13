$(document).ready(function(){

  $.post($getEntitlementsURL,function(data, status){
    console.log(data);
    console.log(JSON.parse(data));

    $data = JSON.parse(data);

    $('#annualLeaveChart').hide();
    $('#sickLeaveChart').hide();
    // $('#offdaysChart').hide();
    $('#ParternityLeaveChart').hide();

    for($i=0; $i<$data.length; $i++){
      entitlementDescription = $data[$i]['entitlementCode'];
      $totalEntitlementForPayment = Math.ceil($data[$i]['totalEntitlementForPayment']);
      $entitlementCode = $data[$i]['entitlementCode'];
      //$entitlementForPayment = $data[$i]['entitlementForPayment'];
      $totalDaysUsed = $data[$i]['daysUsed'];
      $totalDaysAvailable = $data[$i]['daysAvaliable'];

      if($totalDaysUsed == null || $totalDaysUsed == undefined || $totalDaysUsed == ''){
        $daysRemaining = $totalEntitlementForPayment;
        $totalDaysUsed = 0;
      }else{
        $daysRemaining = $totalEntitlementForPayment  - $totalDaysUsed;
      }

      if(entitlementDescription == 'SICK'){    
          $("#sickLeaveChart h2").html("Total: "+$totalEntitlementForPayment+" days");
          $("#sickLeaveChart span").html(entitlementDescription+" Leave");
          $('#sickLeaveChart').show();

          if($totalDaysUsed == 0){
            Morris.Donut({
              element: 'graph_donut3',
              data: [
                {label: 'Available', value: $totalEntitlementForPayment}
              ],
              colors: ['#ff0000'],
              formatter: function (y) {
                return y + " days";
              },
              resize: true
            });
          }else{
            Morris.Donut({
              element: 'graph_donut3',
              data: [
                {label: 'Used', value: $totalDaysUsed },
                {label: 'Available', value: $daysRemaining}
              ],
              colors: ['#ff0000', '#FF4C4C'],
              formatter: function (y) {
                return y + " days";
              },
              resize: true
            });
          }
          
      }else if(entitlementDescription == 'ANNUAL'){  
          $("#annualLeaveChart h2").html("Total: "+$totalEntitlementForPayment+" days");
          $("#annualLeaveChart span").html(entitlementDescription+" Leave");
          $('#annualLeaveChart').show();

          if($totalDaysUsed == 0){
              Morris.Donut({
                element: 'graph_donut4',
                data: [
                  {label: 'Available', value: $daysRemaining}
                ],
                colors: ['#16701c'],
                formatter: function (y) {
                  return y + " days";
                },
                resize: true
              });
          }else{
              Morris.Donut({
                element: 'graph_donut4',
                data: [
                  {label: 'Used', value: $totalDaysUsed},
                  {label: 'Available', value: $daysRemaining}
                ],
                colors: ['#16701c', '#80ed88'],
                formatter: function (y) {
                  return y + " days";
                },
                resize: true
              });
          }
      }else if(entitlementDescription == 'PATERNITY' || entitlementDescription == 'MATERNITY'){
          $("#ParternityLeaveChart h2").html("Total: "+$totalEntitlementForPayment+" days");
          $("#ParternityLeaveChart span").html(entitlementDescription+" Leave");
          $("#ParternityLeaveChart").show();

          if($totalDaysUsed == 0){
              Morris.Donut({
                element: 'graph_donut',
                data: [
                  {label: 'Available', value: $daysRemaining}
                ],
                colors: ['#16701c'],
                formatter: function (y) {
                  return y + " days";
                },
                resize: true
              });
          }else{
              Morris.Donut({
                element: 'graph_donut',
                data: [
                  {label: 'Used', value: $totalDaysUsed},
                  {label: 'Available', value: $daysRemaining}
                ],
                colors: ['#16701c', '#80ed88'],
                formatter: function (y) {
                  return y + " days";
                },
                resize: true
              });
          }
      }else{
          console.log("not sick");
      }          
    }

    //get all entitlements
      //PersonID
      //LeaveGroupCode
    //get days used and available for each entitlement


  });
});