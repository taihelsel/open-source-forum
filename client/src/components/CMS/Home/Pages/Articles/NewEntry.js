import React from 'react';

const NewEntry = (props) => (
    <div id="new-entry">
        <form id="new-entry-form" action="/api/article/new" method="POST">
        <div className="form-control">
                <h2 className="input-label">Title</h2>
                <input type="text" name="title"/>
            </div>
            <div className="form-control">
                <h2 className="input-label">Tags</h2>
                <input type="text" name="tags" placeholder="separate tags with spaces"/>
            </div>
            <div id="content-input-wrapper" className="form-control">
                <h2 className="input-label">Content</h2>
                <textarea type="text" name="content"/>
            </div>
            <div className="form-control">
                <h2 className="input-label">Cover Image</h2>
                <input type="text" name="cover"/>
            </div>
            <input className="form-submit" type="submit" value="Post Article"/>
        </form>
    </div>
);

export default NewEntry;
