import {exercises} from './exercises.mjs';
import createExerciseCardElement from './common.mjs';

exercises.forEach(exercise => {
    const card = createExerciseCardElement(exercise);
    document.getElementById('cards').appendChild(card);
});
