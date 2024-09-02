import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export type GridTextProps = {
  title: React.ReactNode;
  background?: boolean;
  description: string;
  grid: GridTextElemetsProps[];
  sectionId?: string;
  component?: string;
};

export type GridTextElemetsProps = {
  title: string;
  description: string;
};

export const GridText = ({
  title,
  background = false,
  description,
  grid,
  sectionId = "",
}: GridTextProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" colordark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading size="medium" colordark={!background} as="h3">
                {el.title}
              </Heading>
              <TextComponent>{el.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
