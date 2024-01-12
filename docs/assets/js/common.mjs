export default function createExerciseCardElement(exercise) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
<img src="./assets/images/${exercise.title.replace(/ /g, '')}.png" alt="${exercise.title}">
<div class="container">
  <h4><b>${exercise.title}</b></h4>
  <p>${exercise.category}</p>
</div>
`.trim();

    return card;
}
