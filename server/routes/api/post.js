import express from "express";

// Model
import Post from "../../models/post";

const router = express.Router();

// api/post
router.get("/", async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
});

router.post("/", async (req, res) => {
  try {
    console.log(req, "req");
    const { title, contents, fileUrl, creator } = req.body;
    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      creator,
    });
    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

export default router;
