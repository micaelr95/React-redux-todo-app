export const addNewTask = (newTask) => ({
  type: 'ADD_NEW_TASK',
  newTask,
});

export const deleteTask = (task) => ({
  type: 'DELETE_TASK',
  task,
});
