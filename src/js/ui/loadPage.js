// this is used to initially load the page when user opens the app
import '../../assets/css/reset.css';
import '../../assets/css/initial-load.css';
import folderManager from '../backend/folderManager';
import retrieveTasks from './retrieveTasks';
import openModal from './addFolderModal';
import renderSidebar from './renderSidebar';


const loadPage = () => {
    const sidebar = document.querySelector(".sidebar");

        renderSidebar();

       
    };

  


export default loadPage;


