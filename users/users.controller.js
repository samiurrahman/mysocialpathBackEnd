const express = require('express');
const router = express.Router();
const userService = require('./user.service');
aws = require('aws-sdk'), // ^2.2.41
multer = require('multer'), // "multer": "^1.1.0"
multerS3 = require('multer-s3'); //"^1.4.1"

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.post('/search', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.post('/bookmark', bookmark);
router.post('/upadepassword', upadepassword);
router.delete('/:id', _delete);
router.post('/resetpassword', resetpassword);
router.post('/singleUser', singleUser);
router.post('/socialRegister', socialRegister);
router.post('/imageUpload', imageUpload);
router.post('/imageUrlUpdate', imageUrlUpdate);

module.exports = router;

aws.config.update({
    secretAccessKey: 'VCc5mbu0yYhOSAY2ZhRZfWBuX3S+E/obCB0FIeW6',
    accessKeyId: 'AKIAILLUODFEJKNBWS2A',
    region: 'ap-south-1',
});
const s3 = new aws.S3();
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        return cb(new Error('file is invilid'));
    }
}

function imageUpload (req, res, next) {
    var upload = multer({
        limits: {
            fileSize: 300 * 300 * 1 // we are allowing only 1 MB files
        },
        fileFilter: fileFilter,
        storage: multerS3({
            s3: s3,
            bucket: 'www.socialcob.com',
            key: function (req, file, cb) {
                const newFileName = Date.now() + "-" + file.originalname;
                fullPath = 'assets/users/'+ newFileName;
                cb(null, fullPath); //use Date.now() for unique file keys
            }
        })
    }).single('upl',1)
    upload(req, res, function(err) {
        if (req.file) {
            res.send(req.file);
        } else {
            res.status(400).json({ message: 'Something Went Wrong!!' })
        }
        return 'done';
    });
}



function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    // res.send(req.body.username);
    userService.getAll(req.body.username)
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getAll(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function bookmark(req, res, next) {
    userService.bookmark(req.body.id, req.body.user)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function upadepassword(req, res, next) {
    userService.upadepassword(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function resetpassword(req, res, next) {
    // console.log(req.body);
    userService.resetpassword(req.body)
        .then((data) => res.send(data))
        .catch(err => next(err));
}

function singleUser(req, res, next) {
    userService.singleUser(req.body)
        .then((data) => res.send(data))
        .catch(err => next(err));
}

function imageUrlUpdate(req, res, next) {
    userService.imageUrlUpdate(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function socialRegister(req, res, next) {

    userService.socialRegister(req.body)
        .then((data) => {
            const credentials = {
                "username": data.username.split(' ').join('.').trim().toLowerCase(),
                "password": req.body.id
            };
            userService.authenticate(credentials)
            .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        })
        .catch(err => next(err));
}

