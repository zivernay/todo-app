import {todoFactory, projectsFactory, TodoMapFactory, todoManagerFactory} from "./factories.mjs";

const projectsObj = projectsFactory();
const todoMapObj = TodoMapFactory();
const todoObj = todoManagerFactory(todoFactory,
    projectsObj,
    todoMapObj);

    