// this is used to initially load the page when user opens the app
import '../../assets/css/reset.css';
import '../../assets/css/initial-load.css';
import folderManager from '../backend/folderManager';

//testing here
const loadPage = () => {

    const sidebar = document.querySelector(".sidebar");
    document.addEventListener("DOMContentLoaded", () => {

        const folderList = folderManager.getFolders();

        folderList.forEach((folder) => {
            const button = document.createElement("button");
            button.textContent = folder.name;
            button.classList.add("sidebar-button");
            button.setAttribute("data-id", folder.id);
            sidebar.appendChild(button); 
        });
    });
};

export default loadPage;
