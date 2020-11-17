export function createField() {
  const gameField = document.createElement('div');
  gameField.classList.add('game__field');

  document.querySelector('body').prepend(gameField);
}
