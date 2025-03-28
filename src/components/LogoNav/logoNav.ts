import styled from "styled-components";

export const LogoNavContainr = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 16rem;

  & > nav > ul {
    display: flex;
    gap: 4rem;
    font-size: 1.2rem;
    color: var(--gray);
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.8rem;
  }
`;

export const ItemCount = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  & > div {
    background-color: var(--black);
    color: white;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
