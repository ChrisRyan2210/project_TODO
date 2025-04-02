import createNewFolder from "../backend/createNewFolder";
import loadPage from "./loadPage";
import renderSidebar from "./renderSidebar";

const openModal = () => {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.innerHTML = `
        <h2>Add New Folder</h2>
        <input type="text" id="folderName" placeholder="Folder Name" required>
        <button type="submit" id="enter">Save</button>
        <button type="button" id="closeModal">Cancel</button>
    `;

    modal.appendChild(form);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);

    // Close modal on "Cancel" button click
    form.querySelector("#closeModal").addEventListener("click", () => {
        modalOverlay.remove();
    });

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting and reloading page

        const folderName = form.querySelector("#folderName").value.trim();
        if (folderName) {
            createNewFolder(folderName);
            modalOverlay.remove(); // Remove the modal after folder is created
            renderSidebar();
        }
    });
};

export default openModal;
