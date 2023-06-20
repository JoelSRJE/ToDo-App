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

// Places stuff in array
const todoArray = [];

// Addeventlistener for the form
form.addEventListener("submit", (e) => {
     e.preventDefault();
     
     const input = userInput.value;
     const description = userDescription.value;

     const card = document.createElement("div");
     card.classList.add("created-card")
     card.setAttribute("Id", creationCount)
     creationCount++;

     const container = document.createElement("div");
     container.classList.add("card-content")
     card.appendChild(container);

     // The users title of the task.
     const card_input = document.createElement("input");
     card_input.classList.add("created-input");
     card_input.type = "text";
     card_input.value = input;
     card_input.setAttribute("readonly", "readonly");
     container.appendChild(card_input);

     // The users description of the task.
     const card_description = document.createElement("textarea");
     card_description.classList.add("created-description");
     card_description.value = description;
     card_description.setAttribute("readonly", "readonly");
     container.appendChild(card_description);

     // Div to easier control the actions of the buttons below.
     const actions = document.createElement("div");
     actions.classList.add("actions");
     card.appendChild(actions);

    // Button to hightlight that the task is done.
     const done_button = document.createElement("button");
     done_button.classList.add("done-btn");
     done_button.innerHTML = "<img src= images/check.png>";
     actions.appendChild(done_button);

     // Buttons to edit / delete the tasks within the list.
     const edit_button = document.createElement("button");
     edit_button.classList.add("edit-btn");
     edit_button.innerHTML = "<img src= images/edit.png>";
     actions.appendChild(edit_button);


     const delete_button = document.createElement("button");
     delete_button.classList.add("delete-btn");
     delete_button.innerHTML = "<img src= images/delete.png>"
     actions.appendChild(delete_button);
        
     list.appendChild(card);

     edit_button.addEventListener("click", (e) => {
          if ( edit_button.classList == "edit-btn" ) {
               edit_button.innerHTML = "<img src= images/save.png>";
               edit_button.classList.add("changed")
               input.removeAttribute("readonly");
               description.removeAttribute("readonly");
          } else {
               edit_button.classList.remove("changed");
               edit_button.innerHTML = "<img src= images/edit.png>";
               input.setAttribute("readonly", "readonly");
               description.setAttribute("readonly", "readonly");
          }
     })

     delete_button.addEventListener("click", () => {
          list.removeChild(card);
     });

     // To see that everything works, will remove
     todoArray.push("submit")
     console.log(todoArray)
     console.log("Signal is going through")
});