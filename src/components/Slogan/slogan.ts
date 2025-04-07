import styled from "styled-components";

export const SloganDiv = styled.div`
  display: flex;
  gap: 7rem;
  align-items: center;
  margin: 3.2rem 16rem;

  & > h1 {
    font-size: 7.2rem;
    line-height: 7.6rem;
  }

  span {
    color: var(--gray);
  }

  & > P {
    font-size: 1.8rem;
    color: var(--gray);
  }
`;

export const Company = styled.span`
  font-weight: 700;
  color: var(--darkGray);
`;
