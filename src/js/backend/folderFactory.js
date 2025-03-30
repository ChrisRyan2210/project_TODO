import taskFactory from "./taskFactory";

const folderFactory = (id, name) => {

    let tasks = [];

    const addTask = (taskId, title, desc, duedDate, priority) => {
        const task = taskFactory(taskId, title, desc, duedDate, priority);
        tasks.push(task);
    };

    const removeTask = (taskId) => {
        tasks = tasks.filter(task => task.taskId != taskId);
    };

    const getTasks = () => tasks;
    
    return {id, name, addTask, removeTask, getTasks};
};

export default folderFactory;