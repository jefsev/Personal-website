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
           $('#safesubmit').replaceWith('<i class="fa fa-check-square fa-2x" aria-hidden="true" style="padding-top:15px; color:green;"></i><div><p><strong>Bericht</strong> verzonden, ik neem zo spoedig mogelijk contact met u op.</p></div>');
           $('form').find("input[type=text], textarea").val("");

        });

    });
});
