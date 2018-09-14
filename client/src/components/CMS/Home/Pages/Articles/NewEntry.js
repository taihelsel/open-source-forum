import React, { Component } from 'react';

class NewEntry extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            tags: "",
            content: "",
            cover: ""
        }
    }
    updateFormValue = (e) => {
        const name = e.currentTarget.getAttribute("name");
        const val = e.currentTarget.value;
        this.setState({
            [name]: val,
        });
    }
    handleSubmit = (e) => {
        let data = {
            title:this.state.title,
            tags:this.state.tags,
            content:this.state.content,
            cover:this.state.cover
        }
        e.preventDefault();
        fetch("/api/article/new/article",{
            method:"POST",
            cache: "no-cache", 
            credentials: "same-origin", 
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            },
            body:JSON.stringify(data)
        });
    }
    render() {
        return (
            <div id="new-entry">
                <form onSubmit={this.handleSubmit} id="new-entry-form">
                    <div className="form-control">
                        <h2 className="input-label">Title</h2>
                        <input onChange={this.updateFormValue} type="text" name="title" value={this.state.title} />
                    </div>
                    <div className="form-control">
                        <h2 className="input-label">Tags</h2>
                        <input onChange={this.updateFormValue} type="text" name="tags" value={this.state.tags} placeholder="separate tags with spaces" />
                    </div>
                    <div id="content-input-wrapper" className="form-control">
                        <h2 className="input-label">Content</h2>
                        <textarea onChange={this.updateFormValue} type="text" value={this.state.content} name="content" />
                    </div>
                    <div className="form-control">
                        <h2 className="input-label">Cover Image</h2>
                        <input onChange={this.updateFormValue} type="text" value={this.state.cover} name="cover" />
                    </div>
                    <input className="form-submit" type="submit" value="Post Article" />
                </form>
            </div>
        );
    }
}

export default NewEntry;
