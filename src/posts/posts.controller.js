import * as PostService from "./posts.service.js";

export const handleGetAllPost = (req, res) => {
    const posts = PostService.getAllPosts();
    res.json(posts);
};

export const handleGetPostById = (req, res) => {
    const idToFind = parseInt(req.params.id);

    const post = PostService.getPostById(idToFind);

    post ? res.json(post) : res.status(404).json({ message: "Post not found" });
};

export const handleCreatePost = (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res
            .status(400)
            .json({ message: "Title and Description are required." });
    }

    const newPost = PostService.createPost({ title, description });
    res.status(201).json(newPost);
};

export const handleUpdatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPost = PostService.updatePost(id, req.body);

    updatedPost
        ? res.json(updatedPost)
        : res.status(404).json({ message: "Post not found" });
};

export const handleDeletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const deletedPost = PostService.deletePost(id);

    deletedPost
        ? res.status(204).send()
        : res.status(404).json({ message: "Post not found" });
};
