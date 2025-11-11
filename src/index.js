import "./style.css";
import restaurantBackground from "./image/restaurant.jpg"
import { aboutRender } from "./about.js";
import { menuRender } from "./menu.js";
import { homeRender } from "./home.js";

const content = document.getElementById('content');

function backgroundRender() {
	const body = document.body;
	body.style.backgroundImage = `url('${restaurantBackground}')`;
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.id = "footer";
  if (document.getElementById('footer')) {
	return;
  }
  const text = document.createElement('p');
  text.textContent = 'Development by Artem-1-1';
  footer.appendChild(text);
  document.body.appendChild(footer);
}

function home() {
	content.innerHTML = "";
	backgroundRender();
	homeRender();
	renderFooter();
}

function menu() {
	content.innerHTML = "";
	menuRender();
}

function about() {
	content.innerHTML = "";
	aboutRender();
}

document.addEventListener('click', (e) => {
	const target = e.target.innerText;
	
	if (target === 'Home') home();
	if (target ==='Menu') menu();
	if (target === 'About') about();
})

document.addEventListener('DOMContentLoaded', home());

export { content };