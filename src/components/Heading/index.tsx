import * as Styled from "./styles";

export type HeadingProps = {
  children: React.ReactNode;
  colordark?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "small" | "medium" | "big" | "huge";
  uppercase?: boolean;
};

export const Heading = ({
  children,
  colordark = true,
  as = "h1",
  size = "huge",
  uppercase = false,
}: HeadingProps) => {
  return (
    <Styled.Title
      $colordark={colordark}
      as={as}
      size={size}
      $uppercase={uppercase}
    >
      {children}
    </Styled.Title>
  );
};
