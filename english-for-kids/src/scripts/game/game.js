export function game() {
  const cardStatus = [localStorage.getItem('game')];
  if (!localStorage.getItem('oneGame')) {
    localStorage.setItem('oneGame', JSON.stringify(cardStatus));
  } else {
    let answers = JSON.parse(localStorage.getItem('oneGame'));
    answers.push(...cardStatus);
    localStorage.setItem('oneGame', JSON.stringify(answers));
  }

  let result = [];

  for (let i = 0; i < localStorage.getItem('oneGame').length; i += 1) {
    if (localStorage.getItem('oneGame')[i] === 'true') {
      result.push('true');
    }
  }

  if (result.length === 8) {
    localStorage.removeItem('oneGame');
  }
}
