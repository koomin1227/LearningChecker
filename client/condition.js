const apiUrl = 'http://49.50.167.220:3001/condition';
const updateDateText = document.getElementById('update_date');
const conditionTitle = document.getElementById('condition_title');
const conditionLight = document.getElementById('condition_light');
async function updateCondition() {
  const condition = await getCondition();
  changeConditionDisplay(condition);
  changeUpdateDate();
}

function changeUpdateDate() {
  // const updateDateText = document.getElementById('update_date');
  const updateDate = getCurrentDateTimeString();
  updateDateText.textContent = `업데이트: ${updateDate}`;
}

function getCurrentDateTimeString() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
async function getCondition() {
  const res = await fetch(apiUrl);
  const body = await res.json();
  return body.condition;
}

function changeConditionDisplay(condition) {
  if (condition == null) {
    conditionTitle.textContent = '아무도 듣지 않음';
    conditionLight.style.backgroundColor = '#e75555';
  } else {
    conditionTitle.textContent = `${condition} 님이 학습중`;
    conditionLight.style.backgroundColor = '#2EC97A';
  }
}

async function startLearning(name) {
  const res = await fetchLearning(name, '/start');

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

async function endLearning(name) {
  const res = await fetchLearning(name, '/end');

  if (res.ok) {
    await updateCondition();
    alert('학습종료');
  } else {
    const body = await res.json();
    if (body.message === '3') {
      alert(`${name}님은 학습중이 아닙니다.`);
    } else {
      alert(`오류`);
    }
  }
}

async function fetchLearning(name, api) {
  return await fetch(apiUrl + api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });
}

export { updateCondition, startLearning, endLearning };
