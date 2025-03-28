import { LogoNavContainr, ItemCount } from "./logoNav";

export default function LogoNav() {
  return (
    <LogoNavContainr>
      <h1>FurnyShop</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div>
        <img src="./assets/search.svg" alt="search icon" />
        <ItemCount>
          <img src="./assets/shopping-bag.svg" alt="shopping bag" />
          <div>
            <span>1</span>
          </div>
        </ItemCount>
      </div>
    </LogoNavContainr>
  );
}
