const initialState = {
  tasks: []
};

export default function tasksReducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_TASK':
      return {
        tasks: state.tasks.concat([payload.task])
      };
    case 'TOGGLE_TASK':
      return {
        tasks: state.tasks.map(task =>
          (task.id === payload.id)
            ? { ...task, done: !task.done }
            : task
        )
      };
    default:
      return state;
  }
}
