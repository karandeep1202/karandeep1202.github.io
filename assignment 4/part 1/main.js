// Selecting DOM elements with straightforward queries for uniformity
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Organizing story content with placeholders for dynamic parts
const storyText = 'It was 94 fahrenheit outside, so :name: went for a walk. They weighed :weight: and saw :insertx: at :inserty: and then :insertz:.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Streamlining the function for picking random elements for ease of understanding
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Adding an event listener and a comprehensive story-building function
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // Swapping placeholders with actual content for story customization
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  // Efficiently setting a custom name or a default one
  let name = customName.value || 'Anmol';
  newStory = newStory.replace(':name:', name);

  // Adapting the story based on user's location choice
  if (document.getElementById('uk').checked) {
    let temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
    let weight = Math.round(300 / 14) + ' stone';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace(':weight:', weight);
  } else {
    // Setting a standard weight if UK option is not chosen
    newStory = newStory.replace(':weight:', '300 pounds');
  }

  // Displaying the generated story and making it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
