import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  title: string;
  id: string;
  tabIndex: number;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
  tabRef: any;
};

const StyledTab = styled.button`
  padding: 9px 24px 5px 24px;
  border: 0;
  background-color: ${COLORS.none};
  border-bottom: 4px solid ${COLORS.none};
  font-size: 17px;
  cursor: pointer;
  &:focus-visible {
    outline: ${COLORS.secondary} auto 1px;
  }
  &[aria-selected='true'] {
    border-color: ${COLORS.secondary};
  }
`;

const Tab: React.FC<Props> = ({ title, id, tabIndex, activeTabIndex, setActiveTabIndex, tabRef }) => {
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
      ref={tabRef}
    >
      {title}
    </StyledTab>
  );
};

export default Tab;
