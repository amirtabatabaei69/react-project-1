import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./NavbarElements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handelClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      console.log("if");
    } else {
      setButton(true);
      setClick(false);
      console.log("else");
    }
  };

  useEffect(() => {
    showButton();
    console.log("effect");
  }, []);

  window.addEventListener("resize", () => {
    showButton();
    console.log("add");
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              Amir
            </NavLogo>
            <MobileIcon onClick={handelClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handelClick} click={click}>
              <NavItems>
                <NavLinks to="/">Home</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="/services">Services</NavLinks>
              </NavItems>
              <NavItems>
                <NavLinks to="/products">Products</NavLinks>
              </NavItems>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
