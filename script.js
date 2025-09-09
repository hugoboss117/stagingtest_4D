const slider = document.getElementById('stage-slider');
const imageEl = document.getElementById('stage-image');
const nameEl = document.getElementById('stage-name');
const dateEl = document.getElementById('stage-date');

function showStage(index) {
  const stage = stages[index];
  imageEl.src = stage.image;
  nameEl.textContent = stage.name;
  dateEl.textContent = stage.date;
}

function snapToStage(value) {
  let nearestIndex = 0;
  for (let i = 1; i < stages.length; i++) {
    if (Math.abs(stages[i].position - value) < Math.abs(stages[nearestIndex].position - value)) {
      nearestIndex = i;
    }
  }
  slider.value = stages[nearestIndex].position;
  showStage(nearestIndex);
}

slider.addEventListener('input', (e) => snapToStage(parseFloat(e.target.value)));

// Initialize slider range and first stage
slider.min = 0;
slider.max = 100;
slider.step = 0.1;
slider.value = stages[0].position;
showStage(0);
