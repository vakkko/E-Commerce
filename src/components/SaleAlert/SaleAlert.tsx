import { useState } from "react";
import { SaleCont } from "./saleAlert.ts";

export default function SaleAlert() {
  const [close, setClose] = useState(false);

  const handleClick = (): void => {
    setClose(true);
  };

  return (
    <SaleCont $close={close}>
      <div>
        <img src="./assets/percent-icon.svg" alt="percent icon" />
        <p>30% off storewide — Limited time! </p>
        <a href="#">
          Shop Now <img src="./assets/arrow-right.svg" alt="arrow-rigth" />
        </a>
      </div>
      <img onClick={handleClick} src="./assets/close.svg" alt="close icon" />
    </SaleCont>
  );
}
