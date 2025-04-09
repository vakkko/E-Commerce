import styled from "styled-components";

export const ShopCollectionDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 16rem;
  gap: 2.4rem;

  & h2 {
    font-size: 3rem;
    font-weight: 400;
  }

  & a {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid var(--black);
    width: 10rem;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  grid-row: span 2;

  & > div {
    position: absolute;
    top: 4.8rem;
    left: 4.8rem;
  }

  & > img {
    width: 100%;
  }
`;

export const RightSide = styled.div`
  position: relative;

  & > div {
    position: absolute;
    bottom: 4.8rem;
    left: 4.8rem;
  }

  & > img {
    width: 100%;
  }
`;
