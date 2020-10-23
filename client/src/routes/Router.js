import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppNavbar from "../components/AppNavbar";
import { Container } from "reactstrap";
import { Redirect, Route, Switch } from "react-router-dom";
import PostCardList from "./normalRoute/PostCardList";
import PostWrite from "./normalRoute/PostWrite";
import PostDetail from "./normalRoute/PostDetail";
import CategoryResult from "./normalRoute/CategoryResult";
import Search from "./normalRoute/Search";

const MyRouter = () => {
  return (
    <>
      <AppNavbar />
      <Header />

      <Container id="main-body">
        <Switch>
          <Route exact path="/" component={PostCardList}></Route>
          <Route exact path="/post" component={PostWrite}></Route>
          <Route exact path="/post/:id" component={PostDetail}></Route>
          <Route
            exact
            path="/post/category/:categoryName"
            component={CategoryResult}
          ></Route>
          <Route exact path="/search/:searchTerm" component={Search}></Route>
          <Redirect from="*" to="/"></Redirect>
        </Switch>
      </Container>

      <Footer />
    </>
  );
};

export default MyRouter;
