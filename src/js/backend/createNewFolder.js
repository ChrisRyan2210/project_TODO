import folderManager from "./folderManager";

const createNewFolder = (folderName) => {
    const existingFolders = folderManager.getFolders();
    const newFolderID = existingFolders.length > 0 ? Math.max(...existingFolders.map(folder => folder.id)) + 1 : 1;

    folderManager.addFolder(newFolderID, folderName);
    console.log("Updated Folder List:", folderManager.getFolders());
};

export default createNewFolder;
