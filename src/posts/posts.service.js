let posts = [
    { id: 1, title: "Days at Hanoi", description: "Great, another storm" },
    { id: 2, title: "Why Emacs", description: "Because I'm a cultist" },
    { id: 3, title: "Crossdressing tips", description: "Ah, uhh, ummm" },
];

let nextId = posts.length + 1;

export const getAllPosts = () => posts;

export const getPostById = (id) => posts.find((p) => p.id === id);

export const createPost = (postData) => {
    const newPost = { id: nextId++, ...postData };
    posts.push(newPost);
    return newPost;
};

export const updatePost = (id, postData) => {
    const postIndex = posts.findIndex((p) => p.id === id);
    if (postIndex === -1) return null;

    posts[postIndex] = { ...posts[postIndex], ...postData };
    return posts[postIndex];
};

export const deletePost = (id) => {
    const initialLength = posts.length;
    posts = posts.filter((p) => p.id != id);
    return initialLength > posts.length;
};
