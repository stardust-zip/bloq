import { PrismaClient } from "@prisma/client";
import { NotFoundError } from "../utils/errors.js";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
    return await prisma.post.findMany();
};

export const getPostById = async (id) => {
    const post = await prisma.post.findUnique({ where: { id } });

    if (!post) {
        throw new NotFoundError("Post not found!");
    } else {
        return post;
    }
};

export const createPost = async (postData) => {
    return await prisma.post.create({ data: postData });
};

export const updatePost = async (id, postData) => {
    await prisma.post.findUniqueOrThrow({ where: { id } });
    return await prisma.post.update({
        where: { id },
        data: postData,
    });
};

export const deletePost = async (id) => {
    await prisma.post.findUniqueOrThrow({ where: { id } });
    await prisma.post.delete({ where: { id } });
};
