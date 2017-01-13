<div class="right_col" role="main">  
    <div class="">
        <div class="row">
        	<div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>Work Calendar</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_title">
                                    <h2>Insert Internal Holidays</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">
                                	<form id="insertHolidayForm" style="color:#fff; padding:0px 1em 0 1em; ">
                                		<div class="col-md-6 col-sm-6 col-xs-12">
				                          	<input id="h1name" name="h1name" placeholder="Holiday Name" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
				                        </div>
						                <div class="col-md-6 col-sm-6 col-xs-12">
				                          	<input id="h1" name="h1" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
				                        </div>					                
				                        <!-- <div class="col-md-6 col-sm-6 col-xs-12">
				                          	<input id="h3" name="h3" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
				                        </div>	
				                        <div class="col-md-6 col-sm-6 col-xs-12">
				                          	<input id="h4" name="h4" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
				                        </div>	 -->
				                        <button type="button" class="btn btn-primary pull-right" id="InsertHoliday">Insert Holiday</button>
						            </form>
                                    

                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel2">View</h4>
                                                </div>
                                                <div class="modal-body">
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
                                                    <center>
									                	<form class="form-horizontal form-label-left" style="max-width: 70%;">
										                  	<div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Data Object</label>
										                    	<span id="masterDataObject" style="width:80%;"></span>
										                	  </div>
										                	  <div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Data value</label>
                                                                <span id="masterDataValue" style="width:80%;"></span>
										                	  </div>
										                	  <input type="hidden" value="" id="masterDataID">
										                	  <button type="button" class="btn btn-primary pull-right" id="EditmasterData">Edit</button>
										                </form>
									                </center>
                                                </div>
                                                <div class="modal-footer">
                                                 
                                                  
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
