import "./style.css";
import restaurantBackground from "./image/restaurant.jpg"

const content = document.getElementById('content');

function backgroundRender() {
	const body = document.body;
	body.style.backgroundImage = `url('${restaurantBackground}')`;
}

function renderFooter() {
  const footer = document.createElement('footer');
	const text = document.createElement('p');
	text.textContent = 'Development by Artem-1-1';
	footer.appendChild(text);
	document.body.appendChild(footer);
}

document.addEventListener('click', (e) => {
	const target = e.target.innerText;
	console.log(`${target} clicked!`)
})


renderFooter();
backgroundRender();