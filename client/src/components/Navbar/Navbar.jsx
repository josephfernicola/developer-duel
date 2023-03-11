import {
  Nav,
  NavbarContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";
const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <Menu>
          <MenuItem>
            <MenuLink
              exact="true"
              to="/"
              activestyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              {"<--Dev-Duel-->"}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              exact="true"
              to="/inspect"
              activestyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              Inspect
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              exact="true"
              to="/duel"
              activestyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              Duel
            </MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
