import styled from "styled-components";
import MenuWrapper from "./MenuWrapper";
import MenuItem from "./MenuItem";

const StyledMenus = styled.div`
  grid-area: menu;
  display: flex;
  justify-content: space-between;
`;

const StyledPrimaryMenu = styled(MenuWrapper)`
  li a {
    font-size: 1.2rem;
  }
`;

function Menu() {
  const primaryMenuItems = [
    { id: 1, label: "Home", href: "#", isActive: true },
    { id: 2, label: "Videos", href: "#", isActive: false },
    { id: 3, label: "Channels", href: "#", isActive: false },
  ];

  const secondaryMenuItems = [
    { id: 1, label: "Subscriptions", href: "#", isActive: false },
    { id: 2, label: "History", href: "#", isActive: false },
    { id: 3, label: "Upload", href: "#", isActive: false },
  ];

  return (
    <StyledMenus className="menu">
      <StyledPrimaryMenu className="menu__primary">
        {primaryMenuItems.map(({ id, label, href, isActive }) => (
          <MenuItem key={id} href={href} isActive={isActive}>
            {label}
          </MenuItem>
        ))}
      </StyledPrimaryMenu>

      <MenuWrapper className="menu__secondary">
        {secondaryMenuItems.map((item) => (
          <MenuItem key={item.label} href={item.href}>
            {item.label}
          </MenuItem>
        ))}
      </MenuWrapper>
    </StyledMenus>
  );
}

export default Menu;
