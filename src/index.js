//--- create a todo factory function  | Information holder
/*
    A factory function to generate todo objects
    @params {String} title -  Name of the todo
    @params {String} description - Description of the  of the todo task
    @params {Datetime} dueDate - Date when task is due
    @params {Number} priority - A number to rank how important a task is
*/
function todoFactory(title,
        description,
        dueDate,
        priority) {
            function getTitle(){
                return title;
            };
            function getDescription(){
                return description;
            };
            function getDueDate(){
                return dueDate;
            };
            function getPriority(){
                return priority;
            };
            function setTitle(text){
                title = text;
                return true;
            };
            function setDescription(text){
                description = text;
                return true;
            };
            function setDueDate(date){
                dueDate = date;
                return true;
            };
            function setPriority(num){
                priority = num;
                return true;
            };
            return {
                getTitle, getDescription, getDueDate, getPriority,
                setTitle, setDescription, setDueDate, setPriority,
            }
        }
//--- create a projects factory function | Information holder
//--- create a todoManager factory function | Service providers
//--- create a projectsManager factory function | Service provider
 