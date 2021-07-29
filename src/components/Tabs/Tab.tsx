import React, { Ref } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  title: string;
  id: string;
  tabIndex: number;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
  onKeyUp: (event: React.KeyboardEvent) => void;
  tabRef: Ref<HTMLButtonElement>;
};

const StyledTab = styled.button`
  padding: 9px 24px 5px 24px;
  border: 0;
  background-color: ${COLORS.none};
  border-bottom: 4px solid ${COLORS.none};
  font-size: 17px;
  cursor: pointer;
  &[aria-selected='true'] {
    border-color: ${COLORS.secondary};
  }
`;

const Tab: React.FC<Props> = ({ title, id, tabIndex, activeTabIndex, setActiveTabIndex, onKeyUp, tabRef }) => {
  const isCurrentTab = activeTabIndex === tabIndex;

  return (
    <StyledTab
      id={id}
      role="tab"
      aria-selected={isCurrentTab}
      aria-controls={`${id}-tab`}
      tabIndex={isCurrentTab ? 0 : 1}
      onClick={() => setActiveTabIndex(tabIndex)}
      onKeyUp={(e) => onKeyUp(e)}
      ref={tabRef}
      data-orientation="horizontal"
    >
      {title}
    </StyledTab>
  );
};

export default Tab;
