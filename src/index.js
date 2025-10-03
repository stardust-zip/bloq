import express from "express";
import postsRouter from "./posts/posts.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();
const port = 8000;

app.use(express.json());

app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.send("<center><h1>Welcome to Bloq!</h1></center>");
});

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
