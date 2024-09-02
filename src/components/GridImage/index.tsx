import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";

export type GridImageProps = {
  title: React.ReactNode;
  background?: boolean;
  description: string;
  grid: GridImageElementProps[];
  sectionId?: string;
  component?: string;
};

export type GridImageElementProps = {
  altText: string;
  srcImg: string;
};

export const GridImage = ({
  title,
  background = false,
  description,
  grid,
  sectionId = "",
}: GridImageProps) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" colordark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((el, index) => (
            <Styled.GridElement key={`${el.altText}-${index}`}>
              <Styled.Image src={el.srcImg} alt={el.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};
