<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Email</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
	                    <?php
							$specificEmailTemplate = json_decode($specificEmailTemplate);
							foreach ($specificEmailTemplate as $key => $value) {
							    $row = "";
							    $i++;
							    $value = (array)$value;
							    
							    $emailID = $value['emailID'];
							    $reasonForSending = $value['reasonForSending'];
							    $emailContent = $value['emailContent'];
							    $subject = $value['subject'];
							    $emailFooter = $value['emailFooter'];
							}
						?>
						<div class="col-md-12">
                    	
                    		<p><strong> Email Subject:</strong> <?php echo $subject; ?></p>
                    		<p><strong>When is email sent:</strong> <?php echo $reasonForSending; ?></p>
                    		<p><strong>Email Content: </strong><br/><?php echo $emailContent; ?></p>
                    		<p><strong>Email Footer: </strong><br/><?php echo $emailFooter; ?></p>                    		
                    	</div>
                    	<hr/>
                    	<center><h3>New Email Details</h3></center>
		                <div class="col-md-12">
		                	<?php
		                	if($_GET['resp'] == 1){
		                		//successfully updates
		                	?>
			                	<div class="alert alert-success" role="alert" id="loginSuccessBo">
			                		<center>
			                          	<span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
			                          	<span class="sr-only">Success:</span>
			                          	<p style="display: inline-block;">Your update to the template was successfull.</p>
		                          	</center>
		                      	</div>
		                	<?php
		                	}else  if($_GET['resp'] == 2){
		                	?>
			                	<div class="alert alert-danger" role="alert" id="loginerrorBo">
				                	<center>
			                        	 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                          	<span class="sr-only">Error:</span>
			                          	<p>An error occured while updating your changes please try again later.</p>
			                        </center>  	
		                      	</div>
		                	<?php
		                	}else{}
		                	?>
		                	
		                	<form class="form-horizontal form-label-left" style="max-width: 70%;">	
		                  		<div class="form-group">
			                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Subject</label>
			                    	<div class="col-md-9 col-sm-9 col-xs-12">
			                      	<input type="text" class="form-control" id="newSubject">
			                    	</div>
		                	 	</div>
		                	  	<input type="hidden" name="emailID" id="emailID" value="<?php echo $emailID; ?>">
		                	</form>
	                        <div class="container">
								<div class="row">
									<label>Email Content</label>
									<div class="col-lg-12 nopadding">
										<textarea id="txtEditor"></textarea> 
									</div>
								</div>
							</div>
							<div class="container">
								<div class="row">
									<label>Email Footer</label>
									<div class="col-lg-12 nopadding">
										<textarea id="txtEditor2"></textarea> 
									</div>
								</div>
							</div>
							<div class="alert alert-success" role="alert" id="loginSuccessBox">
		                		<center>
		                          	<span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
		                          	<span class="sr-only">Success:</span>
		                          	<p style="display: inline-block;"></p>
	                          	</center>
	                      	</div>
	                      	<div class="alert alert-danger" role="alert" id="loginerrorBox">
			                	<center>
		                        	 <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
		                          	<span class="sr-only">Error:</span>
		                          	<p></p>
		                        </center>  	
	                      	</div>
					    	<button type="button" class="btn btn-primary pull-right" id="saveEmailTemplate">Update Email Template</button>
				    	</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>