import React, { PropTypes } from 'react';

class PostForm extends React.Component
{
    render()
    {
        const {inputForm, onChangeForm, onSubmit} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <label>Title</label><br/>
                <input type="text" value={inputForm.title} onChange={onChangeForm.bind(this, 'title')}/><br/>
                <label>Content</label><br/>
                <textarea rows="4" cols="50" value={inputForm.content} onChange={onChangeForm.bind(this, 'content')}></textarea><br/>
                <button>POST</button>
            </form>
        );
    }
}

PostForm.propTypes = {
    inputForm: PropTypes.object.isRequired,
    onChangeForm: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PostForm;