import {todoFactory, projectsFactory, TodoMapFactory, todoManagerFactory} from "./factories.mjs";

const projectsObj = projectsFactory();
const todoMapObj = TodoMapFactory();
const todoObj = todoManagerFactory(todoFactory,
    projectsObj,
    todoMapObj);

/* todoObj.createTodo("Note1", "Initial note");
todoObj.createTodo("Note2", "Lets see");
todoObj.createTodo("Note3", "Final");

console.log(todoMapObj.getSize());
console.log("hello world"); */