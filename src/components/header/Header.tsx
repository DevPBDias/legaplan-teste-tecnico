import Image from "next/image";
import logo from "@/assets/images/logo_FocalPoint.png";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <picture>
          <Image src={logo} alt="Logo FocalPoint" priority />
        </picture>
        <h1>Bem-vindo de volta, Marcus</h1>
        <h4>Segunda, 01 de dezembro de 2025</h4>
      </nav>
    </header>
  );
};

export default Header;
