<div class="login_wrapper">
    <div id="register" class="registration_form">
        <section class="login_content">
            <form id="registerForm" style="color:#fff; padding:0px 1em 0 1em; ">
                <center>
                  <h1 style="background-color:#f7941d; width:6em; border-radius:3.2em; padding:2em .5em 2em .5em;">Create Account</h1>
                </center>

                <div class="alert alert-danger" role="alert" id="regiError">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    <p></p>
                </div>

                <div class="alert alert-success" role="alert" id="regiSuccess">
                    <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                    <span class="sr-only">Success:</span>
                    <p></p>
                </div>
                <h2>REGISTER</h2>
                <div>
                    <input type="text" class="form-control" placeholder="Username" id="username" name="user" required="" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Employee ID (KP/000)" id="navCode" name="navCode" required="" style="text-transform:uppercase"/>
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="Password" required="" name="pass" id="pass" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="Confirm Password" required="" name="pass1" id="pass1" />
                </div>
                <div>
                  <input type="button" name="createUser" id="createUser" value="Register" style="background-color:#f7941d; width:5em; border-radius:1em; padding:.1em .1em .1em .1em;">
                </div>

                <div class="clearfix"></div>

                <div class="separator" style="color:#FFF;">
                    <p class="change_link">
                        <a href="<?php echo base_url("Login"); ?>" class="to_register" style="color:#FFF;"> Log in </a>
                    </p>

                    <div class="clearfix"></div>
                    <br />

                    <div>
                        <!-- <img src="<?php //echo base_url('assets/images/clientSpecific/logo.png'); ?>" >  -->
                        <p>Powered By DataposIT ©<?php echo date('Y'); ?></p>
                    </div>
                </div>
            </form>
            <div style="background-color:#f7941d; height:5px; width:100%;"></div>    
        </section>
    </div>
