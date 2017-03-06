import React from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import FilterBar from './FilterBar';

class RootApp extends React.Component {
  state = {
    inputText: '',
    todos: [],
    filter: 'ALL' // ALL | COMPLETE | PENDING
  }
  handleFormChange(event) {
    this.setState({ inputText: event.target.value });
  }
  handleSubmitForm(event) {
    event.preventDefault();
    const todos = this.state.todos;
    todos.push({
      id: todos.length + 1,
      text: this.state.inputText,
      completed: false
    });
    this.setState({
      todos: todos,
      inputText: ''
    });
  }
  handleFilter(filterType) {
    this.setState({ filter: filterType });
  }
  getFilterableTodos() {
    const self = this;
    return this.state.todos.filter(function (todo) {
      switch (self.state.filter) {
        case 'COMPLETED':
          return todo.completed === true;
        case 'PENDING':
          return todo.completed === false;
        default:
          return true;
      }
    });
  }
  handleSetTodoStatus(todoID, status) {
    let todos = this.state.todos;

    todos = todos.map(todo => {
      if (todo.id !== todoID) return todo;
      todo.completed = status === "COMPLETED" ? true : false;
      return todo;
    });
    this.setState({ todos: todos });
  }
  render() {
    return (
      <div>
        <Header />
        <TodoForm inputText={this.state.inputText}
          onChange={this.handleFormChange.bind(this)}
          onSubmit={this.handleSubmitForm.bind(this)} />
        <TodoList 
          items={this.getFilterableTodos()} 
          onSetStatus={this.handleSetTodoStatus.bind(this)} 
        />
        <FilterBar onChange={this.handleFilter.bind(this)} />
      </div>
    );
  }
}

export default RootApp;