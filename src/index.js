import loadPage from './js/ui/loadPage';
import folderManager from './js/backend/folderManager';
import deleteTask from './js/ui/deleteTasks';

//-----------------dummy data here-----------
folderManager.addFolder(1, "Work");
folderManager.addFolder(2, "Projects");

const workFolder = folderManager.getFolderByID(1);
workFolder.addTask(1, "Homework", "Maths hw", "22/10/25", "Low");
workFolder.addTask(2, "Homework", "History hw", "22/11/25", "High");
console.log(workFolder.getTasks());
// workFolder.removeTask(1);
//--------------------------------------------


loadPage();

