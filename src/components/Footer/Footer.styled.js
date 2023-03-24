import styled from '@emotion/styled';

import { secondTextColor, secondBgColor } from 'utilities/variables/css';

export const FooterWrapper = styled.footer`
  background-color: ${secondBgColor};
  color: ${secondTextColor};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  font-size: 15px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Studios = styled.span`
  display: inline-flex;
  border: 1px solid #c42d4e;
  color: #d13d5d;
  padding: 10px;

  @media (min-width: 768px) {
    padding: 15px;
  }
`;
