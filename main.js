const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}// Added variables to fill in the story from a random array //

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.";
var insertX = "Willy the Goblin, Big Daddy, Father Christmas";
var insertY = "the soup kitchen, Disneyland, the White House";
var insertZ = "spontaneously combusted, melted into a puddle on the sidewalk, turned into a slug and crawled away";
//adding a replacement of the newStory with an X Y and Z item//

  randomize.addEventListener('click', result);

  function result() {    
    //Allows a newStory to be created//
    var newStory = storyText;
    //using let to grab a random value from the X array//
  var xItem = randomValueFromArray(insertX)
  var yItem = randomValueFromArray(insertY)
  var zItem = randomValueFromArray(insertZ)

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);


  if(customName.value !== '') {
    //const used to assign a value and have a constant reference to that value//
    const name = customName.value;
    newStory = newStory.replace('Bob',customName);

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