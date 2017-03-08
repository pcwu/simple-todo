import React from 'react';
import { compose, withHandlers, withState } from 'recompose';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const enhance = compose(
  withState('value', 'updateValue', props => props.todo.text),
  withHandlers({
    onChange: props => (event) => {
      props.updateValue(event.target.value);
    },
    onSubmit: props => (event) => {
      if (props.value && event.keyCode === 13) {
        if (props.value !== props.todo.text) {
          props.editTodo(props.todo._id, props.value);
        }
        props.setEditing(false);
      }
    },
  }),
);

const TodoEdit = ({ editing, setEditing, value, onChange, onSubmit }) => (
  <div>

    <Dialog
      title="EDIT TODO"
      modal={false}
      open={editing}
      onRequestClose={setEditing}
      contentStyle={{ maxWidth: 420, textAlign: 'center' }}
    >
      <TextField
        name="TodoEdit"
        autoFocus="true"
        onChange={onChange}
        value={value}
        onKeyDown={onSubmit}
      />
    </Dialog>
  </div>
);

export default enhance(TodoEdit);
