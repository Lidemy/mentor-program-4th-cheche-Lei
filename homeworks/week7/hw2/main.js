// Selectors 選取器們
const questionList = document.querySelector('.FAQ__list');
// Fuction 程式們
function clickQuestion(event) {
  const item = event.target;
  const answerAppear = item.parentNode.nextSibling.nextSibling;
  if (item.classList.contains('question__click')) {
    answerAppear.classList.toggle('answer__appear');
  }
  if (item.classList.contains('answer')) {
    item.classList.remove('answer__appear');
  }
}
// EventListener 監聽器們
questionList.addEventListener('click', clickQuestion);
