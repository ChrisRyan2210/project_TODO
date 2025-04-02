import openModal from './addFolderModal';
import folderManager from "../backend/folderManager";
import retrieveTasks from "./retrieveTasks";

const renderSidebar = () => {
    const sidebar = document.querySelector(".sidebar");  // Make sure sidebar is defined here

    sidebar.innerHTML = ""; // Clear existing buttons

    const folderList = folderManager.getFolders();
    folderList.forEach((folder) => {
        const button = document.createElement("button");
        button.textContent = folder.name;
        button.classList.add("sidebar-button");
        button.setAttribute("data-id", folder.id);
        button.addEventListener("click", () => {
            retrieveTasks.loadFolderTasks(folder);
        });
        sidebar.appendChild(button);
    });

    // Add the "add folder" button
    const addFolderButton = document.createElement("button");
    addFolderButton.textContent = "+";
    addFolderButton.classList.add("add-folder-button");
    addFolderButton.addEventListener("click", () => {
        openModal();  // Open modal to add new folder
    });

    sidebar.appendChild(addFolderButton);
};

export default renderSidebar;
