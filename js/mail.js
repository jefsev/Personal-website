$(document).ready(function(){
    $('.contactForm').on('click', '#safesubmit', function(e){
       e.preventDefault() //prevent the form from submitting normally'.

       //values from the form....
       var name = $('#name').val();
       var email = $('#email').val();
       var message = $('#message').val();

       //ajax call
        $.ajax({
          type: "POST",
          url: "send_mail.php",
           data: { name: name, email: email, message: message }
        }).done(function() {

           //replace submit button with some text...
           $('#safesubmit').replaceWith('<i class="fa fa-check-square fa-3x" aria-hidden="true" style="padding-top:15px; color:#80ffaa;"></i><div>');
           $('form').find("input[type=text], textarea").val("");

        });

    });
});
