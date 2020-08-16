import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import NewTaskForm from './components/Form';
import Task from './components/Task';
import { deleteTask } from './actions';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Content = styled.div`
  flex-direction: column;
`;

const App = ({ tasks, dispatch }) => {
  const handleDelete = (task) => {
    dispatch(deleteTask(task));
  };

  return (
    <Container>
      <Content>
        <NewTaskForm />
        <div>
          {tasks.map((task) => (
            <Task
              key={task}
              name={task}
              deleteTask={() => handleDelete(task)}
            />
          ))}
        </div>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default connect(mapStateToProps)(App);
