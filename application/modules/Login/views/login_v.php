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
                <h2>LOGIN</h2>
                <div>
                    <input type="text" class="form-control" placeholder="Username" required="" id="usernameLogin" name="userLogin" />
                </div>
                <div>
                    <input type="text" class="form-control" placeholder="Employee ID (KP/000)" required="" id="navCodeLogin" name="navCodeLogin" style="text-transform:uppercase" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="Password" required="" id="passwordLogin" name="passLogin" />
                </div>
                <div>
                    <input type="password" class="form-control" placeholder="First Time Login Code" required="" id="ftlcode" name="ftlcode" />
                </div>
                <div>
                  <input  type="button" id="loginUser" value="Login" style="background-color:#f7941d; width:5em; border-radius:1em; padding:.1em .1em .1em .1em;">
                </div>
                <div>
                    <a href="<?php echo base_url('Login/forgotpass'); ?>" style="color:#fff;">Forgot your password?</a>
                </div>
                <div>
                    <a href="<?php echo base_url('admin/LoginAdmin'); ?>" style="color:#fff;">Log in as administrator?</a>
                </div>

                <div class="clearfix"></div>

                <div class="separator">
                    <p class="change_link">
                        <a href="<?php echo base_url('Login/register'); ?>" class="to_register" style="color:#fff;"> Create Account </a>
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
  <?php
    $masterData = $this->session->userdata('masterData');
    $essSupportEmail = $masterData[1]['dataValue'];
  ?>
  $(document).ready(function(){
    $("#regiError").hide();
    $("#regiSuccess").hide();
    $("#loginerrorBox").hide();
    $("#loginSuccessBox").hide();

    $("#passwordLogin").focus(function(){
        new PNotify({
            title: "Password Policy",
            type: "info",
            text: "1) At least 8 characters <br/> 2) At least 1 digit <br/> 3) At least 1 capital letter <br/> 4) At least 2 small letter",
            addclass: 'dark',
            styling: 'bootstrap3',
            hide: true
        });
    });

    $("#ftlcode").hide();

    
    //hide login notification boxes
    window.hideLoginErrorBox = function(){
      $("#loginerrorBox").show();
      setTimeout(function(){
        $("#loginerrorBox").hide();
      },20000);
    }

    window.hideLoginSuccessBox = function(){
      $("#loginSuccessBox").show();
      setTimeout(function(){
        $("#loginSuccessBox").hide();
      },10000);
    }
    //hide login notification boxes



    //LOGIN
    $("#loginUser").click(function(e){
      e.preventDefault();
      $user = $("#usernameLogin").val().trim();
      $loginPassword = $("#passwordLogin").val().trim();
      $navCodeLogin = $("#navCodeLogin").val().trim();

      if($user == null || $user == undefined || $user == ''){
        $("#loginerrorBox p").html("Provide a username");
        hideLoginErrorBox();
      }else if($loginPassword == null  || $loginPassword == undefined || $loginPassword == ''){
        $("#loginerrorBox p").html("Provide a password");
        hideLoginErrorBox();
      }else if($navCodeLogin == null  || $navCodeLogin == undefined || $navCodeLogin == ''){
        $("#loginerrorBox p").html("Provide an employee ID");
        hideLoginErrorBox();
      }else{
        //log user in
        $loginDetails = $("#loginForm").serializeArray();
        $loginUrl = "<?php echo base_url('Login/loginUser') ?>";
        $(".overlay").css("display","block");
        $ftlcode = $("#ftlcode").val().trim();
        if($ftlcode == null || $ftlcode == '' || $ftlcode == undefined){
          $.post($loginUrl,$loginDetails,function(data, status){
                console.log("Data: " + data + "\nStatus: " + status);
                
                $resp = JSON.parse(data);
                $status = $resp['status'];
                $(".overlay").css("display","none");
                if($status == 1){
                  $("#usernameLogin").val("");
                  $("#navCodeLogin").val("");
                  $("#passwordLogin").val("");
                  $("#loginerrorBox p").html($resp['message']);
                  hideLoginErrorBox();
                }else if($status == 0){
                  $("#loginSuccessBox p").html($resp['message']);                 

                  console.log("redirect");
                  $url = "<?php echo base_url('Home') ?>";
                  window.location = $url;
                }else if($status == 2){
                  $url = "<?php echo base_url('Login/changepass?cp=2') ?>";
                  window.location = $url;
                }else if($status == 3){
                  $("#ftlcode").show();
                  $("#loginerrorBox p").html("Provide the first time login code sent to your email address during registration");
                  hideLoginErrorBox();
                }else{}
          });
        }else{
          $loginUrl = "<?php echo base_url('Login/firstTimeLogin') ?>";
          $loginDetails = $("#loginForm").serializeArray();
          $.post($loginUrl,$loginDetails,function(data, status){
                console.log("Data: " + data + "\nStatus: " + status);
                
                $resp = JSON.parse(data);
                $status = $resp['status'];
                $(".overlay").css("display","none");
                if($status == 1){
                  // $("#usernameLogin").val("");
                  // $("#navCodeLogin").val("");
                  // $("#passwordLogin").val("");
                  $("#loginerrorBox p").html($resp['message']);
                  hideLoginErrorBox();
                }else if($status == 0){
                  $("#loginSuccessBox p").html($resp['message']);                 

                  console.log("redirect");
                  $url = "<?php echo base_url('Home') ?>";
                  window.location = $url;
                }else if($status == 2){
                  $url = "<?php echo base_url('Login/changepass?cp=2') ?>";
                  window.location = $url;
                }else if($status == 3){
                  $("#ftlcode").show();
                  $("#loginerrorBox p").html("Provide the first time login code sent to your email address during registration");
                  hideLoginErrorBox();
                }else{}
          });
        }

      }
    })
    //LOGIN
  });
  </script>