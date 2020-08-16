import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
  background-color: #f7f7f7;
  padding: 10px;
`;

const Text = styled.p`
  text-transform: capitalize;
`;

const Task = ({ name, deleteTask }) => (
  <Container>
    <Text>{name}</Text>
    <Button onClick={deleteTask}>Delete</Button>
  </Container>
);

export default Task;
