import React from 'react';
import { Tabs, TabPane } from './components/Tabs';
import Button from './components/Button';
import './App.css';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
  max-width: 1280px;
  margin: auto;
`;

const App: React.FC = () => {
  return (
    <StyledContainer>
      <Tabs ariaLabel="Tab1">
        <TabPane id="tincidunt" title="Tincidunt">
          <h3>Donec vitae</h3>
          <p>
            Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. Vivamus quis mi. Nullam vel
            sem. Morbi ac felis.
          </p>
          <p>
            Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
            sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo.
          </p>
        </TabPane>
        <TabPane id="sodales" title="Sodales">
          <h3>Donec sodales sagittis</h3>
          <p>
            Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
            sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo.
          </p>
        </TabPane>
      </Tabs>
      <Tabs ariaLabel="Tab2" defaultActiveTabIndex={1}>
        <TabPane id="tincidunt" title="Tincidunt">
          <h3>Donec vitae</h3>
          <p>
            Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. Vivamus quis mi. Nullam vel
            sem. Morbi ac felis.
          </p>
          <p>
            Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
            sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo.
          </p>
        </TabPane>
        <TabPane id="sodales" title="Sodales">
          <h3>Donec sodales sagittis</h3>
          <p>
            Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
            sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo.
          </p>
          <Button title="Continue" align="right" />
        </TabPane>
      </Tabs>
    </StyledContainer>
  );
};

export default App;
