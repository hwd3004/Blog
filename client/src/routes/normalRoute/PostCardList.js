import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POSTS_LOADING_REQUEST } from "../../redux/type";
import { Helmet } from "react-helmet";
import { Row } from "reactstrap";
import { GrowingSpinner } from "../../components/spinner/Spinner";
import PostCardOne from "../../components/post/PostCardOne";

const PostCardList = () => {
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POSTS_LOADING_REQUEST,
    });
  }, [dispatch]);

  return (
    <div className="postCardList">
      <Helmet title="Home" />
      <Row>{posts ? <PostCardOne posts={posts} /> : GrowingSpinner}</Row>
    </div>
  );
};

export default PostCardList;
