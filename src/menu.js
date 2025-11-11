import { content } from "./index.js";

function menuRender() {
  const title = document.createElement("h1");
  title.textContent = "Menu";
  const sep = document.createElement("hr");

  const sepOne = document.createElement("hr");
  const div1 = document.createElement("div");
  div1.classList.add('menu-list');
  const titleRecipeOne = document.createElement("h2");
  titleRecipeOne.textContent = "Pulled Pork and Cornbread Crouton Salad";
  const recipeTextOne = document.createElement("p");
  recipeTextOne.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi officia assumenda illo? Voluptatum et dicta sint possimus officiis est laborum natus, delectus voluptatibus nesciunt debitis quasi facilis neque maiores iste!"
  const recipePriceOne = document.createElement("h2");
  recipePriceOne.textContent = "20 $";

  const sepTwo = document.createElement("hr");
  const div2 = document.createElement("div");
  div2.classList.add('menu-list');
  const titleRecipeTwo = document.createElement("h2");
  titleRecipeTwo.textContent = "Italian Sausage Tortellini Soup";
  const recipeTextTwo = document.createElement("p");
  recipeTextTwo.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos impedit reiciendis nostrum reprehenderit laboriosam porro accusamus. Aspernatur delectus illum, itaque omnis aliquam at accusamus officiis quasi nulla assumenda dolores possimus."
  const recipePriceTwo = document.createElement("h2");
  recipePriceTwo.textContent = "25 $";

  const sepThree = document.createElement("hr");
  const div3 = document.createElement("div");
  div3.classList.add('menu-list');
  const titleRecipeThree = document.createElement("h2");
  titleRecipeThree.textContent = "Banana Pudding";
  const recipeTextThree  = document.createElement("p");
  recipeTextThree.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt, accusamus provident vitae esse voluptatum libero. Explicabo, nihil unde. Commodi quidem laudantium fugiat! Pariatur libero, ea officiis ratione ullam earum!"
  const recipePriceThree  = document.createElement("h2");
  recipePriceThree.textContent = "30 $";

  content.appendChild(title);
  content.appendChild(sep);

  content.appendChild(titleRecipeOne);
  content.appendChild(recipeTextOne);
  content.appendChild(recipePriceOne);
  content.appendChild(sepOne);

  content.appendChild(titleRecipeTwo);
  content.appendChild(recipeTextTwo);
  content.appendChild(recipePriceTwo);
  content.appendChild(sepTwo);

  content.appendChild(titleRecipeThree);
  content.appendChild(recipeTextThree);
  content.appendChild(recipePriceThree);
  content.appendChild(sepThree);
}

export { menuRender };