<div class="login_wrapper">
    <div class="animate form login_form">
        <section class="login_content">
            <form id="loginForm" style="color:#fff; padding:0px 1em 0 1em; ">
                <center>
                   <h1 style="background-color:#f7941d; width:6em; border-radius:3em; padding:2em .5em 2em .5em;">Reset Password</h1>
                </center>
                <h2> <small style="color:#FFF;">Provide all the fields to reset your password</small></h2>
                <div class="alert alert-danger" role="alert" id="loginerrorBox">
                    <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span class="sr-only">Error:</span>
                    <p></p>
                </div>

                <div class="alert alert-success" role="alert" id="loginSuccessBox">
                    <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                    <span class="sr-only">Success:</span>
                    <p></p>
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Employee ID (KP/000)" required="" id="empNo" name="empNo" style="text-transform:uppercase" />
                </div>
                <!-- <div>
                    <input id="user" type="text" class="form-control" placeholder="Date of Birth" required=""  name="Username" />
                    <input id="birthday" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
                </div> -->
                <!-- <div>
                    <input type="email" class="form-control" placeholder="Email" required="" id="email" name="email" />
                </div> -->
                <div>
                  <input  type="button" id="resetPassword" value="Reset" style="background-color:#f7941d; width:5em; border-radius:1em; padding:.1em .1em .1em .1em;">
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
  <!-- DateJS -->
    <script src="<?php echo base_url('assets/DateJS/build/date.js'); ?>"></script>
    <!-- bootstrap-daterangepicker -->
    <script src="<?php echo base_url('assets/js/moment/moment.min.js');?> "></script>
    <script src="<?php echo base_url('assets/js/datepicker/daterangepicker.js');?> "></script>
    <!-- PNotify -->
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.js'); ?>"></script>
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.buttons.js'); ?>"></script>
    <script src="<?php echo base_url('assets/pnotify/dist/pnotify.nonblock.js'); ?>"></script>
  <script>
  	$(document).ready(function(){
        $("#loginerrorBox").hide();
        $("#loginSuccessBox").hide();
        // new PNotify({
        //   title: "STUCK?",
        //   type: "info",
        //   text: "Send an email to: oscar.gichohi@dataposit.co.ke.",
        //   addclass: 'dark',
        //   styling: 'bootstrap3',
        //   hide: true
        // });
        
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
          },4000);
        }

        $("#resetPassword").click(function(){
            // $email = $("#email").val().trim();
            $empNo = $("#empNo").val().trim();
            // $user = $("#user").val().trim();
            if($empNo == '' || $empNo == null || $empNo == undefined){
                $("#loginerrorBox p").html("Provide values for all fields.");
                hideLoginErrorBox();
            }else{
                $(".overlay").css("display","block");
                $resetPassURL = "<?php echo base_url('Login/forgotpass/reset')?>";
                $.post($resetPassURL,{"empNo":$empNo},function(data, status){
                    console.log(data);
                    $resp = JSON.parse(data);
                    console.log($resp);
                    if($resp['status'] == 0){
                        $("#loginerrorBox p").html($resp['message']);
                        hideLoginErrorBox();
                        $(".overlay").css("display","none");
                    }else if($resp['status'] == 1){
                        $("#loginSuccessBox p").html($resp['message']);
                        hideLoginSuccessBox();
                        $(".overlay").css("display","none");
                    }else{

                    }
                });

            }
        })
  	});
  </script>