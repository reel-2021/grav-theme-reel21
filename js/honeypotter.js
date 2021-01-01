// Defer email spam bots with an easy method

$(function(){
    $("#email").hover(function() {
        $(this).attr("href", $(this).attr("href").replace("honeypot", "kontakt"));
    });
});
