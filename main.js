document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.todo');
  todo(container);
})
function todo(container){
  container.innerHTML = `
  <h1>ToDo</h1>  
  <ul></ul>
  <h3>0 Done</h3>
  <form>
  <input type='text' name='text'/>
  <button type='submit'>Add</button> 
  </form>
  `  
const form = container.querySelector('form');
const list = container.querySelector('ul');
const done = container.querySelector('h3');

form.addEventListener('submit', (event) => {
event.preventDefault();
const input = form.elements["text"];
// const input = form.elements["text"] as HTMLInputElement;
addItem(input.value);
form.reset();
});

function addItem(itemText){
  const item = document.createElement('li');
  item.appendChild(document.createTextNode(itemText));

  const check = document.createElement('input');
  check.type = 'checkbox';
  check.addEventListener('change', () => recount())
  item.appendChild(check);

  const button = document.createElement('button');
  button.textContent  = "Delete";
  item.appendChild(button);
  button.addEventListener('click',() => {
    list.removeChild(item);
    recount();
  } )

  list.appendChild(item);
}

function recount(){
  const count = list.querySelectorAll('input:checked').length;
  done.textContent = `${count} Done`;
}

};
