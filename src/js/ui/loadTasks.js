import folderManager from "../backend/folderManager";
import retrieveTasks from "./retrieveTasks";

const loadTasks = () => {
    
    const sidebar = document.querySelector(".sidebar");

    //using event delegation to listen to clicks on the sidebar
    sidebar.addEventListener("click", (e) => {
        if (e.target.classList.contains("sidebar-button")) {
            const folderId = e.target.getAttribute("data-id");
            const folder = folderManager.getFolderByID(parseInt(folderId));
            
            if (folder) {
                retrieveTasks.loadFolderTasks(folder);
            }
        }
    });
};

export default loadTasks;