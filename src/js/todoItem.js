//todoItem factory - should accept user entry
const todoItem = (id, title = "Untitled", desc = "", duedate = "No due date", priority = "Normal") => {
    
    return {id, title, desc, duedate, priority };
};

export default todoItem;