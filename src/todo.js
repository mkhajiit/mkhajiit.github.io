const TODOFORM = document.getElementById("todo-form");
const TODOINPUT = TODOFORM.querySelector("input");
const TODOLIST = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let TODOS = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(TODOS)); //JSON.stringify: array나 object를 string으로 만들어주는 코드
}

function deleteToDo(event){ //이벤트가 발생한 element의 부모 element를 지워서 삭제하는 함수
    const deleteElement = event.target.parentElement; //이벤트가 발생한 element의 부모를 찾아서 변수에 할당하는 코드
    deleteElement.remove();
    TODOS = TODOS.filter( (todo)=> todo.id !== Number(deleteElement.id) );
    saveToDos();
}
function paintToDo(newTodoObj){
    const list = document.createElement("li");
    list.id = newTodoObj.id;
    const SPAN = document.createElement("span");
    const BUTTON = document.createElement("button");
    list.appendChild(SPAN);
    list.appendChild(BUTTON);
    SPAN.innerText = newTodoObj.text;
    BUTTON.innerText = "Delete";
    TODOLIST.appendChild(list);

    BUTTON.addEventListener("click",deleteToDo);
}
function handleToDoSubmit(event){ //input의 value를 입력받고 input의 입력창에 입력된 값을 비워야함
    event.preventDefault(); 
    const newTodo = TODOINPUT.value; //input의 value를 비우기전에 그 값을 사용하기 위해 새로운 변수에 저장
    TODOINPUT.value = ""; //input의 value를 비움
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    TODOS.push(newTodoObj);
    paintToDo(newTodoObj); 
    saveToDos();
}

TODOFORM.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    TODOS = parsedToDos;
    parsedToDos.forEach(paintToDo);
}