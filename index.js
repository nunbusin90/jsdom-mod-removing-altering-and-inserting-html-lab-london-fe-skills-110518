/* Enter the code to remove the main node element under this comment */
  main.remove()
  
/* Create your new element here and assign it to newHeader */
  var element = document.createElement('h1');
  element.id = 'victory';
  element.innerHTML = 'Nayeon is champion!';
  
  document.body.appendChild(element);