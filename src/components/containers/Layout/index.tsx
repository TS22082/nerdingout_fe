import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import toggleActiveStyling from '../../../helpers/toggleActiveStyling.ts';
import useLayoutData from './useLayoutData.ts';
import { FiLogOut } from 'react-icons/fi';
import { ToastContainer } from 'react-toastify';
import { FC, ReactNode } from 'react';
import { CategoryType } from '../../../types/types.ts';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  const {
    layoutStyle,
    currentBaseRoute,
    isLoggedIn,
    publishedCategories,
    publishedCategoriesLoading,
    handleLogout,
  } = useLayoutData();
  const navigate = useNavigate();

  return (
    <div style={layoutStyle}>
      <ToastContainer autoClose={1000} />
      <Navbar
        data-bs-theme="dark"
        sticky="top"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand>nerding_out</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            data-bs-theme="dark"
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <NavDropdown title="articles" id="nav-dropdown">
                <NavDropdown.Item
                  onClick={() => navigate('/')}
                  className="text-lowercase"
                  style={toggleActiveStyling('', currentBaseRoute)}
                >
                  All
                </NavDropdown.Item>
                {publishedCategoriesLoading && 'Loading ...'}
                {publishedCategories.map((category: CategoryType) => (
                  <NavDropdown.Item
                    key={category.id}
                    className="text-lowercase"
                    onClick={() => navigate(`/${category.id}`)}
                    style={toggleActiveStyling(category.id, currentBaseRoute)}
                  >
                    {category.label}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link
                onClick={() => navigate('/about')}
                style={toggleActiveStyling('about', currentBaseRoute)}
              >
                about
              </Nav.Link>
              {isLoggedIn && (
                <NavDropdown title="user" id="nav-dropdown">
                  <NavDropdown.Item
                    onClick={() => navigate('/profile')}
                    style={toggleActiveStyling('profile', currentBaseRoute)}
                  >
                    profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate('/dashboard')}
                    style={toggleActiveStyling('dashboard', currentBaseRoute)}
                  >
                    dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate('/new')}
                    style={toggleActiveStyling('new', currentBaseRoute)}
                  >
                    new
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => handleLogout()}
                    style={toggleActiveStyling('logout', currentBaseRoute)}
                  >
                    <FiLogOut />
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
