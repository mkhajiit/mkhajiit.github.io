const loginForm = document.querySelector("#login");
const loginInput = document.querySelector("#login input");
const OBJ_KEY = "UserInfo";
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const weather = document.querySelector(".weather-container"); 
const HIDDEN_CLASSNAME = "hidden";

function saveInfo(){
const USER_ID = {
    userNum: 1,
    userId: "JHY",
    };
    localStorage.setItem(OBJ_KEY,JSON.stringify(USER_ID)); //object는 그대로 storage에 들어가지 않기 때문에 이렇게 사용함 storage에 string으로 들어간다
}

function hideForm(userId){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Welcome!!! ${userId}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    todoList.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
}


function checkInfo(userId){
    const parsedInfo = JSON.parse(localStorage.getItem(OBJ_KEY));
    if(userId === parsedInfo.userId){
        hideForm(userId)
    }
    else{
        alert("Please input JHY");
    }
}

function onLogin(event){
    event.preventDefault();
    const userId = loginInput.value;
    loginInput.value = "";
    checkInfo(userId);
}

saveInfo();
loginForm.addEventListener("submit",onLogin);