
const todoList = [{
  name: 'Learn JavaScript',
  date: '2015-12-01'
},{
  name: 'Learn CSS',
  date: '2015-12-02'
}];


const buttonElement = document.querySelector('.js-button');
renderTodoList(todoList);
function renderTodoList(todoList) {
  let todoItems = '';
  todoList.forEach((todoObject,index) =>{
    const{name,date} = todoObject;
    const todoAdd = `<div >${name} </div>
                       <div> ${date} </div>
                         <button class="js-todo-delete st-delete" >Delete</button> 
               `;
    todoItems += todoAdd;

});

document.querySelector('.js-todo-container').innerHTML = todoItems;

document.querySelectorAll('.js-todo-delete').forEach((value, index) => {
  value.addEventListener('click', () => {
    todoList.splice(index, 1);
    renderTodoList(todoList);
  });
});
}


function todoDisplay(){
  const inputElement = document.querySelector('.js-todo-button');
  const inputElementDate = document.querySelector('.js-date-button');
  const name = inputElement.value;
  const date = inputElementDate.value;


    todoList.push({
     name,
     date
    });
    inputElement.value ='';
    renderTodoList(todoList);

  
}




buttonElement.addEventListener('click', todoDisplay);
  
