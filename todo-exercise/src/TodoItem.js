import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {data, onSetStatus} = this.props;
    return (
      <li>
        {data.id}| {data.text}
        {data.completed ? (
          <button onClick={onSetStatus.bind(this, data.id, 'PENDING')}>pending</button>
        ) : (
          <button onClick={onSetStatus.bind(this, data.id, 'COMPLETED')}>completed</button>
        )}
      </li>
    );
  }
}

TodoItem.propTypes = {
  data: React.PropTypes.object.isRequired
};

export default TodoItem;