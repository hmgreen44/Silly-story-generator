const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}// Added variables to fill in the story from a random array //

var storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";
let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
let insertY = ['the soup kitchen','Disneyland','the White House'];
let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
//adding a replacement of the newStory with an X Y and Z item//

randomize.addEventListener('click', result);

function result() {    
    //Allows a newStory to be created//
let newStory = storyText;
    //using let to grab a random value from the X array//
  let xItem = randomValueFromArray(insertX)
  let yItem = randomValueFromArray(insertY)
  let zItem = randomValueFromArray(insertZ)

  newStory = newStory.replace(':insertX:',xItem);
  newStory = newStory.replace(':insertX:',xItem);
  newStory = newStory.replace(':insertY:',yItem);
  newStory = newStory.replace(':insertZ:',zItem);


  if(customName.value !== '') {
    //if name is not equal to no input then input customer name. If nothing is submitted replace name to Bob//
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    //using const for another variable with a stones, and centigrade//
    const weight = Math.round(300*0.071429) + 'stone';
    const temperature =  Math.round((94-32) * 5/9); + 'centigrade';
    //if Uk box is checked replace values of weight and temperature with UK measurements 
    newStory = newStory.replace ('300 pounds', weight)
    newStory = netStory. replace ('94 fahrenheit', temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
  }