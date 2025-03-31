import styled from "styled-components";

export const SaleCont = styled.div<{ $close: boolean }>`
  background-color: var(--lightGray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem;
  height: 4.3rem;
  ${({ $close }) =>
    $close &&
    `
  animation: closeAlert 0.2s ease-in forwards;
  `}

  @keyframes closeAlert {
    from {
      transform: translateY(0) scaleY(1);
    }
    to {
      transform: translateY(-100%) scaleY(0);
      height: 0;
      display: none;
    }
  }

  & > div {
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  & > div > p {
    font-size: 1.4rem;
    font-weight: 600;
  }

  & > div > a {
    display: flex;
    align-items: center;
  }

  & > img {
    cursor: pointer;
  }
`;
