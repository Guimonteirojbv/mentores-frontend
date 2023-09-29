import logoImg from "@/assets/logos/sou-junior.svg";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import Link from "next/link";
import { ContainerHeader, GroupBtn } from "./style";
import { UserAvatar } from "@/components/atoms/UserAvatar";
import useUser from "@/context/Auth/useUser";
import { useEffect } from "react";
export function Header() {
  const { user } = useUser();

  return (
    <ContainerHeader>
      <div>
        <Link href="/">
          <Image src={logoImg} alt="Logo Sou Júnior" />
        </Link>
        <span />
        <a href="#onboarding">Como Funciona</a>
        <a href="#mentor">Encontre Seu Mentor</a>
      </div>
      {user != null ? (
        <GroupBtn>
          <UserAvatar />
          <span>{user?.fullName}</span>
        </GroupBtn>
      ) : (
        <GroupBtn>
          <Link href={"/cadastro"}>
            <Button content="Quero Mentorar" btnRole={"primary"} />
          </Link>
          <Link href={"/login"}>
            <Button content="Login para Mentores" btnRole={"secondary"} />
          </Link>
        </GroupBtn>
      )}
    </ContainerHeader>
  );
}
