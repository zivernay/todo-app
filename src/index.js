//--- Create a todo factory function  | Information holder
/**
* A factory function to generate todo objects
* @function
* @params {String} title -  Name of the todo
* @params {String} description - Description of the  of the todo task
* @params {Datetime} dueDate - Date when task is due
* @params {Number} priority - A number to rank how important a task is
* @returns {Object} todo Object - An information holding object for a todo
*/
function todoFactory(title,
    description,
    dueDate,
    priority) {
    /** 
     * Get the name of the todo
     * @function
     * @returns {String} title - Name of the todo
     */
    function getTitle() {
        return title;
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
        getTitle, getDescription, getDueDate, getPriority,
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
    const all = [];
    const groups = {};
    /** Get an array of all the todo objects across all categories
     * @function
     * @returns {Array} all - An Array with all todo objects
     */
    function getAll() {
        return all;
    };
    /** Get an array of all to catergories defined
     * @function
     * @returns {Array} categories - An array with all catergory names
     */
    function getCatergoryList() {
        return Object.keys(groups);
    };
    /** Set a category
     * @function
     * @param {String} groupName - String value to set a category name
     */
    function addGroup(groupName) {
        groups[groupName] = [];
    };
    /** Get an array of todos under a specified category
     * @function
     * @param {String} catergory - String category name
     * @returns {Array} todos - An array of todo in the specified category
     */
    function getGroup(groupName) {
        return groups[groupName];
    };
    /** Delete a specified category
     * @function
     * @param {String} catergory - String category name
     * @returns {String} group name - Returns the name of the just deleted group
     */
    function deleteGroup(groupName) {
        delete groups[groupName];
        return groupName;
    };
    /** Delete all categories
     * @function
     */
    function deleteAllGroups() {
        for (const category of Object.keys(groups)) {
            deleteGroup(category);
        }
    }
    return {
        getAll,
        getCatergoryList,
        addGroup,
        getGroup,
        deleteGroup,
        deleteAllGroups
    }
}
//--- create a todoManager factory function | Service providers
//--- create a projectsManager factory function | Service provider
