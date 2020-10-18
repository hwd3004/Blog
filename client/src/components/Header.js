import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
    <div className="Header">
      <div id="page-header" className="mb-3">
        <Row>
          <Col md="6" sm="auto" className="text-center m-auto">
            <h1>블로그 만들기</h1>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
