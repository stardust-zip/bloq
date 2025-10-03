import { z } from "zod";

export const postSchema = z.object({
    body: z.object({
        title: z
            .string({ required_error: "Title is required" })
            .min(1, "Title must be at least 1 character"),
        description: z.string(),
    }),
});
