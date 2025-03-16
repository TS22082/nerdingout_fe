import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import toggleActiveStyling from '../../../helpers/toggleActiveStyling.ts';
import useLayoutData from './useLayoutData.ts';
import { FiLogOut } from 'react-icons/fi';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { layoutStyle, currentBaseRoute, isLoggedIn, handleLogout } =
    useLayoutData();
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
              {isLoggedIn && (
                <NavDropdown title="user" id="nav-dropdown">
                  <NavDropdown.Item>
                    <Nav.Link
                      onClick={() => navigate('/profile')}
                      style={toggleActiveStyling('profile', currentBaseRoute)}
                    >
                      profile
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link
                      onClick={() => navigate('/dashboard')}
                      style={toggleActiveStyling('dashboard', currentBaseRoute)}
                    >
                      dashboard
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link
                      onClick={() => navigate('/new')}
                      style={toggleActiveStyling('new', currentBaseRoute)}
                    >
                      new
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Nav.Link
                      onClick={() => handleLogout()}
                      style={toggleActiveStyling('logout', currentBaseRoute)}
                    >
                      <FiLogOut />
                    </Nav.Link>
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </div>
  );
};

export default Layout;
