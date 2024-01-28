const apiUrl = 'http://49.50.167.220:3001';

async function updateCondition() {
  const condition = await getCondition();
  changeConditionDisplay(condition);
}
async function getCondition() {
  const res = await fetch(apiUrl + '/condition');
  const body = await res.json();
  return body.condition;
}

function changeConditionDisplay(condition) {
  const conditionTitle = document.getElementById('condition_title');
  const conditionLight = document.getElementById('condition_light');
  if (condition == null) {
    conditionTitle.textContent = '아무도 듣지 않음';
    conditionLight.style.backgroundColor = '#e75555';
  } else {
    conditionTitle.textContent = `${condition} 님이 학습중`;
    conditionLight.style.backgroundColor = '#2EC97A';
  }
}

export { updateCondition };
