import React, { PropTypes } from 'react';

class PostForm extends React.Component
{
    render()
    {
        const {inputTitle, inputContent, onChangeTitle, onChangeContent, onSubmit} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <label>Title</label><br/>
                <input type="text" value={inputTitle} onChange={onChangeTitle}/><br/>
                <label>Content</label><br/>
                <textarea rows="4" cols="50" value={inputContent} onChange={onChangeContent}></textarea><br/>
                <button>POST</button>
            </form>
        );
    }
}

PostForm.propTypes = {
    inputTitle: PropTypes.string.isRequired,
    inputContent: PropTypes.string.isRequired,
    onChangeTitle: PropTypes.func.isRequired,
    onChangeContent: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PostForm;