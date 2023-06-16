# To-Do-List 

Created with HTML, CSS and JavaScript
The JavaScript functionality is design to allow Data-Entry, Checking and Deleting of the entry

Break down of the JavaScript Functionality
 GETTING SELECTORS
 create an array
 events
 prevent reloading
 Get our input value
 Check for empty input
 Add todo to array
 Clear input field
 Render todos
 Render todos function
 Clear the todo list before rendering
 create a loop to render the todos array on screen using forEach
 create the main div wrapper for the list and button div with class "task"
 
Create the li tag that will host the content with the class "content," then append (insert) it to the wrapper div with the class task.

 Created a container for the button with the class "action"
 
 created the check button with icon from fontawesome as innerHTML, a class "check" inserted it into the button container todoAction. and event listener is created with the function of toggling a specific class when clicked
 
created the delete button with icon from fontawesome as innerHTML, a class "delete" inserted it into the button container todoAction. and an event listener is created with the function of deleting the entry when clicked

Appended the button container to the main task wrapper
Appended the main task wrapper to the ul element on HTML

Toggle todo function
this function is intended to toggle the presence of the CSS class "toogle" on the grand parent element of the clicked button.

Delete todo function
retrieves the grandparent element of the clicked delete button.
retrieves the text content of the todo list, this corresponds to the actual text of the todo item.
This finds the index of the todoText (the text of the todo item) in the todos array.
This condition checks if the todoText exists in the todos array by verifying that index is not equal to -1.
This line removes one element from the todos array at the specified index. In this case, it removes the todo item that matches the todoText.
 After deleting the todo item from the todos array, this line calls the renderTodos function to update the displayed todo list by passing the updated todos array as an argument.
