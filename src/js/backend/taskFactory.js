//todoItem factory - should accept user entry
const taskFactory = (taskId, title = "Untitled", desc = "", duedate = "No due date", priority = "Normal") => {
    
    return {taskId, title, desc, duedate, priority };
};

export default taskFactory;