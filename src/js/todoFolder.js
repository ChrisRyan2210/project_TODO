import todoItem from "./todoItem";


const todoFolder = (id, name) => {

    let tasks = [];

    const addTask = (id, title, desc, duedate, priority) => {
        const newTask = todoItem(id, title, desc, duedate, priority);
        tasks.push(newTask);
    };

    const removeTask = (id) => {
        tasks = tasks.filter((task) => task.id !== id);
    };

    let getTasks = () => tasks;

    return {id, name, getTasks, removeTask, addTask};
};



export default todoFolder;