// const apiUrl = 'http://49.50.167.220:3001';
const apiUrl = 'http://localhost:3001/condition';
async function updateCondition() {
  const condition = await getCondition();
  changeConditionDisplay(condition);
}
async function getCondition() {
  const res = await fetch(apiUrl);
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

async function startLearning(name) {
  const res = await fetchLearningStart(name);

  if (res.ok) {
    await updateCondition();
    alert('학습시작');
  } else {
    const body = await res.json();
    if (body.message === '1') {
      alert(`${name}님은 이미 학습중입니다.`);
    } else if (body.message === '2') {
      alert(`다른 사람이 이미 학습중입니다.`);
    } else {
      alert(`오류`);
    }
  }
}

async function fetchLearningStart(name) {
  return await fetch(apiUrl + '/start', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });
}

// fetchLearningStart('이광훈').then(async (res) =>
//   console.log(res.status, await res.json()),
// );

export { updateCondition, startLearning };
