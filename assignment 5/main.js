// Selecting elements for show/hide comments functionality
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initially hiding the comments section
commentWrapper.style.display = 'none';

// Event listener for the show/hide button
showHideBtn.onclick = function() {
  // Toggling the button text between 'Show comments' and 'Hide comments'
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block'; // Showing comments
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';  // Hiding comments
  }
};

// Selecting form and input elements for adding new comments
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Event listener for form submission
form.onsubmit = function(e) {
  e.preventDefault(); // Prevents the default form submission action
  submitComment();    // Calls function to handle comment submission
};

// Function to handle adding a new comment
function submitComment() {
  // Creating elements for the new comment
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;        // Getting the user's name
  const commentValue = commentField.value;  // Getting the user's comment

  // Setting the text content for the new elements
  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  // Appending the new elements to the DOM
  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  // Clearing the input fields after submission
  nameField.value = '';
  commentField.value = '';
}
