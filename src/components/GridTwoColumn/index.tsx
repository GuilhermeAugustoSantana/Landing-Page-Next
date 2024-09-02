import * as Styled from "./styles";
import { SectionBackground } from "../SectionBackground";
import { Heading } from "../Heading";
import { TextComponent } from "../TextComponent";
export type GridTwoColumnProps = {
  title: string;
  text: string;
  background?: boolean;
  srcImg: string;
  sectionId?: string;
  component?: string;
};

export const GridTwoColumn = ({
  title,
  text,
  background,
  srcImg,
  sectionId = "",
}: GridTwoColumnProps) => {
  return (
    <>
      <SectionBackground background={background} sectionId={sectionId}>
        <Styled.Container>
          <Styled.TextContainer>
            <Heading uppercase colordark={!background} as="h2">
              {title}
            </Heading>
            <TextComponent>{text}</TextComponent>
          </Styled.TextContainer>
          <Styled.ImageContainer>
            <Styled.Image src={srcImg} alt={title} />
          </Styled.ImageContainer>
        </Styled.Container>
      </SectionBackground>
    </>
  );
};
