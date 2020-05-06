$(document).ready(function() {

	if ($("#alertSuccess").text().trim() == "") 
	{
		$("#alertSuccess").hide();
	}

	$("#alertError").hide();
});

$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	// Form validation-------------------
	var status = validatePaymentForm();
	if (status != true) {

		$("#alertError").text(status);
		$("#alertError").show();

		return;
	}

	var type = ($("#hidpaynoSave").val() == "") ? "POST" : "PUT";

	$.ajax({
		url : "PaymentAPI",
		type : type,
		data : $("#formPayment").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onPaymentSaveComplete(response.responseText, status);
		}
	});
});

function onPaymentSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divPaymentsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidpaynoSave").val("");
	$("#formPayment")[0].reset();
}
$(document).on("click", ".btnRemove", function (event) {
	$.ajax({
		url : "PaymentAPI",
		type : "DELETE",
		data : "payno=" + $(this).data("PAYNO"),
		dataType : "text",
		complete : function(response, status) {
			onItemDeleteComplete(response.responseText, status);
		}
	});
});


function onPaymentDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divPaymentsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting java script.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}
//update-------------------------------------------------------------
$(document).on("click",".btnUpdate",function(event)
{
		$("#hidpaynoSave").val($(this).closest("tr").find('#hidpaynoUpdate').val());
		$("#paymentID").val($(this).closest("tr").find('td:eq(0)').text());
		$("#CARD_NUMBER").val($(this).closest("tr").find('td:eq(1)').text());
		$("#EXPIRATIONEXP_DATE").val($(this).closest("tr").find('td:eq(2)').text());
		$("#CV_CODE").val($(this).closest("tr").find('td:eq(3)').text());
		$("#COUPON_CODE").val($(this).closest("tr").find('td:eq(4)').text());
});

// CLIENT-MODEL================================================================
function validatePaymentForm() {
	// paymentID
	if ($("#paymentID").val().trim() == "") {

		return "Insert paymentID.";
	}
	
	
	// CARD_NUMBER-------------------------------
	if ($("#CARD_NUMBER").val().trim() == "") {
			
		return "Enter the valid CARD_NUMBER.";
	}
	
	var temcard = $("#CARD_NUMBER").val().trim();
	if (!(/[0-9]{16}/)
			.test(temcard)) {

		return "Enter the valid CARD_NUMBER.";

	}

	// EXPIRATIONEXP_DATE------------------------
	if ($("#EXPIRATIONEXP_DATE").val().trim() == "") {

		return "Insert EXPIRATIONEXP_DATE.";
	}
	
	//CV_CODE---------------------------
	if ($("#CV_CODE").val().trim() == "") {

		return "Insert CV_CODE.";
	}
	
	var temcard = $("#CV_CODE").val().trim();
	if (!(/[0-9]{3}/)
			.test(temcard)) {

		return "Enter the valid CV_CODE.";

	}
	//COUPON_CODE------------------------
	if ($("#COUPON_CODE").val().trim() == "") {

		return "Insert COUPON_CODE.";
	}
	
	var temcard = $("#COUPON_CODE").val().trim();
	if (!(/[0-9]{5}/)
			.test(temcard)) {

		return "Enter the valid COUPON_CODE.";

	}
	
	return true;
	
}