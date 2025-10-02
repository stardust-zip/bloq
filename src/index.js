import express from "express";

const app = express();
const port = 8001;

const posts = [
    { id: 1, title: "Days at Hanoi", description: "Great, another storm" },
    { id: 2, title: "Why Emacs", description: "Because I'm a cultist" },
    { id: 3, title: "Crossdressing tips", description: "Ah, uhh, ummm" },
];

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my BLOQ</h1>");
});

app.get("/posts", (req, res) => {
    res.json(posts);
});

app.get("/posts/:id", (req, res) => {
    const id = req.params.id;
    let found = false;
    for (const post of posts) {
        if (post["id"] == parseInt(id) && !found) {
            res.json(post);
            found = true;
        }
    }

    if (!found) {
        res.status(404).json({ message: "Post not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
