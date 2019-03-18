import React, { Component } from 'react';


export default class AddBlog extends Component {
    render() {
        return (
            <div className="form-add-blog">
            <form>
            <div className="item-form item-title">
            <label>Blog Title</label>
        <input id="title-blog" />
            </div>
            <div className="item-form item-thumbnail">
            <label>Blog Thumbnail</label>
        <input type="file" id="title-thumbnail" />
            </div>
            <div className="item-form item-desc">
            <label>Blog Description</label>
        <textarea id="title-desc" ></textarea>
            </div>
            <div className="item-form item-action">
            <button>
            Add Blog
            </button>
            </div>
            </form></div>
        )
    }
}