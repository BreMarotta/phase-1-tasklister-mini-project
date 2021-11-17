document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addItem(e.target.todo.value)
    form.reset()
  })
  const todo = document.querySelector('#new-task-description');
});
//As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

function addItem(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', deleteItem)
  btn.textContent = "x"
  p.textContent = `${todo} `
  p.appendChild(btn)
  document.querySelector('#tasks').appendChild(p)
}

function deleteItem(e){
  e.target.parentNode.remove()
}
