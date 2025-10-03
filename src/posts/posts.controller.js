import * as PostService from "./posts.service.js";

export const handleGetAllPost = (req, res, next) => {
    try {
        const posts = PostService.getAllPosts();
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

export const handleGetPostById = (req, res, next) => {
    try {
        const idToFind = parseInt(req.params.id);
        const post = PostService.getPostById(idToFind);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

export const handleCreatePost = (req, res, next) => {
    try {
        const { title, description } = req.body;
        const newPost = PostService.createPost({ title, description });
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

export const handleUpdatePost = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const updatedPost = PostService.updatePost(id, req.body);
        res.json(updatedPost);
    } catch (error) {
        next(error);
    }
};

export const handleDeletePost = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        PostService.deletePost(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
