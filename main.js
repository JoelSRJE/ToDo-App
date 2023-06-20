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

//Documented Object Model after the creation-function
const form = document.querySelector(".create-form")
const list = document.querySelector(".task-list")
const userInput = document.querySelector(".create-input");
const userDescription = document.querySelector(".create-description");

// Give the cards unique ID, starting from 1.
let creationCount = 1;

// Addeventlistener for the form
form.addEventListener("submit", (e) => {
     e.preventDefault();
     
     const input = userInput.value;
     const description = userDescription.value;

     const todo_card = document.createElement("div");
     todo_card.classList.add("created-card")
     todo_card.setAttribute("Id", creationCount)
     creationCount++;

     const todo_container = document.createElement("div");
     todo_container.classList.add("card-content")
     todo_card.appendChild(todo_container);

     // The users title of the task.
     const todo_input = document.createElement("input");
     todo_input.classList.add("created-input");
     todo_input.type = "text";
     todo_input.value = input;
     todo_input.setAttribute("readonly", "readonly");
     todo_container.appendChild(todo_input);

     // The users description of the task.
     const todo_description = document.createElement("textarea");
     todo_description.classList.add("created-description");
     todo_description.value = description;
     todo_description.setAttribute("readonly", "readonly");
     todo_container.appendChild(todo_description);

     // Button to hightlight that the task is done.
     const todo_done_button = document.createElement("button");
     todo_done_button.classList.add("done-btn")
     todo_container.appendChild(todo_done_button);

     // Div to easier control the actions of the buttons below.
     const todo_actions = document.createElement("div");
     todo_actions.classList.add("actions");
     todo_card.appendChild(todo_actions);

     // Buttons to edit / delete the tasks within the list.
     const todo_edit_button = document.createElement("button");
     todo_edit_button.classList.add("edit-btn");
     todo_actions.appendChild(todo_edit_button);

     const todo_delete_button = document.createElement("button");
     todo_delete_button.classList.add("delete-btn");
     todo_actions.appendChild(todo_delete_button);
        
     list.appendChild(todo_card);
});
