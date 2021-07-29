import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../theme';

type Props = {
  id: string;
  title: string;
};

const StyledTabPane = styled.div`
  padding: 24px;
  :focus {
    outline: ${COLORS.secondary} solid 1px;
  }
`;

const TabPane: React.FC<Props> = ({ children, id }) => {
  return (
    <StyledTabPane tabIndex={0} role="tabpanel" id={`${id}-tab`} aria-labelledby={id}>
      {children}
    </StyledTabPane>
  );
};

export default TabPane;
