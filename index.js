const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const controller = require('./server/controller');
const massive = require('massive');
const session = require('express-session');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then((db) => {
        console.log('db is running');
        app.set('db',db)
    })

app.use(session({
    name: 'helo',
    secret: process.env.SESSION_SECRET,
    cookie: {
        expires: 5 * 24 * 60 * 60 *1000
    }
}));  

app.post(`/api/auth/login`, (req, res) => {
    const db = app.get('db');
    const {username, password} = req.body;
    
    db.users.findOne({username, password})
        .then( user => {
            if (!user){
                return res.status(401).send({success: false, message: 'Login failed'})
            }
            req.session.user = user.id;
            res.status(200).send({success: true, message: `Login Successful!`})
            })
    })
    
app.post('/api/auth/register', (req, res) => {
    const db = app.get('db');
    const { username, password } = req.body;
        
db.user.createUser({ 
    username: req.body.username, 
    password: req.body.password,
    image: `https://robohash.org/5` 
})
        .then(user => {
            req.session.user = users.id;
            console.log(req.session.user)
            res.status(200).send({ success: true, message: 'logged in successfully' });
        })
        .catch(handleDbError(res));
    });

app.get(`/api/posts`, (req, res) => {
    const db = app.get('db');
    db.post.getPosts()
        .then(posts => {
            res.status(200).send(posts);
        })
        .catch(handleDbError(res));
})

const port = process.env.PORT || 8080;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

function handleDbError(res) {
    return (err) => {
        console.warn('hit a snag');
        console.error(err);
        
        if (err.code == 'ECONNRESET') {
            return res.status(500).send({ message: 'something died again' });
        }
        if (err.code == '22P02') {
            res.status(422).send({ message: 'The request had incorrect or missing properties: ' + err.message });
        }
        res.status(500).send({ message: 'Internal Server Error' })
    };
}
