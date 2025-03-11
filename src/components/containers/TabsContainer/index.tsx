import { Nav } from 'react-bootstrap';
import React from 'react';
import capFirstLetter from '../../../helpers/capFirstLetter.ts';

type TabsType = {
  [key: string]: boolean;
};

type TabsContainerProps = {
  tabs: TabsType;
  handleSetActiveTab: (tab: string) => void;
  children: React.ReactNode;
};

const TabsContainer: React.FC<TabsContainerProps> = ({
  tabs,
  handleSetActiveTab,
  children,
}) => {
  return (
    <>
      <Nav variant="tabs">
        {Object.entries(tabs).map(([key, value]) => {
          return (
            <Nav.Link
              key={key}
              active={value}
              onClick={() => handleSetActiveTab(key)}
              style={{
                textDecoration: 'none',
                color: value ? 'black' : 'grey',
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
