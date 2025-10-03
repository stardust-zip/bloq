export const errorMiddleware = (err, req, res, next) => {
    console.error(err);

    if (err.code === "P2025") {
        return res.status(404).json({ message: "Record not found" });
    }

    if (err.name === "NotFoundError") {
        res.status(404).json({ message: err.message });
    }

    // fallback for any other unexpected error
    res.status(500).json({ message: "Something went wrong on the server" });
};
