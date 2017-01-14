<div class="right_col" role="main">
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="x_panel">
                <div class="x_title">
                    <h2>Send An Email</h2>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <form class="form-horizontal form-label-left" novalidate method="POST" action="<?php echo base_url('home/help/sendMail'); ?>">
                        <h2><small>Provide All Fields</small></h2>
                        
                        <center>
                        <?php
                            if($_GET['s']== 1){
                        ?>
                        <div class="alert alert-success" role="alert" id="loginSuccessBx">
                            <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                            <span class="sr-only">Success:</span>
                            <p>Successfully Sent</p>
                        </div>
                        <?php

                            }else if($_GET['s'] == 2){
                        ?>
                        <div class="alert alert-danger" role="alert" id="loginerrorBx">
                            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span class="sr-only">Error:</span>
                            <p>Something happend during sending of the email.<br/> Please try again later.</p>
                        </div>
                        <?php
                            }else{}
                        ?>
                        </center>

                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="startDate">To: <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <input id="to" name="sentTo" class="date-picker form-control col-md-7 col-xs-12" required="required"  type="text" value="oscar.gichohi@dataposit.co.ke">
                            </div>
                        </div>

                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">From: <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <input type="text" id="from" name="sentFrom" required="required" class="form-control col-md-7 col-xs-12" value="<?php echo $this->session->userdata('Email'); ?>">
                            </div>
                        </div>

                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Subject: <span class="required">*</span>
                            </label>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <input type="text" id="subject" name="subject" required="required" class="form-control col-md-7 col-xs-12">
                            </div>
                        </div>

                        <div class="item form-group">
                            <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Message <span class="required">*</span>
                            </label>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <textarea rows="4" cols="50" name="emessage" class="form-control col-md-7 col-xs-12"></textarea>
                            </div>
                        </div>

                        <div class="ln_solid"></div>
                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-3">
                              <button id="send" type="submit" class="btn btn-success">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>