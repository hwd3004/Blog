import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-helmet";
import {
  POST_DETAIL_LOADING_REQUEST,
  POST_DELETE_REQUEST,
  USER_LOADING_REQUEST,
} from "../../redux/type";
import { Button, Col, Row } from "reactstrap";
import CKEditor from "@ckeditor/ckeditor5-react";
import { Link } from "react-router-dom";

const PostDetail = (req) => {
  const dispatch = useDispatch();

  const { postDetail, creatorId, title, loading } = useSelector(
    (state) => state.post
  );

  const { userId, userName } = useSelector((state) => state.auth);

  console.log("PostDetail.js/req", req);

  useEffect(() => {
    dispatch({
      type: POST_DETAIL_LOADING_REQUEST,
      payload: req.match.params.id,
    });

    dispatch({
      type: USER_LOADING_REQUEST,
      payload: localStorage.getItem("token"),
    });
  }, []);

  const onDeleteClick = () => {
    dispatch({
      type: POST_DELETE_REQUEST,
      payload: {
        id: req.match.params.id,
        token: localStorage.getItem("token"),
      },
    });
  };

  const EditButton = (
    <>
      <Row className="d-flex justify-content-center pb-3">
        <Col className="col-md-3 mr-md-3">
          <Link to="/" className="btn btn-primary btn-block">
            Home
          </Link>
        </Col>

        <Col className="col-md-3 mr-md-3">
          <Link
            to={`/post/${req.match.params.id}/edit`}
            className="btn btn-success btn-block"
          >
            Edit Post
          </Link>
        </Col>

        <Col className="col-md-3">
          <Button className="btn-block btn-danger" onClick={onDeleteClick}>
            Delete
          </Button>
        </Col>
      </Row>
    </>
  );

  const HomeButton = (
    <>
      <Row className="d-flex justify-content-center pb-3">
        <Col className="col-sm-12 com-md-3">
          <Link to="/" className="btn btn-primary btn-clock">
            Home
          </Link>
        </Col>
      </Row>
    </>
  );

  return <h1>PostDetail</h1>;
};

export default PostDetail;
