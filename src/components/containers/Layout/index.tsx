import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toggleActiveStyling from '../../../helpers/toggleActiveStyling.ts';
import useLayoutData from './useLayoutData.ts';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { layoutStyle, currentBaseRoute, isLoggedIn } = useLayoutData();
  const navigate = useNavigate();

  return (
    <div style={layoutStyle}>
      <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>nerding_out</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                onClick={() => navigate('/')}
                style={toggleActiveStyling('', currentBaseRoute)}
              >
                articles
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate('/about')}
                style={toggleActiveStyling('about', currentBaseRoute)}
              >
                about
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate('/support')}
                style={toggleActiveStyling('support', currentBaseRoute)}
              >
                support
              </Nav.Link>
            </Nav>
            {isLoggedIn && (
              <Nav.Link
                onClick={() => navigate('/new')}
                style={toggleActiveStyling('new', currentBaseRoute)}
              >
                new
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="pt-3">
        <Row>
          <Col
            lg={{
              span: 6,
              offset: 3,
            }}
          >
            {props.children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
