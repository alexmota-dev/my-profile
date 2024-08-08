import { NavigationItem } from "./NavigationItem";
import { NavigationPrimaryItem } from "./NavigationPrimaryItem";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <nav
      id="menu"
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "nowrap",
        }}
      >
        <div className="navbar-header">
          <NavigationPrimaryItem href="#">Alex Mota</NavigationPrimaryItem>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "nowrap",
            }}
          >
            <NavigationItem href="#features">Habilidades</NavigationItem>
            <NavigationItem href="#about">Sobre</NavigationItem>
            <NavigationItem href="#services">Serviços</NavigationItem>
            <NavigationItem href="#gallery">Projetos</NavigationItem>
            <NavigationItem href="#testimonials">Experiencia</NavigationItem>
            <NavigationItem href="#contact">Contact</NavigationItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};
