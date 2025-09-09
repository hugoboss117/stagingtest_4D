import { stages } from './stages.js';

const slider = document.getElementById('stage-slider');
const imageEl = document.getElementById('stage-image');
const nameEl = document.getElementById('stage-name');
const dateEl = document.getElementById('stage-date');

slider.max = stages.length - 1;

function showStage(index) {
  const stage = stages[index];
  imageEl.src = stage.image;
  nameEl.textContent = stage.name;
  dateEl.textContent = stage.date;
}

slider.addEventListener('input', (e) => showStage(e.target.value));

// Initialize with the first stage
showStage(0);
