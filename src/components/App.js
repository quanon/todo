import React from 'react';
import { Container, Grid, Input, Button, Checkbox, List } from 'semantic-ui-react'
import './App.css';

export default (props) => {
  let input;

  return (
    <Container className='App'>
      <Grid>
        <Grid.Row centered verticalAlign='middle'>
          <Grid.Column width={6}>
            <Input fluid action placeholder='TODO' ref={node => input = node}>
              <input />
              <Button onClick={() => (
                props.addTask({
                  text: input.inputRef.value,
                  done: true
                })
              )}>追加</Button>
            </Input>
            <List>
              {
                props.tasks.map((task) => (
                  <List.Item key={task.id}>
                    <Checkbox label={task.text} checked={task.done} onClick={() => props.toggleTask(task.id)}/>
                  </List.Item>
                ))
              }
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
