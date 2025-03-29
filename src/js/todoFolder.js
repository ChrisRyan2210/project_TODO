import todoItem from "./todoItem";

const todoFolder = (id, name) => {

    let tasks = [];

    const addTask = (task) => {
        const newTask = task instanceof Object ? task : todoItem(...task);
        tasks.push(newTask);
    };

    const removeTask = (id) => {
        tasks = tasks.filter((task) => task.id !== id);
    };

    const getTasks = () => tasks;


    return {id, name, getTasks, removeTask, addTask};
};



export default todoFolder;