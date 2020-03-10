let inputValue = document.getElementById("todoInput")
let todoList = [];

// let addItem = () => {
//     let todoValue = inputValue.value;
//     todoList.push(todoValue);
//     render()

// }
let addItem = () => {
    let value = inputValue.value;
    let todoObject = {text: value, isDone: false};
    todoList.push(todoObject);
    render()
}
let removeItem = (index) => {
    todoList.splice(index, 1)
    render()
}
let toggleDone = (i) => {
    todoList[i].isDone = !(todoList[i].isDone);
    render()
    // todoList[0].isDone
}


let render = () => {
    
    let htmlTodoArray = todoList.map((eachElementofToDoList,index) => {
        return `<li>${eachElementofToDoList.text} <button onclick="removeItem(${index})">Remove</button> <button onclick="toggleDone(${index})">Toggle</button></li> || marked as done ${eachElementofToDoList.isDone}`
    }).join('');
    document.getElementById('resultArea').innerHTML = htmlTodoArray;
}


// let render = () => {
//     let htmlTodoArray = todoList.map((eachElementofToDoList,index) => {
//         if (eachElementofToDoList.isDone == false) {
//             return <li>${eachElementofToDoList.text} <button onclick="removeItem(${index})">X</button>  <button onclick="toggleDone(${index})">isDone</button> </li>}
//         else {
//             return <li>${eachElementofToDoList.text} <button onclick="removeItem(${index})">X</button>  <button onclick="toggleDone(${index})">isNotDone</button> </li>}
//         }).join('');
//     document.getElementById('resultArea').innerHTML = htmlTodoArray;
// }









