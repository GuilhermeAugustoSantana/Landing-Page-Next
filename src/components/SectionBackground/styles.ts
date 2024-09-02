import styled, { css, DefaultTheme } from "styled-components";

type BackGround = {
  $background?: boolean;
};

const containerBackgroundActivate = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<BackGround>`
  ${({ theme, $background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${$background && containerBackgroundActivate(theme)};
    min-height: 100vh;
  `}
`;
