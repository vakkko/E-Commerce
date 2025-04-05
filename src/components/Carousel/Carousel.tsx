import { useState } from "react";
import {
  CarouselDiv,
  SwipeArrows,
  Images,
  DotDivs,
  DotDiv,
} from "./carousel.ts";

export default function Carousel() {
  const [currentImg, setCurrentImg] = useState<number>(0);

  const handleRightSlide = () => {
    setCurrentImg((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const handleLeftSlide = () => {
    setCurrentImg((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const carouselImage: { src: string; alt: string }[] = [
    {
      src: "./assets/brown-sofa.png",
      alt: "brown sofa",
    },
    {
      src: "./assets/gray-large-bed.jpg",
      alt: "gray large bed",
    },
    {
      src: "./assets/grayTable-for6.jpg",
      alt: "gray table",
    },
  ];

  const changeImg: (numb: number) => void = (numb: number) => {
    setCurrentImg(numb);
  };

  return (
    <CarouselDiv>
      <Images>
        <img
          src={carouselImage[currentImg].src}
          alt={carouselImage[currentImg].alt}
        />
      </Images>
      <SwipeArrows>
        <button onClick={handleLeftSlide}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66669 16H25.3334"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66669 16L14.6667 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.66669 16L14.6667 8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={handleRightSlide}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66666 16H25.3333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3333 24L25.3333 16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.3333 8L25.3333 16"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </SwipeArrows>
      <DotDivs>
        <DotDiv
          onClick={() => changeImg(0)}
          $active={currentImg === 0}
        ></DotDiv>
        <DotDiv
          onClick={() => changeImg(1)}
          $active={currentImg === 1}
        ></DotDiv>
        <DotDiv
          onClick={() => changeImg(2)}
          $active={currentImg === 2}
        ></DotDiv>
      </DotDivs>
    </CarouselDiv>
  );
}
