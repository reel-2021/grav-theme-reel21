const options = document.getElementsByTagName("input");
const child_configs = document.getElementsByClassName("config-child");
const total_element = document.getElementById("total");
const list_element = document.getElementById("total-list");

function parseConfigs() {
    let total = 0;
    let active_children = [];
    list_element.innerHTML = "";

    for (let o of options) {
        if (o.checked && o.hasAttribute("data-child")) {
            active_children.push(o.getAttribute("data-child"));
        }
    }

    for (let e of child_configs) {
        if (active_children.includes(e.id)) {
            let bsCollapse = new bootstrap.Collapse(e, {toggle: false});
            bsCollapse.show();
        }
        else {
            let bsCollapse = new bootstrap.Collapse(e, {toggle: false});
            bsCollapse.hide();
        }
    }
    
    for (let o of options) {
        if (o.checked && active_children.includes(o.name)) {
            total += parseInt(o.value);
            list_element.innerHTML += o.parentElement.getElementsByTagName("ul")[0].outerHTML;
        }
        else if (o.checked && !document.getElementById(o.name).classList.contains("config-child")) {
            total += parseInt(o.value);
            list_element.innerHTML += o.parentElement.getElementsByTagName("ul")[0].innerHTML;
        }
    }
    total_element.innerHTML = total;
};

window.addEventListener("click", parseConfigs);
window.addEventListener("load", parseConfigs);
