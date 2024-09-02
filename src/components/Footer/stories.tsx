import { Meta, StoryFn } from "@storybook/react";
import { Footer, FooterProps } from ".";

export default {
  title: "Footer",
  component: Footer,
  args: {
    footerHtml: `<p>Feito por Guilherme Augusto</p>`,
  },
} as Meta<typeof Footer>;

export const Template: StoryFn<FooterProps> = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
