import React, { ReactElement, useState, useRef } from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  children: ReactElement[];
  defaultActiveTabIndex?: number;
  id: string;
  ariaLabel: string;
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

const Tabs: React.FC<Props> = ({ children, id, ariaLabel, defaultActiveTabIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultActiveTabIndex);
  const tabRefs = children.map(() => useRef<HTMLButtonElement>(null!));

  const onKeyUpEvent = (event: React.KeyboardEvent) => {
    const firstIndex = 0;
    const lastIndex = tabRefs.length - 1;
    let nextIndex = activeTabIndex - 1;
    if (event.key === 'ArrowLeft') {
      if (activeTabIndex === firstIndex) {
        nextIndex = lastIndex;
      }
    } else if (event.key === 'ArrowRight') {
      if (activeTabIndex === lastIndex) {
        nextIndex = firstIndex;
      } else {
        nextIndex = activeTabIndex + 1;
      }
    } else {
      return;
    }
    tabRefs[nextIndex].current.focus();
    setActiveTabIndex(nextIndex);
  };

  return (
    <StyledTabs id={id} className="tabs">
      <StyledTabList role="tablist" aria-label={ariaLabel}>
        {children.map((item, index) => (
          <Tab
            id={item.props.id}
            key={index}
            title={item.props.title}
            tabIndex={index}
            activeTabIndex={activeTabIndex}
            tabRef={tabRefs[index]}
            setActiveTabIndex={setActiveTabIndex}
            onKeyUp={onKeyUpEvent}
          />
        ))}
      </StyledTabList>
      {children[activeTabIndex]}
    </StyledTabs>
  );
};

export default Tabs;
