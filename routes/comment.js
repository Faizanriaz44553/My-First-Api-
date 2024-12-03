import express from 'express';
import comments from '../data/comments.js';
import Post from '../data/post.js';
import Album from '../data/album.js';
import Photos from '../data/photos.js';
import Todos from '../data/todos.js';
import Users from '../data/users.js';

const comment = express.Router();

comment.get('/comments', (req, res) => {
    try {
        res.status(200).send({status : 200 , massage : "success comments" , data : comments});
    } catch (error) {
        res.status(404).send("bad request")
    }
});
comment.get('/posts', (req, res) => {
    res.status(200).send({status : 200 , massage : "success posts" , data : Post});
});
comment.get('/albums', (req, res) => {
    res.status(200).send({status : 200 , massage : "success albums" , data : Album});
});
comment.get('/photos', (req, res) => {
    res.status(200).send({status : 200 , massage : "success photos" , data : Photos});
});
comment.get('/todos', (req, res) => {
    res.status(200).send({status : 200 , massage : "success todos" , data : Todos});
});
comment.get('/users', (req, res) => {
    res.status(200).send({status : 200 , massage : "success users" , data : Users});
});

export default comment;