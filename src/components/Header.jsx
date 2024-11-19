/*

* Deliveroo frontend

* Header component

*/

import deliverooLogo from "../assets/deliveroo-logo.png";

function Header() {
  return (
    <>
      <header>
        <img src={deliverooLogo} alt="Deliveroo logo" />
      </header>
    </>
  );
}

export default Header;
