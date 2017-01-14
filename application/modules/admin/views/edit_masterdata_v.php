<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Edit Data</h2>
                        <div class="clearfix"></div>
                    </div>
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
                    <div class="x_content">
	                    <?php

							$specificMasterData = json_decode($specificMasterData);
							foreach ($specificMasterData as $key => $value) {
							    $row = "";
							    $i++;
							    $value = (array)$value;
							    
							    $dataobj = $value['dataobj'];
							    $dataval = $value['dataval'];
							    $ID = $value['id'];
							}
						?>
						<div class="col-md-6">
                    	
                    		<p><strong>Data Object:</strong> <?php echo $dataobj; ?></p>
                    		<p><strong>Data Value:</strong> <?php echo $dataval; ?></p>
                    	</div>
                        <div class="col-md-6">
                            <center><h3>New Master Data Details</h3></center>
                            <p><strong>Data Object:</strong> <?php echo $dataobj; ?></p>
                            <!-- <p><strong>Data Value:</strong> <?php echo $dataval; ?></p> -->
                            <form class="form-horizontal form-label-left" style="max-width: 70%;">  
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-sm-3 col-xs-12">New Data Value</label>
                                    <div class="col-md-9 col-sm-9 col-xs-12">
                                        <input type="text" class="form-control" id="newActiveYear">
                                        <input type="hidden" class="form-control" id="dataObjID" value="<?php echo $ID; ?>">
                                    </div>
                                </div>
                                <button type="button" class="btn btn-primary pull-right" id="updateActiveYear">Update Active Year</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>