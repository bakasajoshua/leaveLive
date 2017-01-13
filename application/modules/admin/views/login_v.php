<div class="login_wrapper">
    <div class="animate form login_form">
        <section class="login_content">
            <form id="loginForm" style="color:#fff;padding:0px 1em 0 1em; ">
                <center>
                  <h1 style="background-color:#f7941d; width:5em; border-radius:3em; padding:2em 2em 2em .5em;">Welcome</h1>
                </center>
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
                <h2>Administrator Login</h2>
                <div>
                    <input type="text" class="form-control" placeholder="Username" required="" id="usernameLogin" name="userLogin" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Employee ID" required="" id="navCodeLogin" name="navCodeLogin" style="text-transform:uppercase" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="Password" required="" id="passwordLogin" name="passLogin" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="First Time Login Code" required="" id="ftlcode" name="ftlcode" />
                </div>
                <div>
                  <input  type="button" id="loginAdmin" value="Login" style="background-color:#f7941d; width:5em; border-radius:1em; padding:.1em .1em .1em .1em;">
                </div>
                <div>
                    <a href="<?php echo base_url('Login'); ?>" style="color:#fff;">Login to employee portal </a>
                </div>

                <div class="clearfix"></div>

                <div class="separator">
                    <!-- <p class="change_link">New User?
                        <a href="<?php //echo base_url('Login/register'); ?>" class="to_register" style="color:#fff;"> Create Account </a>
                    </p> -->

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
    $("#loginerrorBox").hide();
    $("#loginSuccessBox").hide();
    new PNotify({
      title: "STUCK?",
      type: "info",
      text: "Send an email to: oscar.gichohi@dataposit.co.ke.",
      addclass: 'dark',
      styling: 'bootstrap3',
      hide: true
    });

    $("#ftlcode").hide();

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

    //hide login notification boxes
    window.hideLoginErrorBox = function(){
      $("#loginerrorBox").show();
      setTimeout(function(){
        $("#loginerrorBox").hide();
      },10000);
    }

    window.hideLoginSuccessBox = function(){
      $("#loginSuccessBox").show();
      setTimeout(function(){
        $("#loginSuccessBox").hide();
      },10000);
    }
    //hide login notification boxes


    //loginAdmin
    $("#loginAdmin").click(function(e){
        e.preventDefault();
        $personID = $("#navCodeLogin").val().trim();
        $pass = $("#passwordLogin").val().trim();

        if($personID == null || $personID == undefined || $personID == ''){
            $("#loginerrorBox p").html("Provide your employee ID");
            hideLoginErrorBox();
        }else if($pass == null || $pass == undefined || $pass == ''){
            $("#loginerrorBox p").html("Provide a password");
            hideLoginErrorBox();
        }else{
            //log user in
            $loginDetails = $("#loginForm").serializeArray();
            $loginUrl = "<?php echo base_url('admin/loginAdmin/loginUser') ?>";
            $(".overlay").css("display","block");
            $.post($loginUrl,$loginDetails,function(data, status){
                console.log("Data: " + data + "\nStatus: " + status);
                $resp = JSON.parse(data);
                $status = $resp['status'];
                $(".overlay").css("display","none");

                if($status == 1){
                    $("#loginerrorBox").html($resp['message']);
                    hideLoginErrorBox();
                }else if($status == 0){
                    $("#loginSuccessBox").html($resp['message']);                 

                    console.log("redirect");
                    $url = "<?php echo base_url('admin/adminDash') ?>";
                    window.location = $url;
                }                
            });
          }
    });
    //loginAdmin
  });
  </script>