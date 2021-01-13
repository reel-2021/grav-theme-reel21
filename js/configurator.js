const options = document.getElementsByTagName("input");
const child_configs = document.getElementsByClassName("config-child");
const total_element = document.getElementById("total");
const list_element = document.getElementById("total-list");

function parseConfigs() {
    let total = 0;
    let active_children = [];
    list_element.innerHTML = "";

    for (let o of options) {
        if (o.checked) {
            if (o.name == "formula") {
                total += parseInt(o.value);
                list_element.innerHTML += o.parentElement.getElementsByTagName("ul")[0].innerHTML;
                if (o.getAttribute("data-config") == "set") {
                    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
                    collapseElementList.map(function (collapseEl) {
                        let bsCollapse = new bootstrap.Collapse(collapseEl, {toggle: false})
                        bsCollapse.hide();
                        return;
                    })
                    return;
                }
                else {
                    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
                    collapseElementList.map(function (collapseEl) {
                        let bsCollapse = new bootstrap.Collapse(collapseEl, {toggle: false})
                        bsCollapse.show();
                        return;
                    })
                }
            }
            else if (o.hasAttribute("data-child") && (active_children.includes(o.name) || !document.getElementById(o.name).classList.contains("config-child"))) {
                active_children.push(o.getAttribute("data-child"));
                total += parseInt(o.value);
                list_element.innerHTML += o.parentElement.getElementsByTagName("ul")[0].innerHTML;
            }
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
    
    total_element.innerHTML = total;
};

window.addEventListener("click", parseConfigs);
window.addEventListener("load", parseConfigs);
