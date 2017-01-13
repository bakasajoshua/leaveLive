<div class="login_wrapper">
    <div class="animate form login_form">
        <section class="login_content">
            <form id="loginForm" style="color:#fff; padding:0px 1em 0 1em; ">
                <center>
                    <h1 style="background-color:#f7941d; width:6em; border-radius:3em; padding:2em .5em 2em .5em;">Change Password</h1>
                </center>
                <h2> <small style="color:#FFF;">Provide all the fields to reset your password</small></h2>

                <div class="alert alert-success" role="alert" id="loginSuccess">
                    <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                    <span class="sr-only">Success:</span>
                    <p></p>
                </div>
                <div class="alert alert-danger" role="alert" id="loginerror">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    <p>Password change has been detected.</p>
                </div>

                <?php
                    if($_GET['cp'] == 1){
                ?>
                <div class="alert alert-success" role="alert" id="loginSuccessBox">
                    <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                    <span class="sr-only">Success:</span>
                    <p></p>
                </div>
                <script>
                    setTimeout(function(){
                        $("#loginSuccessBox").hide();                                
                    },5000);
                </script>
                <?php
                    }else if($_GET['cp'] == 2){
                ?>
                    <div class="alert alert-danger" role="alert" id="loginerrorBox">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span>
                        <p>Password change has been detected.</p>
                    </div>
                    <script>
                        setTimeout(function(){
                            $("#loginerrorBox").hide();                                
                        },5000);
                    </script>
                <?php
                    }
                ?>
                <div>
                    <input type="text" class="form-control" placeholder="Employee ID (KP/000)" required="" id="empNo" name="empNo" style="text-transform:uppercase"" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Reset Code" required="" id="resetCode" name="resetCode" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="New Password" required="" id="npass" name="npass" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="Confirm New Password" required="" id="cnpass" name="cnpass" />
                </div>
                <div>
                  <input  type="button" id="changePassword" value="Reset" style="background-color:#f7941d; width:5em; border-radius:1em; padding:.1em .1em .1em .1em;">
                </div>                        

                <div class="clearfix"></div>

                <div class="separator" style="color:#FFF;">
                    <p class="change_link">
                        <a href="<?php echo base_url('Login'); ?>" class="to_register" style="color:#fff;"> Login </a>
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
        $("#loginSuccessBox").hide();
        $("#loginSuccess").hide();
        $("#loginerror").hide();

        // new PNotify({
        //   title: "STUCK?",
        //   type: "info",
        //   text: "Send an email to: oscar.gichohi@dataposit.co.ke.",
        //   addclass: 'dark',
        //   styling: 'bootstrap3',
        //   hide: true
        // });

        $("#npass").focus(function(){
            new PNotify({
                title: "Password Policy",
                type: "info",
                text: "1) At least 8 characters <br/> 2) At least 1 digit <br/> 3) At least 1 capital letter <br/> 4) At least 2 small letter",
                addclass: 'dark',
                styling: 'bootstrap3',
                hide: true
            });
        });

        window.hideRegisterErrorBox = function(){
          $("#loginerror").show();
          setTimeout(function(){
            $("#loginerror").hide();
          },10000);
        }

        $("#changePassword").click(function(){
            $changePassUrl = "<?php echo base_url('Login/changepass/updatepass') ?>";
            // $changeFormDetails = $("#changeForm").serializeArray();
            $resetCode = $("#resetCode").val().trim();
            $empNo = $("#empNo").val().trim();
            $pass = $("#npass").val().trim();
            $cnpass = $("#cnpass").val().trim();

            if($pass == $cnpass){
                $passwordCheck = validatePassword($pass);
                if($passwordCheck == true){
                    $.post($changePassUrl,{"resetCode":$resetCode,"empNo":$empNo,"pass":$pass},function(data, status){
                        console.log("Data: " + data + "\nStatus: " + status);
                        $resp = JSON.parse(data);
                        console.log($resp);
                        
                        $status = $resp['status'];
                        $message = $resp['message'];
                        if($status == 0){
                            $("#loginSuccess p").html($message);
                            $("#loginSuccess").show();
                           setTimeout(function(){
                                $("#loginSuccess").hide();
                           },10000);
                        }else{
                            $("#loginerror p").html($message);
                            $("#loginerror").show();
                            setTimeout(function(){
                                $("#loginerror").hide();
                            },10000);
                        }
                    });     
                }else{
                    $("#loginerror p").html("The password doesn't meet required complexity.<br/> 1.At least 8 characters. <br/> 2.At least 1 digit. <br/> 3.At least 1 capital letter. <br/> 4.At least 1 small letter");
                    hideRegisterErrorBox();
                    console.log("run");
                }
            }else{
                $("#loginerrorBox").show();
                $("#loginerrorBox p").html("Your passwords don't match");
                setTimeout(function(){
                    $("#loginerrorBox").hide();
                },10000);
            }
        });
  });
  </script>