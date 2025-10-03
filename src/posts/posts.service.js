import { NotFoundError } from "../utils/errors.js";
let posts = [
    { id: 1, title: "Days at Hanoi", description: "Great, another storm" },
    { id: 2, title: "Why Emacs", description: "Because I'm a cultist" },
    { id: 3, title: "Crossdressing tips", description: "Ah, uhh, ummm" },
];

let nextId = posts.length + 1;

export const getAllPosts = () => posts;

export const getPostById = (id) => {
    const post = posts.find((p) => p.id === id);

    if (!post) {
        throw new NotFoundError("Post not found!");
    } else {
        return post;
    }
};

export const createPost = (postData) => {
    const newPost = { id: nextId++, ...postData };
    posts.push(newPost);
    return newPost;
};

export const updatePost = (id, postData) => {
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) throw new NotFoundError("Post not found!");

    posts[postIndex] = { ...posts[postIndex], ...postData };
    return posts[postIndex];
};

export const deletePost = (id) => {
    const initialLength = posts.length;
    posts = posts.filter((p) => p.id != id);
    if (initialLength > posts.length) {
        return true;
    } else {
        throw new NotFoundError("Post not found!");
    }
};
