import { ShopCollectionDiv, LeftSide, RightSide } from "./shopCollection";

export default function ShopCollection() {
  return (
    <ShopCollectionDiv>
      <LeftSide>
        <div>
          <h2>Living Room</h2>
          <a href="">
            Shop Now{" "}
            <img src="./assets/arrow-right-black.svg" alt="Arrow right" />
          </a>
        </div>
        <img src="./assets/gray-couch-01.png" alt="couch" />
      </LeftSide>
      <RightSide>
        <div>
          <h2>Bedroom</h2>
          <a href="">
            Shop Now{" "}
            <img src="./assets/arrow-right-black.svg" alt="Arrow right" />
          </a>
        </div>
        <img src="./assets/pump-01.png" alt="pump" />
      </RightSide>
      <RightSide>
        <div>
          <h2>Kitchen</h2>
          <a href="">
            Shop Now{" "}
            <img src="./assets/arrow-right-black.svg" alt="Arrow right" />
          </a>
        </div>
        <img src="./assets/toaster-01.png" alt="toaster" />
      </RightSide>
    </ShopCollectionDiv>
  );
}
