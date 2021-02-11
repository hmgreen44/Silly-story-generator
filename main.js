1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}// Added variables to fill in the story from a random array //

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertx = "Willy the Goblin Big Daddy Father Christmas";
let inserty = "the soup kitchen Disneyland the White House";
let insertz = "spontaneously combusted melted into a puddle on the sidewalk turned into a slug and crawled away";
//adding a replacement of the newStory with an X Y and Z item//
newStory = newStory.replace(':insertx:',xItem);
newStory = newStory.replace(':inserty:',yItem);
newStory = newStory.replace(':insertz:',zItem);


  randomize.addEventListener('click', result);

  function result() {    
    //Allows a newStory to be created//
    let newStory = storyText;
    //using let to grab a random value from the X array//
  let xItem = randomValueFromArray(insertX)
  let yItem = randomValueFromArray(insertY)
  let zItem = randomValueFromArray(insertZ)

  

  if(customName.value !== '') {
    //const used to assign a value and have a constant reference to that value//
    const name = customName.value;
    newStory = newStory.replace('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    //using const for another variable with a stones, and centigrade//
    const weight = Math.round(300*0.071429) + 'stone';
    let temperature =  Math.round((94-32) * 5/9); + 'centigrade';
    //if Uk is checked replace values of weight and temperature with UK 
    newStory = newStory.replace ('300 pounds', weight)
    newStory = netStory. replace ('94 fahrenheit', temperature)
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}