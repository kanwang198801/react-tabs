import React, { ReactElement, useState } from 'react';
import Tab from './Tab';
import styled from 'styled-components';

type Props = {
  children: ReactElement[];
  defaultActiveTabIndex?: number;
  ariaLabel?: string;
};

const StyledTabs = styled.div`
  max-width: 620px;
  border: 1px solid #e7e7e8;
  box-sizing: border-box;
  margin-bottom: 35px;
`;

const StyledTabList = styled.div`
  border-bottom: 1px solid #e7e7e8;
`;

const Tabs: React.FC<Props> = ({ children, defaultActiveTabIndex = 0, ariaLabel = 'Tabs' }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);

  return (
    <StyledTabs className="tabs">
      <StyledTabList role="tablist" aria-label={ariaLabel}>
        {children.map((item, index) => (
          <Tab
            id={item.props.id}
            key={index}
            title={item.props.title}
            tabIndex={index}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
        ))}
      </StyledTabList>
      {children[activeTabIndex]}
    </StyledTabs>
  );
};

export default Tabs;
