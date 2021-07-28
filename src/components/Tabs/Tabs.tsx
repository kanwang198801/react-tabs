import React, { ReactElement, useState } from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  children: ReactElement[];
  defaultActiveTabIndex?: number;
  id: string;
};

const StyledTabs = styled.div`
  max-width: 620px;
  border: 1px solid ${COLORS.grey};
  box-sizing: border-box;
  margin-bottom: 35px;
`;

const StyledTabList = styled.div`
  border-bottom: 1px solid ${COLORS.grey};
`;

const Tabs: React.FC<Props> = ({ children, defaultActiveTabIndex = 0, id }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);

  return (
    <StyledTabs id={id} className="tabs">
      <StyledTabList role="tablist" aria-label={id}>
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
