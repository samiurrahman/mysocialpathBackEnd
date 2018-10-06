const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, default: '' },
    lastName: { type: String, default: '' },
    createdDate: { type: Date, default: Date.now },
    aboutMe: { type: String, default: ''},
    email: { type: String, required: true },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    provider: { type: String, default: 'self' },
    bookmarked: { type: String, default: '' },
    userdata: {
        type: Array,
        default: [
                { 
                    label: 'facebook',
                    name: '',
                    link: '',
                    order: '',
                }, 
                {
                    label: 'twitter',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'linkedin',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'instagram',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'snapchat',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'mysicaly',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'whatsapp',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'skype',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'imo',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'youtube',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'googleplus',
                    name: '',
                    link: '',
                    order: '',
                },
                {
                    label: 'pinterest',
                    name: '',
                    link: '',
                    order: '',
                }
                
            ] 
    },
    bookmark: [
        {
            name: { type: String },
            username: { type: String },
        }
    ]
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);