import { content } from "./index.js";

function aboutRender() {
    const title = document.createElement('h1');
    title.textContent = 'About';
    const sep = document.createElement('hr');
    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sit temporibus a officiis! Quae ex culpa nobis distinctio soluta modi molestiae voluptatem esse! Quia, hic. Atque dolorum eum debitis. Voluptatem!'
    content.appendChild(title);
    content.appendChild(sep);
    content.appendChild(text);
    content.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}

export { aboutRender };