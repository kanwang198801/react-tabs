import React from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  id: string;
  tabIndex: number;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
};

const StyledTab = styled.button`
  padding: 9px 24px 5px 24px;
  border: 0;
  background-color: transparent;
  border-bottom: 4px solid transparent;
  font-size: 17px;
  cursor: pointer;
  transition-duration: 0.6s;
  &:hover,
  &[aria-selected='true'] {
    border-color: #8e00ff;
  }
`;

const Tab: React.FC<Props> = ({ title, id, tabIndex, activeTabIndex, setActiveTabIndex }) => {
  const isCurrentTab = activeTabIndex === tabIndex;
  const onClick = () => {
    setActiveTabIndex(tabIndex);
  };

  return (
    <StyledTab
      id={id}
      role="tab"
      aria-selected={isCurrentTab}
      aria-controls={`${id}-tab`}
      tabIndex={isCurrentTab ? 0 : 1}
      onClick={onClick}
    >
      {title}
    </StyledTab>
  );
};

export default Tab;
