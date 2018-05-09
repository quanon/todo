let id = 0;

export const addTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: { task: { ...task, id: id++ } }
  };
};

export const toggleTask = (id) => (
  {
    type: 'TOGGLE_TASK',
    payload: { id }
  }
);
