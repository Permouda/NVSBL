const  mongoose = require('mongoose');
const { model, Schema} = mongoose;

const User = new Schema({
    name: {type: String},
    bio: {type: String},
    email:{type: String, required: true, unique: true},
    avatar: {type: String, default: 'https://www.svgrepo.com/show/137325/avatar.svg'},
    password: {type: String, required: true},
    role:{type: String, enum: ['Creator', 'Brand', 'Agency','admin'], default: 'Creator'},
    handle: {type:String, required: true, unique: true},
    links: [{
        url: {type: String},
        title: {type: String},
        icon: {type: String},
    }],
    socialMedia: {
        facebook: {type: String},
        twitter: {type: String},
        instagram: {type: String},
        linkedin: {type: String},
        youtube: {type: String},
        github: {type: String},
        behance: {type: String},
        dribbble: {type: String},
        medium: {type: String},
        pinterest: {type: String},
    }

}, {collection: 'user-data-linktree'});

const userModel = model('userData', User);

module.exports = userModel;