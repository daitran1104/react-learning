import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    const {items, onSetStatus} = this.props;
    return (
      <ul>
        {items.map(function(item, key) {
          return <TodoItem key={key} data={item} onSetStatus={onSetStatus}/>
        })}
      </ul>
    );
  }
}
TodoList.propTypes = {
  items: React.PropTypes.array
};
export default TodoList;