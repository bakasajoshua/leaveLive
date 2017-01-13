$(document).ready(function(){
  //email editor
    $("#txtEditor").Editor();
    $("#txtEditor2").Editor();

    //save a template
    $("#saveEmailTemplate").click(function(){
        $emailTemplate = $("#txtEditor").Editor("getText");
        $emailFooter = $("#txtEditor2").Editor("getText");
        $newSubject = $("#newSubject").val();        

        if($emailTemplate == null || $emailTemplate == "" || $emailTemplate == undefined || $emailFooter == null || $emailFooter == "" || $emailFooter == undefined || 
          $newSubject == null || $newSubject == "" || $newSubject == undefined){
          $("#loginerrorBox p").html("Please provide all the email component detalis.");
          hideLoginErrorBox();
        }else{
          $confirm = confirm("Are you sure");
          if($confirm == true){
            $emailTemplate = JSON.stringify($emailTemplate);
            $emailID = $("#emailID").val();
            
            $.post($updateSpecificEmailURL,{'emailID':$emailID,"emailContent":$emailTemplate,"newSubject":$newSubject,"emailFooter":$emailFooter},function(data, status){
              // console.log(data);
              if(data == "Updated"){
                window.location = $refreshEditEmailURL+"/"+$emailID+"?resp=1";
              }else{
                window.location = $refreshEditEmailURL+"/"+$emailID+"?resp=2";
              }
            });
          }
        }
    });
    //save a template

    //runs when you hit the edit button on adminDash
    $("#EditEmailTemplate").click(function(){
      $emailID = $("#emailIDModal").val();
      // $.post($getSpecificEmailURL,{'emailID':$emailID},function(data, status){
      //   console.log(data);
      //   $data = JSON.parse(data);
      //   $emailID = $data[0]['emailID'];
      //   $emailContent = $data[0]['emailContent'];
      //   $pageUsedAt = $data[0]['pageUsedAt'];
      //   $reasonForSending = $data[0]['reasonForSending'];
      //   $subject = $data[0]['subject'];
      // });
      window.location = $editTemplateURL+"/"+$emailID;//redirects to edit page and gets the email details
    });
    //runs when you hit the edit button on adminDash

    window.getEmailID = function($emailID){
      $.post($getSpecificEmailForDisplayURL,{'emailID':$emailID},function(data, status){
          // console.log(data);
          $data = JSON.parse(data);
          $("#emailSubjectModal").val($data[0]['subject']);
          $("#emailContentModal").html($data[0]['emailContent']);
          $("#reasonForSendingModal").val($data[0]['reasonForSending']);
          $("#emailFooterModal").html($data[0]['emailFooter']);
      });

      $("#emailIDModal").val($emailID);
    }
    //email editor      
});
