import React, { Component, Fragment } from 'react';
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class BlogPost extends Component {

    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },

        isUpdate: false,

    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    },
                })
            }, (err) => {
                console.log('eror: ', err);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI();
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: '',
                        body: '',
                        userId: 1
                    },
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                this.getPostAPI()
            })
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })

    }

    handleFormChange = (event) => {
        // console.log('Change click', event.target)
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI();
        }

    }

    handleDetail = (id) => {
        // this.props.history.push(`/detail-post/${id}`);
        window.history.pushState(id, "Detail Post", `/detail-post/${id}`)
        window.history.go(0)
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {

        return (
            <Fragment>
                <p>Halaman Blogpost</p>
                <hr />
                <p className="section-title">BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" row="10" placeholder="add blog content" onChange={this.handleFormChange} ></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }

            </Fragment >

        )
    }
}

export default BlogPost;