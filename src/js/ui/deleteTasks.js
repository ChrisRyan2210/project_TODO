// deleteTasks.js
import folderManager from "../backend/folderManager";

const deleteTasks = () => {
    const taskGrid = document.querySelector(".taskGrid");

    if (!taskGrid) {
        console.error("Error: taskGrid not found in the DOM.");
        return;
    }

    taskGrid.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-id")) {
            const taskId = e.target.getAttribute("data-id");
                removeTask(parseInt(taskId));
        }
    });
};

export default deleteTasks;
