import * as Styled from "./styles";
import Link from "next/link";

export type MenuLinkProps = {
  children: React.ReactNode;
  link: string;
  newTab?: boolean;
};

export const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? "_blank" : "_self";
  const nextLink = link.match(/^\//) ? true : false;

  if (nextLink) {
    return (
      <Link href={link} passHref target={target}>
        <Styled.ContainerLink>{children}</Styled.ContainerLink>
      </Link>
    );
  }

  return (
    <Styled.Container href={link} target={target}>
      {children}
    </Styled.Container>
  );
};
