<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>ESS|KIPPRA</title>

        <!-- Bootstrap -->
        <link href="<?php echo base_url('assets/bootstrap/dist/css/bootstrap.min.css'); ?>" rel="stylesheet">
        <!-- Font Awesome -->
        <link href="<?php echo base_url('assets/font-awesome/css/font-awesome.min.css'); ?>" rel="stylesheet">
        <!-- NProgress -->
        <link href="<?php echo base_url('assets/nprogress/nprogress.css'); ?>" rel="stylesheet">
        <!-- Animate.css -->
        <link href="https://colorlib.com/polygon/gentelella/css/animate.min.css" rel="stylesheet">

        <!-- Custom Theme Style -->
        <link href="<?php echo base_url('assets/build/css/custom.css'); ?>" rel="stylesheet">
        <!-- PNotify -->
        <link href="<?php echo base_url('assets/pnotify/dist/pnotify.css'); ?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/pnotify/dist/pnotify.buttons.css'); ?>" rel="stylesheet">
        <link href="<?php echo base_url('assets/pnotify/dist/pnotify.nonblock.css'); ?>" rel="stylesheet">
        <style>
        .overlay{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 10;
          background-color: rgba(0,0,0,0.5); /*dim the background*/
        }
    </style>
    </head>

    <body class="login" style="">
        <div class="overlay">
            <img src="<?php echo base_url('assets/images/clientSpecific/ring-alt.gif');?>" style=" display:block;margin:auto; padding-top: 25%;">
        </div>
        <div>
            <a class="hiddenanchor" id="signup"></a>
            <a class="hiddenanchor" id="signin"></a>
            <p id="removeNotify">Hide help.</p>
            <?php $this->load->view($content_view); ?>
            <center>
                <img src="<?php echo base_url('assets/images/clientSpecific/Dataposit 2016 logo white.png') ?>" style="height:10%; width:10%;">
            </center>
        </div>
  </body>
</html>

<script>
    $(document).ready(function(){
        $(".overlay").hide();
        $("#removeNotify").click(function(){
          PNotify.removeAll();
          $("#removeNotify").hide();
        });

        window.validatePassword = function($password) {
            var patt = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);

            var res = patt.test($password);
            return res;
        }
    });
</script>