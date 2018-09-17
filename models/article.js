const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Article = new mongoose.Schema({
    post_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: [String],//stores each paragraph i.e. [paragraph1,paragraph2,paragraph3]
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    views: {
        type: Number
    },
    likes: {
        type: Number
    },
    last_edit: {
        type: String
    },
    post_date: {
        type: String,//epoch in ms
        required:true
    },
    updated: {
        type: Date,
        default: Date.now
    },
    author:{
        type: Schema.Types.ObjectId, 
        ref: 'User'
    }
});


module.exports = mongoose.model("Article", Article);
