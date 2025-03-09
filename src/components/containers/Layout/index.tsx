import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toggleActiveStyling from '../../../helpers/toggleActiveStyling.ts';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const layoutStyle = {
    minHeight: '100vh',
    height: '100vh',
  };

  const bodyStyle = {
    margin: '25px 25%',
  };

  const location = useLocation();
  const navigate = useNavigate();

  const currentBaseRoute = location.pathname.split('/')[1];

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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={bodyStyle}>{props.children}</div>
    </div>
  );
};

export default Layout;
