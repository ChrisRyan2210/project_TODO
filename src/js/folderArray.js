import todoFolder from "./todoFolder";

const folderList = () => {

    let list = []; // Starts empty

    const addFolder = (id, name) => {
        const newFolder = todoFolder(id, name);
        list.push(newFolder);
    };

    const removeFolder = (id) => {
        list = list.filter(folder => folder.id !== id); // Fix: Properly remove by id
    };

    const getFolders = () => list;

    const getFolderByID = (id) => {
        return list.find(folder => folder.id === id);
    };

    return { getFolders, addFolder, removeFolder, getFolderByID};
};

export default folderList;
