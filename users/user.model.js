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
                    visible: 'true',
                    delete: 'system'
                }, 
                {
                    label: 'twitter',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'linkedin',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'instagram',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'snapchat',
                    name: '',
                    link: '',
                    visible: 'true',
                },
                {
                    label: 'tiktok',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'whatsapp',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'skype',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'imo',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'youtube',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'googleplus',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
                },
                {
                    label: 'pinterest',
                    name: '',
                    link: '',
                    visible: 'true',
                    delete: 'system'
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