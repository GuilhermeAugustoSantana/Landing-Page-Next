import * as Styled from "./styles";
import { SectionContainer } from "../SectionContainer";

export type SectionBackgroundProps = {
  children: React.ReactNode;
  background?: boolean;
  sectionId?: string;
};
export const SectionBackground = ({
  children,
  background = false,
  sectionId = "",
}: SectionBackgroundProps) => {
  const id = sectionId;
  return (
    <Styled.Container $background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};
