import AuthStatus from "../AuthStatus";
import Brand from "../Brand";
import Menu from "../Menu";
import Search from "../Search";

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

function Header() {
  return (
    <header className="header">
      <Brand className="header__brand" />
      <Search className="header__search" />
      <AuthStatus className="header__auth-status" />

      <nav className="header__menu">
        <Menu className="header__menu__primary" items={primaryMenuItems} />
        <Menu className="header__menu__secondary" items={secondaryMenuItems} />
      </nav>
    </header>
  );
}

export default Header;
