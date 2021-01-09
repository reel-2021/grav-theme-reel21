const configs = document.getElementsByTagName("input");
const total_element = document.getElementById("total");

function parseConfigs() {
    var total = 0;
    for (let c of configs) {
            total += c.checked ? parseInt(c.value) : 0;
    }
    console.log(total);
    total_element.innerHTML = total;
};

window.addEventListener("click", parseConfigs);
window.addEventListener("load", parseConfigs);
