const options = document.getElementsByTagName("input");
const child_configs = document.getElementsByClassName("child-config");
const total_element = document.getElementById("total");
const list_element = document.getElementById("total-list");

function parseConfigs() {
    let total = 0;
    let active_children = [];
    list_element.innerHTML = "";

    for (let o of options) {
        if (o.checked && !o.parentElement.parentElement.parentElement.classList.contains("d-none")) {
            if (o.getAttribute("data-child")) {
                active_children.push(o.getAttribute("data-child"));
            }
        }
    }

    for (let e of child_configs) {
        if (active_children.includes(e.id)) {
            e.classList.remove("d-none");
        }
        else {
            e.classList.add("d-none");
        }
    }
    
    for (let o of options) {
        if (o.checked && !o.parentElement.parentElement.parentElement.classList.contains("d-none")) {
            total += parseInt(o.value);
            list_element.innerHTML += o.parentElement.getElementsByTagName("ul")[0].innerHTML;
        }
    }
    total_element.innerHTML = total;
};

window.addEventListener("click", parseConfigs);
window.addEventListener("load", parseConfigs);
