import folderFactory from "../backend/folderFactory";

const removeTaskHandler = () => {
    const taskGrid = document.querySelector(".taskGrid");

    if (!taskGrid) {
        console.error("Error: taskGrid not found in the DOM.");
        return;
    }

    taskGrid.addEventListener("click", (e) => {
        if (e.target.hasAttribute("data-id")) {
            const taskId = e.target.getAttribute("data-id");
            folderFactory.removeTask(parseInt(taskId));
        }
    });
};

export default removeTaskHandler;
