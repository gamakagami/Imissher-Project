function check_email(){
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "" ){
        $("#email_error_message").hide();
        $("#form_email").css("border-bottom","2px solid #34F458");
    } else {
        $("#email_error_message").html("Invalid Email");
        $("#email_error_message").show();
        $("#form_email").css("border-bottom","2px solid #F90A0A");
        error_email=true;
    }
} 