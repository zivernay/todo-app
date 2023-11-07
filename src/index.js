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
    function getTitle() {
        return title;
    };
    function getDescription() {
        return description;
    };
    function getDueDate() {
        return dueDate;
    };
    function getPriority() {
        return priority;
    };
    function setTitle(text) {
        title = text;
        return true;
    };
    function setDescription(text) {
        description = text;
        return true;
    };
    function setDueDate(date) {
        dueDate = date;
        return true;
    };
    function setPriority(num) {
        priority = num;
        return true;
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
    function deleteAllGroups(){
        for (const category of Object.keys(groups)){
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
