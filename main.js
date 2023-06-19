/* 
Du ska i denna uppgift bygga en todoapp. Appen ska byggas med HTML & CSS, tillsammans med JavaScript för att hantera de dynamiska värdena. Följande funktionalitet måste implementeras:

Skapa todo med titel och beskrivning
Lista upp färdiga- och ofärdiga todos
Avklara todo (check av)
Ta bort todo

En Todo ska minst bestå av
Titel
Beskrivning
Avklarad (boolean)
Skapad datum
Avklarad datum

Om du går för VG och använder dummyjson API:et så använder du deras todo objekt-struktur.
*/

// Documented Object Model
const create = document.querySelector(".create-section");
const task_wrapper = document.querySelector(".task-container");

function creation() {
    // The creation area
    const create_title = document.createElement("h1");
    create_title.classList.add("create-title");
    create_title.innerText = "To Do It";

    const create_form = document.createElement("form");
    create_form.classList.add("create-form");

    const create_input = document.createElement("input");
    create_input.classList.add("create-input");
    create_input.placeholder = "Write the title";
    create_input.setAttribute("required", "required")

    const create_description = document.createElement("textarea");
    create_description.classList.add("create-description");
    create_description.type = "text";
    create_description.placeholder = "Write the description";
    create_description.rows = 4;
    create_description.cols = 10;

    const create_button = document.createElement("button");
    create_button.classList.add("create-button");
    create_button.innerHTML = "<img src= 'images/pen.png'/>"
    create_button.setAttribute("submit", "submit");

    // Appends
    create.appendChild(create_form);
    create_form.appendChild(create_title);
    create_form.appendChild(create_input);
    create_form.appendChild(create_description);
    create_form.appendChild(create_button);
}

//Calls the function creation to generate the entire form which will be used.
creation();