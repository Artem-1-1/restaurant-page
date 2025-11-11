import { content } from "./index.js";

function homeRender() {
    const welcome = document.createElement('p');
    welcome.id = 'welcome';
    welcome.textContent = 'Welcome!';
    const title = document.createElement('h1');
    title.textContent = 'Restaurant';
    const sep = document.createElement('hr');
    const text = document.createElement('p');
    text.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dicta, commodi nemo accusamus, libero, harum necessitatibus aut nobis voluptate sunt nihil explicabo. Quasi, fuga cupiditate?';
    content.appendChild(welcome)
    content.appendChild(title);
    content.appendChild(sep);
    content.appendChild(text);
}

export { homeRender};