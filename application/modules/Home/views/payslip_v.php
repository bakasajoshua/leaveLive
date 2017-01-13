<div class="right_col" role="main">
    <div class="row">
        <div class="col-md-12">
            <div class="x_panel">
                <div class="x_title">
                    <h2>Payslip <small>Select Date to generate payslip</small></h2>
                    <ul class="nav navbar-right panel_toolbox">
                        <li>
                            <a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                        </li>
                        <li>
                            <a class="close-link"><i class="fa fa-close"></i></a>
                        </li>
                    </ul>
                    <div class="clearfix"></div>
                </div>
                <div class="x_content">

                <section class="content invoice">
                    <!-- title row -->
                    <div class="row">
                        <div class="col-xs-12 invoice-header">
                            <div class="tiles">
                              <div class="col-md-3 tile">
                              </div>
                              <div class="col-md-1 tile"></div>
                              <div class="col-md-5 tile">
                              <?php
                                if($_GET['e']==1){
                              ?>
                                <div class="alert alert-danger" role="alert" >
                                    <center>
                                      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                      <span class="sr-only">Error:</span>
                                      <p>Select a period.</p>
                                    </center>
                                </div>
                              <?php 
                                }
                              ?>
                                <div class="alert alert-danger" role="alert" id="loginerrorBox">
                                    <center>
                                      <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                                      <span class="sr-only">Error:</span>
                                      <p>Select a period.</p>
                                    </center>
                                </div>
                              </div>
                              <div class="col-md-3 tile">
                                <div class="form-group">
                                    <select class="form-control" id="payslipStartdate">
                                      <option>Select a Period</option>
                                      <?php
                                        $option = "";
                                        foreach ($PayslipPeriods as $key => $value) {
                                          $value = (array)$value;
                                          $option =  "<option>".$value['Period']."</option>";
                                          echo $option;
                                        }
                                      ?>
                                    </select>
                                </div>
                              </div>
                            </div>                            
                        </div>
                        <!-- /.col -->
                      </div>
                      <!-- info row -->
                      <hr/>

                      <div id="emplyeepayslipDetails">
                        <div class="row invoice-info">
                          <div class="col-sm-8 invoice-col">
                            <address>
                                            <strong> <span id='period'></span>. </strong>
                                            <br/><strong> <span id='employeeName'> </span>. </strong>
                                            <br><span id="employeeID">Work ID: KP/003</span>
                                            <br><span id="empoyeeTitle">Job Title: Finance & Investment Manager</span>
                                            <br><span id="employeeBank">Bank: COMMERCIAL BANK OF AFRICA </span>
                                            <br><span id="employeeBranch">Branch: MAMLAKA</span>
                                        </address>
                          </div>
                          <!-- /.col -->
                          <div class="col-sm-4 invoice-col">
                            <address>
                                            <br><span id="employeeAccNo"></span>
                                            <br><span id="employeeNHIF"> NHIF: R0843422 </span>
                                            <br><span id="employeeNSSF"> NSSF: 913216623 </span>
                                            <br><span id="employeeKRA"> KRA PIN:  A001627243V </span>
                                        </address>
                          </div>
                        </div>
                        <!-- /.row -->

                        <div class="row">
                          
                          <!-- /.col -->
                          <div class="col-xs-12">
                            <div class="table-responsive" id="paySlipTable2">

                            <!--   <table class="table table-striped">
                                <tbody>
                                  <tr>
                                    <th style="width:50%">Subtotal:</th>
                                    <td>$250.30</td>
                                  </tr>
                                  <tr>
                                    <th>Tax (9.3%)</th>
                                    <td>$10.34</td>
                                  </tr>
                                  <tr>
                                    <th>Shipping:</th>
                                    <td>$5.80</td>
                                  </tr>
                                  <tr>
                                    <th>Total:</th>
                                    <td>$265.24</td>
                                  </tr>
                                </tbody>
                              </table> -->

                            </div>
                          </div>
                          <!-- /.col -->
                        </div>
                        <!-- /.row -->
                      </div>
                      <!-- this row will not appear when printing -->
                      <div class="row no-print">
                        <div class="col-xs-12">
                          <!-- <button class="btn btn-default" onclick="window.print();"><i class="fa fa-print"></i> Print</button> -->
                          <!-- <button class="btn btn-success" onclick="window.print();"><i class="fa fa-print"></i> Print</button> -->
                          <!-- <button class="btn btn-primary pull-right" style="margin-right: 5px;"><i class="fa fa-download"></i> Generate PDF</button> -->
                          <form action="<?php echo base_url('Home/Payslip/downloadPayslip'); ?>" method="POST" target="_blank">
                            <input type="hidden" id="pdfPayslipDate" name="pdfPayslipDate">
                            <input type="submit" value="PDF" class="btn btn-primary pull-right" >
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            </div>
