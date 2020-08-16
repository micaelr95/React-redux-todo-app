import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from './Button';
import { addNewTask } from '../actions';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  background-color: #f7f7f7;
  padding: 10px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  height: 40px;
  border: none;
`;

const NewTaskForm = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTask(value));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Label>Task Name</Label>
        <Input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='Enter task'
        />
      </Group>
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default connect()(NewTaskForm);
