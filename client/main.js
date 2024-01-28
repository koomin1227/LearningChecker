import { startLearning, updateCondition } from './condition.js';

document.addEventListener('DOMContentLoaded', async function () {
  await updateCondition();
  document.getElementById('refresh').addEventListener('click', async () => {
    await updateCondition();
  });
  document.querySelectorAll('.start_button').forEach((button) => {
    button.addEventListener('click', async () => {
      const name =
        button.parentNode.parentNode.querySelector('.name').textContent;
      await startLearning(name);
    });
  });
});
