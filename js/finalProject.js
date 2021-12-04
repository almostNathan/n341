/*
    filename: finalProject.js
    author: Nathan Allen
    purpose: handle the input from form input by user and use animations from JQuery Themes
    created: 11/17/21
    mod history:
*/
var elInterestSlider 
var elInterestSliderLabel
$(document).ready(function(){

	$( "#accordion" ).accordion();

	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$( "#autocomplete" ).autocomplete({
		source: availableTags
	});

	$( "#button" ).button();
	$( "#button-icon" ).button({
		icon: "ui-icon-gear",
		showLabel: false
	});

	$( "#radioset" ).buttonset();

	$( "#controlgroup" ).controlgroup();

	$( "#tabs" ).tabs();

	$( "#dialog" ).dialog({
		autoOpen: false,
		width: 400,
		buttons: [
			{
				text: "Ok",
				click: function() {
					$( this ).dialog( "close" );
				}
			},
			{
				text: "Cancel",
				click: function() {
					$( this ).dialog( "close" );
				}
			}
		]
	});

	// Link to open the dialog
	$( "#dialog-link" ).click(function( event ) {
		$( "#dialog" ).dialog( "open" );
		event.preventDefault();
	});

	$( "#datepicker" ).datepicker({
		inline: true
	});

	$( "#slider" ).slider({
		range: true,
		values: [ 17, 67 ]
	});

	$( "#progressbar" ).progressbar({
		value: 20
	});

	$( "#spinner" ).spinner();

	$( "#menu" ).menu();

	$( "#tooltip" ).tooltip();

	$( "#selectmenu" ).selectmenu();

	// Hover states on the static widgets
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	

	//additional styling
	$("#submit,#reset").button()
	$("#interest").slider()

	$.validator.setDefaults({
		submitHandler: function() {
			//CHECKBOX INFO
			elOutputArea = $("#outputArea") 
			for (checkedItem of $(":checked:checkbox")){
				//print checkbox
				elOutputArea.append("Format: " + checkedItem.value + "<br>")
			}
			
			//RADIO INFO
			for(selectedRadio of $(":checked:radio")){
				//print radio
				elOutputArea.append("Color: " + selectedRadio.value + "<br>")
			}

			//USER INPUT INFO
			//email, passoword, phonenumber
			strUserEmail = document.getElementById("userEmail").value
			strUserPassword = document.getElementById("userPassword").value
			strUserPhoneNumber = document.getElementById("userPhoneNumber").value
			strUserBirthDate = $("#userBirthDate").val()

			//just display password as *'s the length of the password
			strPasswordOutput = "*".repeat(strUserPassword.length)

			//print user info
			elOutputArea.append("Email: " + strUserEmail +"<br>")
				.append("Password: " + strPasswordOutput + "<br>")
				.append("Phone: " + strUserPhoneNumber + "<br>")
				.append("Birth Date: " + strUserBirthDate + "<br>")

			//display interest
			elOutputArea.append("Interest: " +$("#interest").val() + "<br>")
			
			//display comments
			elOutputArea.append("Comments: " + $("#comments").val())

			alert("success")//alert to confirm validation passes
		},//end submitHandler

		errorPlacement: function(error,element){
			error.insertAfter(element)
		}//end errorPlacement
	})

	//attach validator to form
	$("#mtgForm").validate({
		rules: {
			formatCheckbox: {
				required: true
			},
			userEmail: {
				required: true

			},
			userPassword: {
				required: true,
				minlength: 4
			
			},
			userPhoneNumber: {
				required: true,
				maxlength: 10,
				digits: true
			},
			userBirthDate: {
				required: true
			},
			comments: {
				required: true,
				minlength: 10

			}

		},//end rules
		messages: {
			formatCheckbox: {
				required: "Please select at least one format type."
			},
			userEmail:{
				required: "Please enter your email."
			},
			userPassword: {
				required: "Please enter a password.",
				minlength: $.validator.format("Must have at least {0} characters.")
			},
			userPhoneNumber: {
				required: "Please enter your phone number.",
				maxlength: "Phone numbers must be 10 digits."
			},
			userBirthDate: {
				required: "Please enter your birth date."
			},
			comments: {
				required: "Please give us at least one comment, it really helps.",
				minlength: "Type something somewhat meaningful at least. Thanks!"
			}
		}//end messages
	})//end validate


	//display number next to slider
	elInterestSlider = document.getElementById("interest")
	elInterestSliderLabel = document.getElementById("interestLabel")
	elInterestSliderLabel.textContent = elInterestSlider.value
	elInterestSlider.onchange = function(){
		elInterestSliderLabel.textContent = elInterestSlider.value
	}

})//end doc.ready

