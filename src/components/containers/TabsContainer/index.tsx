import { Nav } from 'react-bootstrap';
import capFirstLetter from '../../../helpers/capFirstLetter.ts';
import { FC, ReactNode } from 'react';

type TabsType = {
  [key: string]: boolean;
};

type TabsContainerProps = {
  tabs: TabsType;
  handleSetActiveTab: (tab: string) => void;
  children: ReactNode;
};

const TabsContainer: FC<TabsContainerProps> = ({
  tabs,
  handleSetActiveTab,
  children,
}) => {
  return (
    <>
      <Nav variant="tabs" data-bs-theme="dark">
        {Object.entries(tabs).map(([key, value]) => {
          return (
            <Nav.Link
              key={key}
              active={value}
              onClick={() => handleSetActiveTab(key)}
              style={{
                textDecoration: 'none',
                color: value ? 'white' : 'grey',
              }}
            >
              {capFirstLetter(key)}
            </Nav.Link>
          );
        })}
      </Nav>
      {children}
    </>
  );
};

export default TabsContainer;