</div>
<!-- jQuery -->
    <script src="<?php echo base_url('assets/jquery/dist/jquery.min.js'); ?>"></script>

    <!-- PNotify -->
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.js'); ?>"></script>
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.buttons.js'); ?>"></script>
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.nonblock.js'); ?>"></script>
  <script>
  $(document).ready(function(){
    $("#regiError").hide();
    $("#regiSuccess").hide();

    //hide registration notification boxes
    window.hideRegisterErrorBox = function(){
      $("#regiError").show();
      setTimeout(function(){
        $("#regiError").hide();
      },10000);
    }

    window.hideRegisterSuccessBox = function(){
      $("#regiSuccess").show();
      setTimeout(function(){
        $("#regiSuccess").hide();
      },10000);
    }
    //hide registration notification boxes
    
    // new PNotify({
    //   title: "STUCK?",
    //   type: "info",
    //   text: "Send an email to: oscar.gichohi@dataposit.co.ke.",
    //   addclass: 'dark',
    //   styling: 'bootstrap3',
    //   hide: true
    // });

    $("#pass").focus(function(){
        new PNotify({
            title: "Password Policy",
            type: "info",
            text: "1) At least 8 characters <br/> 2) At least 1 digit <br/> 3) At least 1 capital letter <br/> 4) At least 2 small letter",
            addclass: 'dark',
            styling: 'bootstrap3',
            hide: true
        });
    });

    //REGISTER
    $("#createUser").click(function(e){
      e.preventDefault();
      
      $username = $("#username").val().trim();
      $pass = $("#pass").val().trim();
      $pass1 = $("#pass1").val().trim();
      $navcode = $("#navCode").val().trim();

      if($username == null || $username == undefined || $username == ''){
        $("#regiError p").html("Provide a username.");
        hideRegisterErrorBox();
      }else if($pass == null || $pass == undefined || $pass == ''){
        $("#regiError p").html("Provide a password.");
        hideRegisterErrorBox();
      }else if($pass != $pass1){
        $("#regiError p").html("Your passwords do not match.");
        hideRegisterErrorBox();
      }else if($navcode == null || $navcode == undefined || $navcode == ''){
        $("#regiError p").html("Provide your employee ID");
        hideRegisterErrorBox();
      }else{
        $formDetails = $("#registerForm").serializeArray();
        $regiUrl = "<?php echo base_url('login/register/registerUser') ?>";

         passowrdCheck  = validatePassword($pass);
        if(passowrdCheck == true){
          // console.log("password meets standards");
          $(".overlay").css("display","block");
          $.post($regiUrl,$formDetails,function(data, status){
              console.log("Data: " + data + "\nStatus: " + status);

              $resp = JSON.parse(data);
              $(".overlay").css("display","none");
              if($resp['status'] == 1){
                $("#pass").val("");
                $("#pass1").val("");
                $("#username").val("");
                $("#navCode").val("");

                $("#regiError p").html($resp['message']);
                hideRegisterErrorBox();
              }else if($resp['status'] == 0){
                $("#pass").val("");
                $("#pass1").val("");
                $("#username").val("");
                $("#navCode").val("");

                $("#regiError p").html($resp['message']);
                hideRegisterErrorBox();
              }else if($resp['status'] == 2){
                $("#pass").val("");
                $("#pass1").val("");
                $("#username").val("");
                $("#navCode").val("");

                $("#regiError p").html($resp['message']);
                hideRegisterErrorBox();
              }else{
                $("#regiSuccess p").html($resp['message']);
                $fisttimeloginCode = $resp['fisttimeloginCode'];
                $resp = JSON.parse(data);
                $email = $resp['email'];
                hideRegisterSuccessBox();
                setTimeout(function(){
                  $url = "<?php echo base_url('Login') ?>";
                  window.location = $url;
                },10000);
              }               
          });
        }else{          
          $("#regiError p").html("The password doesn't meet required complexity.<br/> 1.At least 8 characters. <br/> 2.At least 1 digit. <br/> 3.At least 1 capital letter. <br/> 4.At least 1 small letter");
          hideRegisterErrorBox();
        }

        // if($pass == $pass1){
        //   $(".overlay").css("display","block");
        //   $.post($regiUrl,$formDetails,function(data, status){
        //          console.log("Data: " + data + "\nStatus: " + status);

        //         $resp = JSON.parse(data);
        //         $(".overlay").css("display","none");
        //         if($resp['status'] == 1){
        //           $("#pass").val("");
        //           $("#pass1").val("");
        //           $("#username").val("");
        //           $("#navCode").val("");

        //           $("#regiError p").html($resp['message']);
        //           hideRegisterErrorBox();
        //         }else if($resp['status'] == 0){
        //           $("#pass").val("");
        //           $("#pass1").val("");
        //           $("#username").val("");
        //           $("#navCode").val("");

        //           $("#regiError p").html($resp['message']);
        //           hideRegisterErrorBox();
        //         }else if($resp['status'] == 2){
        //           $("#pass").val("");
        //           $("#pass1").val("");
        //           $("#username").val("");
        //           $("#navCode").val("");

        //           $("#regiError p").html($resp['message']);
        //           hideRegisterErrorBox();
        //         }else{
        //           $("#regiSuccess p").html($resp['message']);
        //           $fisttimeloginCode = $resp['fisttimeloginCode'];
        //           $resp = JSON.parse(data);
        //           $email = $resp['email'];
        //           hideRegisterSuccessBox();
                                    
        //           // $sendResetPassURL = "<?php echo base_url('Login/register/sendregisteremail')?>";
        //           // //send the tempPass to the user's email
        //           // $.post($sendResetPassURL,{"fisttimeloginCode":$fisttimeloginCode,"email":$email},function(data, status){
        //           //     console.log("Data: " + data + "\nStatus: " + status);
        //           //     $resp = JSON.parse(data);
        //           //     $("#regiSuccess p").html($resp['message']+". Proceed to log in.");
        //           //     hideLoginSuccessBox();
        //           // });

        //           setTimeout(function(){
        //             $url = "<?php echo base_url('Login') ?>";
        //             window.location = $url;
        //           },10000);
        //         }               
        //   });
        // }else{
        //   $("#regiError p").html("Passwords don't not match.");
        //   hideRegisterErrorBox();
        // }
      }
    });
    //REGISTER
  });
  </script>    