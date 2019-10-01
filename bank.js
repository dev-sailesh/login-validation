$(document).ready(function(){
			$("#first").keyup(function(){
				if (validateFname()) 
				{
					$("#first").css("border", "2px solid green");
					$("#fnamevalid").html("<p>OK!</p>");
				}
				else
				{
					$("#first").css("border", "2px solid red");
					$("#fnamevalid").html("<p>Invalid!</p>");
				}
			})

			$("#last").keyup(function(){
				if (validateLname()) 
				{
					$("#last").css("border", "2px solid green");
					$("#lnamevalid").html("<p>OK!</p>");
				}
				else
				{
					$("#last").css("border", "2px solid red");
					$("#lnamevalid").html("<p>Invalid!</p>");
				}
			})

			$("#mail").keyup(function(){
				if (validateMail()) 
				{
					$("#mail").css("border", "2px solid green");
					$("#mailvalid").html("<p>EMail ID Validated</p>");
				}
				else
				{
					$("#mail").css("border", "2px solid red");
					$("#mailvalid").html("<p>EMail Invalid!</p>");
				}
			})

			$("#login").click(function(){
				if (validateFname()==true && validateLname()==true && validateMail()==true) 
				{
					$(location).attr('/banks');
					alert("Name:"+" "+$("#first").val()+" "+$("#last").val());
				}
				else
				{
					$(location).attr('href','https://www.fb.com');
				}
			})
		})

		function validateFname()
		{
			var fname= $("#first").val();
			var reg= /^([a-zA-Z])+$/;
			if(reg.test(fname) && fname!=='')
			{
		 	return true;
		 	}
		 	else
		 	{
		 	return false;
		 	}
		}

		function validateLname()
		{
			var lname= $("#last").val();
			var reg= /^([a-zA-Z])+$/;
			if(reg.test(lname) && lname!=='')
			{
		 	return true;
		 	}
		 	else
		 	{
		 	return false;
		 	}
		}		

		function validateMail()
		{
			var mail= $("#mail").val();
			var reg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if(reg.test(mail))
			{
		 	return true;
		 	}
		 	else
		 	{
		 	return false;
		 	}
		}
		