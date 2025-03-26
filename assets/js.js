//  Task 1
// Prompt the user to enter their name
let userName = prompt("Please enter your name:" , "nadia");

// Display the entered name on the webpage
console.log(userName);



// Task 2
// Show a confirmation dialog asking if the user wants to remove an item
let confirmDelete = confirm("Do you want to remove this item from the list?");

// Check if the user clicked "OK" (true) or "Cancel" (false)
if (confirmDelete) 
{ // If the user confirms, show a message that the item has been removed
    alert("Item has been removed.");
} 
else 
{// If the user cancels, show a message that the item was not removed
    alert("Item was not removed.");
}
