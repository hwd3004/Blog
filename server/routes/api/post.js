import express from "express";
import "@babel/polyfill";

// Model
import Post from "../../models/post";
import auth from "../../middleware/auth";

const router = express.Router();

// api/post
router.get("/", async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
});

router.post("/", auth, async (req, res) => {
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
