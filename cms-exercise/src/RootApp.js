import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import PostForm from './PostForm';
import PostDetail from './PostDetail';

class RootApp extends React.Component {
    state = {
        isShowForm: true,
        posts: [],
        form: {},
        post: null,
        inputTitle: '',
        inputContent: ''
    }

    // handleTitleChange(event) {
    //     this.setState({ inputTitle: event.target.value});
    // }

    // handleContentChange(event) {
    //     this.setState({ inputContent: event.target.value });
    // }

    handleChangeElement(field, event) {
        let form = Object.assign({}, this.state.form, {
            [field]: event.target.value
        });
        this.setState({form: form});
    }

    handleSubmitPostForm(event) {
        event.preventDefault();
        const posts = this.state.posts;

        posts.push({
            id:posts.length + 1,
            title: this.state.form.title,
            content: this.state.form.content
        });

        this.setState({
            posts: posts,
            form: {}
        });
        console.log(posts);
    }

    handleClickCreatePost(event) {
        this.setState({ isShowForm: true });
    }

    showDetail(postId) {
        let posts = this.state.posts;

        const post =  posts.find(post => post.id === postId);
        this.setState({
            isShowForm: false,
            post: post
        })
    }

    render()
    {
        return (
            <div>
                <Header/>
                <SideBar 
                    items={this.state.posts}
                    onCreatePost={this.handleClickCreatePost.bind(this)}
                    showDetail={this.showDetail.bind(this)}
                    />

               {!this.state.isShowForm && this.state.post ? (
                <PostDetail data={this.state.post}/>
                ) : <PostForm inputForm = {this.state.form}
                   onChangeForm = {this.handleChangeElement.bind(this)}
                   onSubmit = {this.handleSubmitPostForm.bind(this)} />
               }
            </div>
        );
        
    }
}

export default RootApp;