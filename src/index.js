import loadPage from './js/ui/loadPage';
import loadTasks from './js/ui/loadTasks';
import folderManager from './js/backend/folderManager';

//-----------------dummy data here-----------
folderManager.addFolder(1, "Work");
folderManager.addFolder(2, "Projects");

const workFolder = folderManager.getFolderByID(1);
workFolder.addTask(1, "Homework", "Maths hw", "22/10/25", "Low");
//--------------------------------------------


loadPage();
loadTasks();
