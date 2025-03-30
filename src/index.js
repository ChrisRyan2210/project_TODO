

import loadPage from './js/ui/loadPage';

import folderManager from './js/backend/folderManager';
folderManager.addFolder(1, "Work");
console.log(folderManager.getFolders());

const workFolder = folderManager.getFolderByID(1);
workFolder.addTask(1, "Homework", "Maths hw", "22/10/25", "Low");
console.log(workFolder.getTasks());
loadPage();