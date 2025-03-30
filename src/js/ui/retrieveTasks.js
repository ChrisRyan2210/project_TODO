
const retrieveTasks = (() => {

    const content = document.querySelector(".content");

    const loadFolderTasks = (folder) => {

        content.innerHTML = '';

        const title = document.createElement("div");
        title.textContent = `Tasks in ${folder.name}`;
        content.appendChild(title);

        const taskList = document.createElement("div");
        taskList.classList.add("taskList");
        folder.getTasks().forEach(task => {
            const taskTitle = document.createElement("h3");
            taskTitle.textContent = task.title;
            taskList.appendChild(taskTitle);
            // do the rest of the properties here
            const taskDesc = document.createElement("p");
            taskDesc.textContent = `Description: ${task.desc}`;
            taskList.appendChild(taskDesc);

            const taskDueDate = document.createElement("p");
            taskDueDate.textContent = `Due: ${task.duedate}`;
            taskList.appendChild(taskDueDate);

            const priority = document.createElement("p");
            priority.textContent = `Priority: ${task.priority}`;
            taskList.appendChild(priority);
        });

        content.appendChild(taskList);
    }
    return { loadFolderTasks };
})();

export default retrieveTasks;