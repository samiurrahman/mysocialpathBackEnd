const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    createdDate: { type: Date, default: Date.now },
    aboutMe: { type: String, default: ''},
    email: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    userdata: {
        facebook: {
            type: String,
            default: ''
        },
        twitter: {
            type: String,
            default: ''
        },
        linkedin: {
            type: String,
            default: ''
        },
        instagram: {
            type: String,
            default: ''
        },
        snapchat: {
            type: String,
            default: ''
        },
        mysicaly: {
            type: String,
            default: ''
        },
        whatsapp: {
            type: String,
            default: ''
        },
        skype: {
            type: String,
            default: ''
        },
        imo: {
            type: String,
            default: ''
        },
        youtube: {
            type: String,
            default: ''
        },
        googleplus: {
            type: String,
            default: ''
        },
        pinterest: {
            type: String,
            default: ''
        }
    }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);