window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 730 || document.documentElement.scrollTop > 730) {
        document.getElementById("to-top-btn").style.display = "block";
    } else {
        document.getElementById("to-top-btn").style.display = "none";
    }
}

function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
