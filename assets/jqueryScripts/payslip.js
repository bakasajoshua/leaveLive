$(document).ready(function(){
  //get payslip 
      //hide login notification boxes
      $("#loginerrorBox").hide();
      $("#loginSuccessBox").hide();

      window.hideLoginErrorBox = function(){
        $("#loginerrorBox").show();
        setTimeout(function(){
          $("#loginerrorBox").hide();
        },4000);
      }

      window.hideLoginSuccessBox = function(){
        $("#loginSuccessBox").show();
        setTimeout(function(){
          $("#loginSuccessBox").hide();
        },10000);
      }
      //hide login notification boxes

      $("#emplyeepayslipDetails").hide();
      $("#payslipStartdate").change(function(e){
        e.preventDefault();
        
        $periodDate = $("#payslipStartdate").val();
        $("#pdfPayslipDate").val($periodDate);
        $(".overlay").css("display","block");

        if($periodDate === "Select a Period"){
          $("#loginerrorBox p").html("Invalid Period Selection");
          hideLoginErrorBox();
          $(".overlay").css("display","none");
        }else{
          $.post($getpayslipUrl,{"startDate":$periodDate},function(data, status){
            $data = JSON.parse(data);
            // console.log($data);
            if($data.length == 0){
              //payslip not generateed
              // console.log("Payslip not generated");
              $("#loginerrorBox p").html("Payslip has not been generated");
              hideLoginErrorBox();
            }else{
              $paysliptable = "<table class='table table-striped'><thead>";
              $paysliptable += "<tr>";
              $paysliptable += "<th></th>";
              $paysliptable += "<th>Balance</th>";
              $paysliptable += "<th>Amount</th>";
              $paysliptable += "</tr></thead><tbody>";

              $.each($data, function (index, value) {
                // console.log(value);
                $amount = value['Amount1'];
                $amount  = (parseInt($amount)+ "").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                  $paysliptable += "<tr>";
                  $paysliptable += "<td></td>";
                  $paysliptable += "<td style='text-align:left;'>"+value['Description1']+"</td>";
                  if($amount == 0){
                      $paysliptable += "<td></td>";
                  }else{  
                    $paysliptable += "<td style='text-align:right;'>"+$amount+" .00</td>";
                  }
                  $paysliptable += "</tr>";

                  $periodName1 = value['Period Name1'];
                  $title = value['Title1'];
                  $PIN1 = value['PIN1'];
                  $Employee1 = value['Employee1'];
                  $NHIF1 = value['NHIF1'];
                  $NSSF1 = value['NSSF1'];
                  $bank1 = value['Bank1'];
                  $branch1 = value['Branch1'];
                  $Account1 = value['Account1'];
              });
              $paysliptable += "</tbody></table>";
              $("#paySlipTable2").html("");
              $("#paySlipTable2").html($paysliptable);

              $("#period").html("Period: "+$periodName1);
              $("#employeeName").html("Employee Name: "+$empName);
              $("#empoyeeTitle").html("Job Title: "+$title);
              $("#employeeKRA").html("KRA PIN: "+$PIN1);
              $("#employeeID").html("Emp ID. "+$Employee1);
              $("#employeeNHIF").html("NHIF: "+$NHIF1);
              $("#employeeNSSF").html("NSSF: "+$NSSF1);
              $("#employeeBank").html("Bank: "+$bank1);
              $("#employeeBranch").html("Branch "+$branch1);
              $("#employeeAccNo").html("Account No. "+$Account1);
              $("#emplyeepayslipDetails").show();
          //     $("#payslipDetails").show();
            }
            $(".overlay").css("display","none");
          //   // console.log($paysliptable);
          });
        }
      });
      //get payslip
});