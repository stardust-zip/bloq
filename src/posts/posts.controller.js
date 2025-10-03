import * as PostService from "./posts.service.js";

export const handleGetAllPost = async (req, res, next) => {
    try {
        const posts = await PostService.getAllPosts();
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

export const handleGetPostById = async (req, res, next) => {
    try {
        const idToFind = parseInt(req.params.id);
        const post = await PostService.getPostById(idToFind);
        res.json(post);
    } catch (error) {
        next(error);
    }
};

export const handleCreatePost = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        const newPost = await PostService.createPost({ title, description });
        res.status(201).json(newPost);
    } catch (error) {
        next(error);
    }
};

export const handleUpdatePost = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const updatedPost = await PostService.updatePost(id, req.body);
        res.json(updatedPost);
    } catch (error) {
        next(error);
    }
};

export const handleDeletePost = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        await PostService.deletePost(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
