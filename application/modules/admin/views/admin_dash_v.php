<!-- page content -->
<div class="right_col" role="main">  
    <div class="">
        <div class="row">
        
            <div class="col-md-12">
                <div class="x_panel">
                    <div class="x_title">
                        <h2>System Generated Emails</h2>
                        <div class="clearfix"></div>
                    </div>
                    <div class="x_content">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="x_panel" style="width:77em;">
                                <div class="x_title">

                                    <h2>Email Management</h2>
                                    <div class="clearfix"></div>
                                </div>
                                <div class="x_content">

                                    <table class="table table-bordered table-hover" style="font-size:80%;" id="systemEmailsTable">
                                        <thead>
                                            <tr>
                                              <th>#</th>
                                              <th>Page</th>
                                              <th>Subject</th>
                                              <th>Content</th>
                                              <th>Email Footer</th>
                                              <th>Reason Sent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php

                                                $emailTemplates = json_decode($emailTemplates);

                                                $i=0;
                                                foreach ($emailTemplates as $key => $value) {
                                                    $row = "";
                                                    $i++;
                                                    $value = (array)$value;
                                                    
                                                    
                                                    $emailID = $value['emailID'];
                                                    $pageUsed = $value['pageUsedAt'];
                                                    $subject = $value['subject'];
                                                    $emailContent = $value['emailContent'];
                                                    $emailFooter = $value['emailFooter'];
                                                    $reason = $value['reasonForSending'];

                                                    $row = '<tr data-toggle="modal" data-target=".bs-example-modal-lg" style="cursor:pointer;" onclick="getEmailID('.$emailID.')">';
                                                    $row .= '<td>'.($i).'</td>' ;
                                                    $row .= '<td class="pageUsedAt">'.$pageUsed.'</td>';
                                                    $row .= '<td class="emailSubject">'.$subject.'</td>';
                                                    $row .= '<td class="emailContent">'.$emailContent.'</td>';
                                                    $row .= '<td class="emailFooter">'.$emailFooter.'</td>';
                                                    $row .= '<td class="reasonForSending">'.$reason.'</td>';
                                                    $row .= '</tr>';
                                                    echo $row;
                                                }

                                            ?>
                                        </tbody>
                                    </table>


                                    <div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">

                                                <div class="modal-header">
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                    <h4 class="modal-title" id="myModalLabel2">Email Details</h4>
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
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Subject</label>
										                    	<div class="col-md-9 col-sm-9 col-xs-12">
										                      	<input type="text" class="form-control" disabled="disabled" id="emailSubjectModal" placeholder="Email Subject">
										                    	</div>
										                	  </div>
										                	  <div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Email Content</label>
                                                                <span id="emailContentModal" style="width:80%;"></span>
										                	  </div>
                                                              <hr/>
                                                              <div class="form-group">
                                                                <label class="control-label col-md-3 col-sm-3 col-xs-12">Email Footer</label>
                                                                <span id="emailFooterModal" style="width:80%;"></span>
                                                              </div>
										                	  <div class="form-group">
										                    	<label class="control-label col-md-3 col-sm-3 col-xs-12">Reason for sending</label>
										                    	<div class="col-md-9 col-sm-9 col-xs-12">
										                      		<input type="textarea" class="form-control" disabled="disabled" placeholder="reason for 	sending" id="reasonForSendingModal">
										                    	</div>
										                	  </div>
										                	  <input type="hidden" name="emailID" id="emailIDModal">
										                	  <button type="button" class="btn btn-primary pull-right" id="EditEmailTemplate">Edit</button>
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



    