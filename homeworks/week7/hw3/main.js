// Selectors 選取器們
const todoInput = document.querySelector('.todo_input');
const todoSubmitBotton = document.querySelector('.todo_submit_button');
const todoList = document.querySelector('.todo_list_section');
// Fuction 程式們
// 當 submit 送出紐被按下時
function addTodo(event) {
  event.preventDefault();
  // 先創造一個新 todo 列
  const newList = document.createElement('div');
  newList.classList.add('todo_list_div');
  // 加入 list 內容
  const todo = document.createElement('li');
  todo.classList.add('todo');
  todo.innerText = todoInput.value;
  newList.appendChild(todo);
  // 加入 finish 完成鍵
  const finish = document.createElement('button');
  finish.classList.add('finish');
  finish.innerHTML = '<i class="far fa-check-square fa-2x"></i>';
  newList.appendChild(finish);
  // 加入 trash 垃圾桶
  const trash = document.createElement('button');
  trash.classList.add('trash');
  trash.innerHTML = '<i class="far fa-trash-alt fa-2x"></i>';
  newList.appendChild(trash);
  // 把新 todo 列放進 todoList 當中
  todoList.appendChild(newList);
  // 放好後將原來的 input 清空，方便下次
  todoInput.value = '';
}
// 當 todoList 任何一點被按到時
function checkDelete(event) {
  const item = event.target;
  // 按到 trash 且把 todo 刪除
  if (item.classList[1] === 'fa-trash-alt') {
    const buttonTrash = item.parentNode;
    const todo = buttonTrash.parentNode;
    todo.remove();
  }
  // 按到 finish/check 且把 todo 淡化
  if (item.classList[1] === 'fa-check-square') {
    const buttonFinish = item.parentNode;
    const todo = buttonFinish.parentNode;
    todo.classList.toggle('opacity');
  }
}
// EventListener 監聽器們
// 當 submit 送出鍵被按下時
todoSubmitBotton.addEventListener('click', addTodo);
// 當 todoList 任何一點被按到時
todoList.addEventListener('click', checkDelete);
