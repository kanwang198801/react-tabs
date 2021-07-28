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
      <Tabs id="tab1">
        <TabPane id="tab1-tincidunt" title="Tincidunt">
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
        <TabPane id="tab1-sodales" title="Sodales">
          <h3>Donec sodales sagittis</h3>
          <p>
            Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique
            sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et,
            tempor auctor, justo.
          </p>
        </TabPane>
      </Tabs>
      <Tabs id="tab2" defaultActiveTabIndex={1}>
        <TabPane id="tab2-tincidunt" title="Tincidunt">
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
        <TabPane id="tab2-sodales" title="Sodales">
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
