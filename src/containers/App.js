import { connect } from 'react-redux';
import App from '../components/App';
import { addTask, toggleTask } from '../actions/tasks';

function mapStateToProps({ tasks }) {
  return {
    tasks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    toggleTask(task) {
      dispatch(toggleTask(task));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
