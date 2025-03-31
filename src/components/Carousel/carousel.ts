import styled from "styled-components";

export const CarouselDiv = styled.div`
  position: relative;
  width: 112rem;
  margin: 0 auto;
`;

export const SwipeArrows = styled.div`
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 26rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3.2rem;

  & > button > svg {
    stroke: #141718;
  }

  & > button {
    background-color: white;
    width: 5.2rem;
    height: 5.2rem;
    border-radius: 50%;
  }

  & > button:hover svg path {
    stroke: var(--gray);
  }
`;

export const Images = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;

  & > img {
    height: 53.6rem;
    width: 112rem;
    flex-shrink: 0;
    border-radius: 15px;
  }
`;
