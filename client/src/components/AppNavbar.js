import React, { useCallback, useEffect, useState } from "react";
import { Navbar, Container, NavbarToggler, Collapse, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import LoginModal from "./auth/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT_REQUEST } from "../redux/type";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );
  // authReducer.js의 const initialState의 isAuthenticated, user, userRole을 불러옴
  console.log(userRole, "userRole");

  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  }, [dispatch]);
  // useCallback은 useEffect와 비슷

  useEffect(() => {
    setIsOpen(false);
  }, [user]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar color="dark" dark expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none">
            블로그 만들기
          </Link>

          <NavbarToggler onClick={handleToggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {isAuthenticated ? (
                <h1 className="text-white">authLink</h1>
              ) : (
                <LoginModal />
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
