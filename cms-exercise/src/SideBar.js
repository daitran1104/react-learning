import React, { PropTypes } from 'react';

class SideBar extends React.Component
{
    render()
    {
        const {items, onCreatePost} = this.props;

        return (
            <div>
                <button onClick={onCreatePost.bind(this)}>Create</button>
                {items.map(this.renderPost.bind(this))}
            </div>
        );
    }
    renderPost(item, key) {
        const {showDetail} = this.props;
        return (
            <li key={key} onClick={showDetail.bind(this, item.id)}>
                    {item.title}
            </li>
        );
    }
}

SideBar.propTypes = {
    items: PropTypes.array,
    onCreatePost: PropTypes.func,
    showDetail: PropTypes.func

};

export default SideBar;