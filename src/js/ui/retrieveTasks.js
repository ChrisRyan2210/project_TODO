import '../../assets/css/taskContent.css';
import folderFactory from '../backend/folderFactory';

const retrieveTasks = (() => {

    const content = document.querySelector(".content");

    const loadFolderTasks = (folder) => {
        content.innerHTML = '';

        const title = document.createElement("div");
        title.classList.add("taskTitle");
        title.textContent = `Tasks in ${folder.name}`;
        content.appendChild(title);

        const taskGrid = document.createElement("div");
        taskGrid.classList.add("taskGrid");

        folder.getTasks().forEach(task => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("taskCard");

            const taskTitle = document.createElement("h3");
            taskTitle.textContent = task.title;
            taskCard.appendChild(taskTitle);

            const taskDesc = document.createElement("p");
            taskDesc.textContent = `Description: ${task.desc}`;
            taskCard.appendChild(taskDesc);

            const taskDueDate = document.createElement("p");
            taskDueDate.textContent = `Due: ${task.duedate}`;
            taskCard.appendChild(taskDueDate);

            const priority = document.createElement("p");
            priority.textContent = `Priority: ${task.priority}`;
            taskCard.appendChild(priority);

            const removeButton = document.createElement("button");
            removeButton.textContent = "Delete";
            removeButton.setAttribute("data-id", task.taskId);
            taskCard.appendChild(removeButton);
            
            taskGrid.appendChild(taskCard);
        });

        taskGrid.addEventListener("click", (e) => {
            if (e.target.hasAttribute("data-id")) {
                const taskId = e.target.getAttribute("data-id");
                folder.removeTask(parseInt(taskId));
            }
        });

        content.appendChild(taskGrid);
    }
    return { loadFolderTasks };
})();

export default retrieveTasks;