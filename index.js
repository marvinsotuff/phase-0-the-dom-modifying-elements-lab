// Write your code here

// Remove the <main> element with id 'main'
let mainElement = document.querySelector('main#main');

function removeMainElement() {
  if (mainElement) {
    mainElement.remove();
  }
}
removeMainElement();


let newHeader = document.createElement('h1');
newHeader.id = 'victory'

let YOUR_NAME = 'YOUR_NAME'
newHeader.innerHTML= `${YOUR_NAME} is the champion`;