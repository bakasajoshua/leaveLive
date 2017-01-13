<div class="right_col" role="main">
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="x_panel">
                <div class="x_title">
                    <h2>Leave Application</h2>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <form class="form-horizontal form-label-left" novalidate>
                      <h2><small>Provide All Fields</small></h2>
                      <div class="alert alert-danger" role="alert" id="loginerrorBox">
                          <center>
                              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                              <span class="sr-only">Error:</span>
                              <p></p>
                          </center>
                      </div>

                      <div class="alert alert-success" role="alert" id="loginSuccessBox">
                          <center>
                            <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                            <span class="sr-only">Success:</span>
                            <p></p>
                          </center>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Select Leave Type <span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" id="absenceReason">
                            <option></option>
                              <?php
                                $options = "";
                                $causeOfAbsence = json_decode($causeOfAbsence);
                                $causeOfAbsence = json_decode($causeOfAbsence);
                                foreach ($causeOfAbsence as $key => $value) {
                                  $value = (array)$value;
                                  if($value['daysAvaliable'] == NULL || $value['daysAvaliable'] == ""){
                                      $options .= "<option value='".$value['totalEntitlementForPayment']."k".$value['entitlementCode']."'>".$value['entitlementCode']."</option>";
                                  }else{
                                      $options .= "<option value='".$value['daysAvaliable']."k".$value['entitlementCode']."'>".$value['entitlementCode']."</option>";
                                  }
                                  
                                }
                                echo $options;
                              ?>
                          </select>
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="startDate">Start Date <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="startDate" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="startDate">End Date <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input id="endDate" class="date-picker form-control col-md-7 col-xs-12" required="required" type="text">
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Days Available <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="number" id="daysAvaliable" name="daysAvaliable" required="required" data-validate-minmax="10,100" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Apply for <span class="required">*</span>
                        </label>
                        <div class="col-md-2 col-sm-2 col-xs-2">
                          <input type="hidden" id="totalDaysApplied">
                          <input type="number" id="daysToApply" name="daysToApply" required="required" data-validate-minmax="" class="form-control col-md-3 col-xs-12">
                        </div>
                        <span class="required control-label col-md-1 col-sm-1 col-xs-1">Days</span>
                        <span class="required control-label col-md-4 col-sm-4 col-xs-4" style="color:red;" id='daysAppliedError'> <p></p></span>
                        </label>
                      </div>
                      
                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Days Remaining <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="number" id="daysRemaining" name="daysRemaining" required="required" data-validate-minmax="10,100" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Report Back On<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="returnDate" name="returnDate" required="required" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>

                      <!-- <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Comment <span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <textarea row='4' cols='20' id="comment"></textarea>
                        </div>
                      </div> -->

                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <!-- <button type="submit" class="btn btn-primary">Cancel</button> -->
                          <button id="applyLeave" type="submit" class="btn btn-success">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          