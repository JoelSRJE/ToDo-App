
//Documented Object Model
const list = document.querySelector(".task-list")
let userInput = document.querySelector(".create-input");
let userDescription = document.querySelector(".create-description");
const listWrap = document.querySelector(".list-wrapper");
const createBtn = document.querySelector(".create-button")


// Want to implement localstorage in future.
// Places stuff in array
let todoArray = [];


// Started to try out classes, decided on just ID. 
// Want to do more with it but time ran out.
class theDos {
     constructor (id) {
     this.id = cardCount;
     }
};

// Give the cards unique ID, starting from 1.
let cardCount = 0;

// Creates tasks
function createTask() {

     let createdCard = new theDos();

     let input = userInput.value;
     let description = userDescription.value;
     
     const card = document.createElement("div");
     card.classList.add("created-card")
     card.setAttribute("Id", cardCount)
     cardCount++;

     const container = document.createElement("div");
     container.classList.add("card-content")
     card.appendChild(container);

     // Displays the ID of each card.
     const id_p = document.createElement("p");
     id_p.classList.add("id-nr");
     id_p.innerText = `# ${cardCount}`;
     container.appendChild(id_p);

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
     but decided not to. Makes the cards less cluttered with info.
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
     
     // Makes it so that you can edit the textarea and input field.
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
     
     // Deletes the task from the list.
     delete_button.addEventListener("click", () => {
          list.removeChild(card);
          //Removes the exact card you press via the ID that generates.
          let cardIndex = this.id;
          todoArray.splice(cardIndex, 1)
          console.clear();
          console.log("Removed previous logs to clean up");
          console.log(todoArray)
     });

     todoArray.push(createdCard);
     console.log("Signal is going through");
}  

// Gets the date
function getDate() {
     let date = new Date();
     let today = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();
 
     let currentDate = year + " / " + month + " / " + today;

     return currentDate;
}

// Gets the time of the day
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

// Creates a task on click
createBtn.addEventListener("click", (e) => {
     e.preventDefault();
     createTask();
});