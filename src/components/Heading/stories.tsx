import { Heading, HeadingProps } from ".";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Heading",
  component: Heading,
  args: {
    children: "O texto está escuro",
  },
  argTypes: {
    children: { type: "string" },
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} as Meta<HeadingProps>;

export const Light: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

export const Dark: StoryFn<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: "light",
  },
};

Dark.args = {
  children: "O texto está claro",
  colordark: false,
};
