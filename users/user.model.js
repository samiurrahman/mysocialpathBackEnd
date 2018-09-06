const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    userdata: {
        male: {
            type: String,
            default: 'Male'
        },
        aboutMe: {
            type: String,
            default: 'I am Software engineer at Morningstar.'
        },
        email: {
            type: String,
            default: 'samiurrahman.shaikh@gmail.com'
        },
        facebook: {
            type: String,
            default: 'samiurrahman.shaikh'
        },
        twitter: {
            type: String,
            default: 'Samiur11'
        },
        linkedin: {
            type: String,
            default: 'Samiurrahman.shaikh'
        },
        instagram: {
            type: String,
            default: 'Samiurra'
        },
        snapchat: {
            type: String,
            default: 'Samiur114'
        },
        mysicaly: {
            type: String,
            default: 'Samiur0011'
        },
        whatsapp: {
            type: String,
            default: '8087240710'
        },
        skype: {
            type: String,
            default: 'Samiurrahman9'
        },
        imo: {
            type: String,
            default: 'Samiurrahman'
        },
        youtube: {
            type: String,
            default: 'Samiurrahman.shaikh'
        }
    }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);