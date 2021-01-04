// Defer email spam bots with an easy method

const e = document.getElementById("email");
e.onmouseover = function() {
    e.setAttribute("href", e.getAttribute("href").replace("honeypot", "kontakt"));
};
