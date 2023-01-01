
let date = new Date();
let option = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
}

let i = 0;
let date_String = date.toLocaleDateString("en-US", option);
console.log(date_String);


let container = document.querySelector(".container");
let value1 = document.querySelector(".input");
let add1 = document.querySelector(".add");
let dateH1 = document.querySelector(".date");
dateH1.innerText = date_String;

class item {
    constructor(name) {
        this.create(name);
    }
    create(name) {
        if (i == 0) {
            let h2 = document.createElement("h2");
            h2.classList.add("taskheading");
            container.appendChild(h2);
            h2.innerText = "TODAY'S TASKS";
            i++;
        }
        let l1 = document.createElement("li");
        l1.classList.add("item");
        let date2 = new Date();
        let time = ` [ ${date2.getMinutes()} : ${date2.getSeconds()}] : `
        let input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.value = time + name;
        input.classList.add("item_input");

        let remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = '<i class="fas fa-trash"></i>';
        remove.addEventListener('click', () => this.remove(l1));

        container.appendChild(l1);
        l1.appendChild(input);
        l1.appendChild(remove);
    }

    remove(l1) {
        container.removeChild(l1);
    }

}


window.addEventListener("keydown", (e) => {
    if (e.which == 13) {
        check();
    }
})

add1.addEventListener("click", check);

function check() {
    if (value1.value != "") {
        new item(value1.value);
        value1.value = "";
    }
    else {
        alert("The task should have the name or desciption");
    }
}


function removeAll() {
    i = 0;
    document.querySelector(".container").innerHTML = "";
}