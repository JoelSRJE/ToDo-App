/* 
Du ska i denna uppgift bygga en todoapp. Appen ska byggas med HTML & CSS, tillsammans med JavaScript för att hantera de dynamiska värdena. Följande funktionalitet måste implementeras:

Skapa todo med titel och beskrivning  <!--Check-->
Lista upp färdiga- och ofärdiga todos <!--Check-->
Avklara todo (check av) <!--Check-->
Ta bort todo <!--Check-->

En Todo ska minst bestå av
Titel <!--Check-->
Beskrivning <!--Check-->
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
const listWrap = document.querySelector(".list-wrapper");

// Creates a list for the cards that are done
const done_list = document.createElement("ul");
done_list.classList.add("done-list")
listWrap.appendChild(done_list);

const doneTodos = [];

// Give the cards unique ID, starting from 1.
let cardCount = 1;

// Places stuff in array
const todoArray = [];

// Addeventlistener for the form
form.addEventListener("submit", (e) => {
     e.preventDefault();
     
     const input = userInput.value;
     const description = userDescription.value;

     const card = document.createElement("div");
     card.classList.add("created-card")
     card.setAttribute("Id", cardCount)
     cardCount++;

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

     // timestamp container
     const time_container = document.createElement("div");
     time_container.classList.add("time-container");
     container.appendChild(time_container)

     // timestamp of creation (time)
     const time_stamp = document.createElement("p");
     time_stamp.classList.add("time-stamp");
     time_stamp.innerText = getTime();
     time_container.appendChild(time_stamp);

     // timestamp of creation (date)
     const time_stamp_date = document.createElement("p");
     time_stamp_date.classList.add("time-stamp-date");
     time_stamp_date.innerText = getDate();
     time_container.appendChild(time_stamp_date)

     // Div to easier control the actions of the buttons below.
     const actions = document.createElement("div");
     actions.classList.add("action-bar");
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
        
     // Done timestamp, only append when done_button is pressed.
     const completed_container = document.createElement("div");
     completed_container.classList.add("completed");

     const completed_stamp = document.createElement("p");
     completed_stamp.classList.add("completion-timestamp");
     completed_container.appendChild(completed_stamp);

     /* I could recreate the time_stamp_date to print it out as well
     but decided not to. Make it less cluttered with info.
     */

     list.appendChild(card);

     done_button.addEventListener("click", () => {
          if( card.classList == "created-card" ) {
               card.classList.add("done");
               done_button.classList.add("toggle-btn-color")
               card.appendChild(completed_container)
               completed_stamp.innerText = `Completed: ${getTime()}`;
          } else {
               card.classList.remove("done");
               done_button.classList.remove("toggle-btn-color")   
               card.removeChild(completed_container);      
          }
     });

     edit_button.addEventListener("click", (e) => {
          if ( edit_button.classList == "edit-btn" ) {
               edit_button.innerHTML = "<img src= images/save.png>";
               edit_button.classList.add("changed")
               card_input.removeAttribute("readonly");
               card_description.removeAttribute("readonly");
          } else {
               edit_button.classList.remove("changed");
               edit_button.innerHTML = "<img src= images/edit.png>";
               card_input.setAttribute("readonly", "readonly");
               card_description.setAttribute("readonly", "readonly");
          }
     })

     delete_button.addEventListener("click", () => {
          list.removeChild(card);
          todoArray.remove(card)
     });

     // To see that everything works, will remove
     todoArray.push(card)
     console.log(todoArray)
     console.log("Signal is going through")
});     

function getDate() {
     let date = new Date();
     let today = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();
 
     let currentDate = year + " / " + month + " / " + today;

     return currentDate;
}

function getTime() {
     let time = new Date();
     let hour = time.getHours();
     let minutes = time.getMinutes();
     let seconds = time.getSeconds();
 
     hour = hour < 10 ? "0" + hour : hour;
     minutes = minutes < 10 ? "0" + minutes : minutes;
     seconds = seconds < 10 ? "0" + seconds: seconds;
 
     let clock = hour + ":" + minutes + ":" +seconds;

     return clock;
}