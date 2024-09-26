"use client";
import Image from "next/image";
import logo from "@/assets/images/logo_FocalPoint.png";
import "./styles.scss";
import { useUserContext } from "@/context/providers/user-provider";
import { useEffect, useState } from "react";

const Header = () => {
  const { userName } = useUserContext();
  const [date, setDate] = useState<string>("Dia, número do mês do ano");

  useEffect(() => {
    const getLocaleDate = () => {
      let options = { dateStyle: "full" };

      const todayDate = new Date().toLocaleDateString("pt-br", options as any);
      setDate(todayDate);
    };
    getLocaleDate();
  }, []);

  return (
    <header>
      <nav>
        <picture>
          <Image src={logo} alt="Logo FocalPoint" priority />
        </picture>
        <h1>Bem-vindo de volta, {userName === "" ? "Visitante" : userName}</h1>
        <h4>{date.charAt(0).toUpperCase() + date.slice(1)}</h4>
      </nav>
    </header>
  );
};

export default Header;
