import styled, { css, DefaultTheme } from "styled-components";

export type HeadingElementProps = {
  $colordark?: boolean;
  size?: "small" | "medium" | "big" | "huge";
  $uppercase?: boolean;
};

const mediaFont = (theme: DefaultTheme) => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }
`;

const titlecase = (uppercase: boolean) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

const titleSize = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.large};
  `,
  big: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xlarge};
  `,
  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.sizes.xxlarge};
    ${mediaFont(theme)};
  `,
};

export const Title = styled.h1<HeadingElementProps>`
  ${({ theme, $colordark, size, $uppercase }) => css`
    color: ${$colordark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSize[size](theme)};
    ${titlecase($uppercase)};
  `}
`;
