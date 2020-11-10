import express from "express";
import "@babel/polyfill";

// Model
import Post from "../../models/post";
import Category from "../../models/category";
import User from "../../models/user";

import auth from "../../middleware/auth";

const router = express.Router();

import multer from "multer";
import multerS3 from "multer-s3";
import path from "path";
import AWS from "aws-sdk";

import dotenv from "dotenv";
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
});

const uploadS3 = multer({
  storage: multerS3({
    s3,
    bucket: "development-bucket-201027/upload",
    region: "ap-northeast-2",
    key(req, file, cb) {
      const ext = path.extname(file.originalName);
      const basename = path.basename(file.originalName, ext);
      cb(null, basename + new Date().valueOf() + ext);
    },
  }),
  limits: { fileSize: 100 * 1024 * 1024 },
});

// @route POST api/post/image
// @desc Create a Post
// @access Private

router.post("/image", uploadS3.array("upload", 5), async (req, res, next) => {
  try {
    console.log(req.files.map((v) => v.location));
    res.json({ uploaded: true, url: req.files.map((v) => v.location) });
  } catch (error) {
    console.error(error);
    res.json({ uploaded: false, url: null });
  }
});

// api/post
router.get("/", async (req, res) => {
  const postFindResult = await Post.find();
  console.log(postFindResult, "All Post Get");
  res.json(postFindResult);
});

// @route POST api/post
// @desc Create a Post
// @access Private

router.post("/", auth, uploadS3.none(), async (req, res) => {
  try {
    console.log(req, "req");
    const { title, contents, fileUrl, category } = req.body;

    const newPost = await Post.create({
      title,
      contents,
      fileUrl,
      creator: req.user.id,
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    const findResult = await Category.findOne({
      categoryName: category,
    });

    console.log(findResult, "Find Result");

    // 강의에서는 if(isNullOrUndefined(findResult)){...}
    // 폐기된 메소드를 사용하였다
    if (findResult) {
      await Category.findByIdAndUpdate(findResult._id, {
        $push: { posts: newPost._id },
      });

      await Post.findByIdAndUpdate(newPost._id, {
        category: findResult._id,
      });

      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id,
        },
      });

      return res.redirect(`/api/post/${newPost._id}`);
    } else {
      const newCategory = await Category.create({
        categoryName: category,
      });

      await Post.findByIdAndUpdate(newPost_id, {
        // $push는 방금 만든 새 카테고리를 배열로 넣아달라는 뜻
        $push: { category: newCategory._id },
      });

      await Category.findByIdAndUpdate(newCategory._id, {
        $push: { posts: newPost._id },
      });

      await User.findByIdAndUpdate(req.user.id, {
        $push: {
          posts: newPost._id,
        },
      });

      return res.redirect(`/api/post/${newPost._id}`);
    }

    res.json(newPost);
  } catch (error) {
    console.log(error);
  }
});

// @route POST api/post/:id
// @desc Detail Post
// @access Public

router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate("creator", "name")
      .populate({ path: "category", select: "categoryName" });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
