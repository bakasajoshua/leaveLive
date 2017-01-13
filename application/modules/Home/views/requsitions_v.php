<div class="right_col" role="main">
    <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
           <div class="x_panel">
                <div class="x_title">
                    <h2>Requisitions</h2>
                    <ul class="nav navbar-right panel_toolbox">                      
                      <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"">Requisitions Cart: <i class="fa fa-shopping-cart"></i> <span id="itemsInCart">0 item(s)</span> </a>
                        <ul class="dropdown-menu" role="menu">
                          <li><a href="#" data-toggle="modal" data-target=".bs-example-modal-sm" id="viewCartItems">View Items</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">
                    <form class="form-horizontal form-label-left" novalidate>
                      <h2><small>Provide All Fields</small></h2>
                       <div class="alert alert-danger" role="alert" id="loginerrorBox">
                          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                          <span class="sr-only">Error:</span>
                          <center>
                            <p></p>
                          </center>
                        </div>

                        <div class="alert alert-success" role="alert" id="loginSuccessBox">
                            <span class="glyphicon glyphicon glyphicon-ok" aria-hidden="true"></span>
                            <span class="sr-only">Success:</span>
                            <center>
                              <p></p>
                            </center>
                        </div>

                      <div class="form-group" id="selectItemDiv">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12">Select items <span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" id="reqItem" name="reqItem">
                            <?php
                                $options = "<option>Choose option</option>";
                                $itemList = json_decode($itemList);

                                foreach ($itemList as $key => $value) {
                                  $options .= "<option>".$value->Description."</option>";
                                }
                                echo $options;
                              ?>
                          </select>
                        </div>
                        <!-- <div class="col-md-12">
                          <center>
                            <p style="cursor:pointer;" id="itemInputBox">Can't find item?</p>
                          </center>
                        </div> -->
                      </div>

                      <div class="item form-group" id="uniqueItemDiv">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Item<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="text" id="uniqueItem" name="uniqueItem" required="required"  class="form-control col-md-7 col-xs-12">
                        </div>
                        <div class="col-md-12">
                          <center>
                            <p style="cursor:pointer;" id="viewItemList">View Item List</p>
                          </center>
                        </div>
                      </div>

                      <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Quantity<span class="required">*</span>
                        </label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <input type="number" id="qty" name="qty" required="required" data-validate-minmax="10,100" min="0" class="form-control col-md-7 col-xs-12">
                        </div>
                      </div>

                      <!-- <div class="item form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="number">Reason<span class="required">*</span></label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <textarea id="message" required="required" class="form-control" name="message" data-parsley-trigger="keyup" data-parsley-minlength="20" data-parsley-maxlength="100" data-parsley-minlength-message="Come on! You need to enter at least a 20 caracters long comment.." data-parsley-validation-threshold="10"></textarea>
                        </div>
                      </div> -->

                      <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-md-offset-3">
                          <button type="submit" class="btn btn-primary" id="addNewItem">Add Item</button>
                          <button id="makeRequisition" type="submit" class="btn btn-success">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-sm">
                  <div class="modal-content">

                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel2">Requisition List</h4>
                      </div>
                      <div class="modal-body">
                          <table class="table table-bordered table-hover" style="font-size:80%;" >
                            <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Item</th>
                                  <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody id="previewRequisitionTable">
                              
                            </tbody>
                          </table>
                      </div>
                      <div class="modal-footer">
                      </div>
                  </div>
              </div>
          </div>
        </div>
