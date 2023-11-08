//--- Create a todo factory function  | Information holder
/**
* A factory function to generate todo objects
* @function
* @param {String} title -  Name of the todo
* @param {String} description - Description of the  of the todo task
* @param {Date} dueDate - Date when task is due
* @param {Number} priority - A number to rank how important a task is
* @returns {Object} todo Object - An information holding object for a todo
*/
function todoFactory(title,
    description,
    dueDate,
    priority) {
    const taskID = 1; // Make a random id generator!!!!!!!!!!!
    const catergories = [];
    /** 
     * Get the name of the todo
     * @function
     * @returns {String} title - Name of the todo
     */
    function getTitle() {
        return title;
    };
    /** 
 * Get the ID of the todo
 * @function
 * @returns {Number} taskID - Unique identifier of the todo
 */
    function getId() {
        return taskID;
    };
    /** 
     * Get the description of the todo
     * @function
     * @returns {String} description - Summary of the todo
     */
    function getDescription() {
        return description;
    };
    /** 
     * Get the Due date of the todo
     * @function
     * @returns {Date} dueDate - Date by when the todo must be done
     */
    function getDueDate() {
        return dueDate;
    };
    /** 
     * Get the priority of the todo
     * @function
     * @returns {Number} priority - 0-10 interger representing the importance(10 highest) of the note
     */
    function getPriority() {
        return priority;
    };
    /** 
     * Set the title of the todo
     * @param {String} text - Name of the todo
     * @returns {String} text - Returns the name just assigned
     */
    function setTitle(text) {
        title = text;
        return title;
    };
    /**
     * Set the description of the todo
     * @param {String} text - Short description of the todo
     * @returns {String} description - Returns the description that has just been set
     */
    function setDescription(text) {
        description = text;
        return true;
    };
    /**
     * Set when the todo must be done
     * @param {Date} date - Date by when the todo must be done
     * @returns {Date} dueDate - Return the date that has just been set
     */
    function setDueDate(date) {
        dueDate = date;
        return dueDate;
    };
    /**
     * Set the priority of the todo
     * @param {Number} num - 0-10 interger representing the importance(10 highest) of the note
     * @returns {Number} num - Returns the newly set value
     */
    function setPriority(num) {
        priority = num;
        return priority;
    };
    return {
        getTitle, getId, getDescription, getDueDate, getPriority,
        setTitle, setDescription, setDueDate, setPriority,
    }
}

//--- create a projects factory function | Information holder
/**
 * Represent grouped todo objects based on user defined catergories
 * @function
 * @returns {Object} categories Object - An information holding object to store todo categories
 */
function projectsFactory() {
    const all = new Map();
    const groups = new Map();
    /**
     * Get a specific todo object
     * @function
     * @param {Number} objId - Id to uniquely identify the object
     * @returns {Object} todo - Refence to stored object
     */
    function getTodoById(objId) {
        return all.get(objId);
    }
    /** Get an iterable of all the todo objects across all categories
     * @function
     * @returns {Array} all - An iterable with all todo objects
     */
    function getAll() {
        return all.values();
    };
    /**
     * Save or Update an object
     * @param {Number} id - Unique number to identify the object
     * @param {Object} obj - Object being stored
     * @returns {Object}  -Returns the object just set
     */
    function saveTodo(id, obj) {
        all.set(id, obj)
        return all.get(id);
    }
    /** Get an iterable of all to catergories defined
     * @function
     * @returns {Array} categories - an iterable with all catergory names
     */
    function getCatergoryList() {
        return groups.keys();
    };
    /** Set a category
     * @function
     * @param {String} groupName - String value to set a category name
     */
    function addGroup(groupName) {
        groups.set(groupName, []);
    };
    /** Get an iterable of todos under a specified category
     * @function
     * @param {String} catergory - String category name
     * @returns {Array} todos - an iterable of todo in the specified category
     */
    function getGroup(groupName) {
        return groups.get(groupName);
    };
    /**
     * Delete a specific object
     * @function
     * @param {Number} id - Unique number to identify the object
     */
    function deleteTodoItem(id) {
        groups.delete(id)
    };
    /** Delete a specified category
     * @function
     * @param {String} catergory - String category name
     * @returns {String} group name - Returns the name of the just deleted group
     */
    function deleteGroup(groupName) {
        groups.delete(groupName);
        return groupName;
    };
    /** Delete all categories
     * @function
     */
    function deleteAllGroups() {
        groups.clear();
    }
    return {
        getTodoById,
        getAll,
        saveTodo,
        getCatergoryList,
        addGroup,
        getGroup,
        deleteTodoItem,
        deleteGroup,
        deleteAllGroups
    }
}

//--- create a todoManager factory function | Service providers
/**
 * Todo manager with the CRUD functions
 * @function
 * @param {Function} todoFactory - A todo factory function
 * @param {Object} projectsObj -  An object from a projectFactory
 * @returns {Object} todoManager Object  - Object with crut functions to manage the todos
 */
function todoManager(todoFactory, projectsObj) {
    /**
       * Create the todo object using factory func
       * @function
       * @param {String} title - Name of todo
       * @param {String} description - Description of tod
       * @param {Date} dueDate - Date when task is due
       * @param {Number} priority Integer representation of importance highs=10
       * @returns {Object} todoObj - Returns todo object from the factory
       */
    function createTodo(title,
        description,
        dueDate = undefined,
        priority = 1) {
        const todo = todoFactory(title, description, dueDate, priority);
        saveTodo(todo, projectsObj);
        return todo;
    };
    /**
     * Save an object to the universal Map object
     * @private
     * @function
     * @param {Object} todo - Object to be stored
     * @param {Object} projectsObj -Map object to store todos
     * @returns {Object} todo - Returns saved object object
     */
    function saveTodo(todo, projectsObj) {
        return projectsObj.saveTodo(todo.getId, todo);
    };
    /**
     * Get a todo by its ID from the universal Map object
     * @param {string} id - ID of the todo to retrieve
     * @param {Object} projectsObj - Map object to retrieve todos from
     * @returns {Object} - Returns the todo object with the specified ID 
    */
    function getTodo(id, projectsObj) {
        return projectsObj.getTodoById(id);
    };
    /**
     * Delete a todo by its ID from the universal Map object
     * @param {string} id - ID of the todo to delete
     * @param {Object} projectsObj - Map object to delete todos from
     * @returns {boolean} - Returns true if the todo was successfully deleted, false otherwise 
     */
    function deleteTodo(id, projectsObj) {
        return projectsObj.deleteTodoItem(id);
    }
    return {
        createTodo,
        getTodo,
        saveTodo,
        deleteTodo
    }
}

//--- create a projectsManager factory function | Service provider
