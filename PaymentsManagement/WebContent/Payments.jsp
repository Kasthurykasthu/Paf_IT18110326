<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="com.Payment"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Payment Management</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/payments.js"></script> 
</head>
<body>
	<div class="container">
		<div class="row">  
			<div class="col-4">
   				<h1>Payments Management</h1> 
	
				<form id="formPayment" name="formPayment">
				
					<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">paymentID:
							</span>
						</div>
						<input id="paymentID" name="paymentID" type="text"
							class="form-control form-control-sm">
					</div>
				
				<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">CARD_NUMBER:
							</span>
						</div>
						<input id="CARD_NUMBER" name="CARD_NUMBER" type="text"
							class="form-control form-control-sm">
				</div> 
				
				<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">EXPIRATIONEXP_DATE:
							</span>
						</div>
						<input id="EXPIRATIONEXP_DATE" name="EXPIRATIONEXP_DATE" type="text"
							class="form-control form-control-sm">
				</div> 
				
				<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">CV_CODE:
							</span>
						</div>
						<input id="CV_CODE" name="CV_CODE" type="password"
							class="form-control form-control-sm">
				</div> 
				
				<div class="input-group input-group-sm mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="lblName">COUPON_CODE: 
							</span>
						</div>
						<input id="COUPON_CODE" name="COUPON_CODE" type="password"
							class="form-control form-control-sm">
				</div> 
						
				<br>
				<input id="btnSave" name="btnSave" type="button" value="Save"class="btn btn-primary"> 
				<input type="hidden" id="hidpaynoSave" name="hidpaynoSave" value="">
			</form>
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			
			<br>
			<div class='col-12'>
				<div id="divPaymentsGrid">
 					<%
 						Payment paymentObj = new Payment();
 					out.print(paymentObj.readpaymentdetails());
 					%>
				</div>
			</div> 
		</div> 
	</div> 
</div>  
   
</body>
</html>