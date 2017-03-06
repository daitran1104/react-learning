import React from 'react';

class PostDetail extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <div>
                <h3> Detail post: </h3>
                <h5> {data.title} </h5>
                <p> {data.content} </p>
            </div>
        );
    }
}

export default PostDetail;