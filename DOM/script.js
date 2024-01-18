const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.textContent="Hey I'm red!";
container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent="I'm a blue h3!";
container.appendChild(blue);

const divBorder = document.createElement('div');
divBorder.style.border='3px solid black';
divBorder.style.backgroundColor='pink';

const newdiv = document.createElement('h1');
newdiv.textContent="I'm in a div";
divBorder.appendChild(newdiv);

const newPara = document.createElement('p');
newPara.textContent = "ME TOO!";
divBorder.appendChild(newPara);


container.appendChild(divBorder);
