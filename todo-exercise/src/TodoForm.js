import React, { PropTypes } from 'react';

class TodoForm extends React.Component {
  render() {
    const {inputText, onChange, onSubmit} = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input type="text" value={inputText} onChange={onChange}/>
        <button>Add</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  inputText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default TodoForm;