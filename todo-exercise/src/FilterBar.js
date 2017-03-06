import React from 'react';

class FilterBar extends React.Component {
  render() {
    const {onChange} = this.props;
    return (
      <div>
        <button onClick={onChange.bind(this, 'ALL')}>ALL</button>
        <button onClick={onChange.bind(this, 'COMPLETED')}>Completed</button>
        <button onClick={onChange.bind(this, 'PENDING')}>Pending</button>
      </div>
    );
  }
}

export default FilterBar;