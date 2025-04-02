import folderFactory from "./folderFactory";

const folderManager = (() => {
    
    let folders = [];  // List to hold all folders

    // Add a folder to the list
    const addFolder = (id, name) => {
        const newFolder = folderFactory(id, name); //calls the folderFactory
        folders.push(newFolder); 
    };
    
    // Remove a folder by ID
    const removeFolder = (id) => {
        folders = folders.filter(folder => folder.id !== id);
    };

    // Get all folders
    const getFolders = () => folders;

    // Get a folder by ID
    const getFolderByID = (id) => {
        return folders.find(folder => folder.id === id);
    };

    return {
        addFolder,
        removeFolder,
        getFolders,
        getFolderByID,
    };
})();

export default folderManager;
